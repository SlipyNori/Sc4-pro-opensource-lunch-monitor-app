/**
 * OpenSC4 Connector
 *
 * Runs on the PC next to your golf simulator. The OpenSC4 web app reads the
 * SC4 Pro over Bluetooth and sends each decoded shot here (WebSocket on
 * 127.0.0.1); the connector forwards it to GSPro and/or other simulators that
 * accept the GSPro Open Connect format, and passes the simulator's selected
 * club back to the app.
 *
 *   opensc4-connector [--port 8765] [--allow-origin https://example.org]
 */
import net from 'node:net';
import { WebSocketServer, type WebSocket } from 'ws';
import { gsproHeartbeat, gsproShot, splitJsonStream, fromGsproClub, type GsproMessage } from './gspro';
import {
  CONNECTOR_PORT,
  CONNECTOR_VERSION,
  type AppToConnector,
  type ConnectorToApp,
  type OutputStatus,
  type TargetConfig,
} from './protocol';

// ---------------- options ----------------
const args = process.argv.slice(2);
const arg = (name: string) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const PORT = Number(arg('--port') ?? process.env.OPENSC4_PORT ?? CONNECTOR_PORT);

/** Only these web pages may send shots (others could inject fake shots) */
const ALLOWED_ORIGINS = [
  'https://slipynori.github.io',
  'null', // the app opened as a local file
  ...(arg('--allow-origin') ? [arg('--allow-origin')!] : []),
];
const originAllowed = (o: string | undefined) =>
  !o || ALLOWED_ORIGINS.includes(o) || /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(o);

const DEFAULT_TARGETS: TargetConfig[] = [{ name: 'GSPro', host: '127.0.0.1', port: 921, enabled: true }];

const log = (...a: unknown[]) => console.log(new Date().toLocaleTimeString(), ...a);

// ---------------- simulator outputs ----------------
class SimOutput {
  status: OutputStatus;
  private socket: net.Socket | null = null;
  private buffer = '';
  private retry: NodeJS.Timeout | null = null;
  private shotNumber = 0;
  private closed = false;
  private pending: string[] = []; // shot ids awaiting a response

  constructor(public cfg: TargetConfig, private onChange: () => void, private onClub: (club: string, from: string) => void, private onResult: (id: string, ok: boolean, msg?: string) => void) {
    this.status = { name: cfg.name, target: `${cfg.host}:${cfg.port}`, connected: false, shotsSent: 0 };
    this.connect();
  }

  private connect() {
    if (this.closed) return;
    const s = net.createConnection({ host: this.cfg.host, port: this.cfg.port });
    this.socket = s;
    s.setNoDelay(true);
    s.on('connect', () => {
      log(`✓ Connected to ${this.cfg.name} (${this.status.target})`);
      this.status.connected = true;
      this.status.error = undefined;
      this.onChange();
    });
    s.on('data', (d) => this.onData(d.toString('utf8')));
    s.on('error', (e) => {
      const msg = (e as NodeJS.ErrnoException).code === 'ECONNREFUSED' ? 'not running / not listening yet' : e.message;
      if (this.status.error !== msg) log(`… ${this.cfg.name}: ${msg}`);
      this.status.error = msg;
    });
    s.on('close', () => {
      if (this.status.connected) log(`✗ Disconnected from ${this.cfg.name}`);
      this.status.connected = false;
      this.socket = null;
      this.onChange();
      if (!this.closed) this.retry = setTimeout(() => this.connect(), 3000);
    });
  }

  private onData(text: string) {
    const { messages, rest } = splitJsonStream(this.buffer + text);
    this.buffer = rest.length > 100_000 ? '' : rest;
    for (const m of messages) {
      if (m.Code === 201 && m.Player?.Club) {
        const club = fromGsproClub(m.Player.Club);
        if (club) this.onClub(club, this.cfg.name);
      } else if (m.Code >= 200 && m.Code < 300) {
        const id = this.pending.shift();
        if (id) this.onResult(id, true, m.Message);
      } else if (m.Code >= 500) {
        const id = this.pending.shift();
        log(`! ${this.cfg.name} error ${m.Code}: ${m.Message ?? ''}`);
        if (id) this.onResult(id, false, m.Message);
      }
    }
  }

  private write(msg: GsproMessage) {
    if (!this.socket || !this.status.connected) return false;
    this.socket.write(JSON.stringify(msg));
    return true;
  }

  sendShot(id: string, shot: Parameters<typeof gsproShot>[0]) {
    const msg = gsproShot(shot, ++this.shotNumber);
    if (!this.write(msg)) {
      this.onResult(id, false, `${this.cfg.name} is not connected`);
      return;
    }
    this.pending.push(id);
    if (this.pending.length > 20) this.pending.shift();
    this.status.shotsSent++;
    log(`→ ${this.cfg.name}: shot ${this.shotNumber} · ball ${msg.BallData!.Speed} mph · VLA ${msg.BallData!.VLA}° · HLA ${msg.BallData!.HLA}° · spin ${msg.BallData!.TotalSpin}`);
    this.onChange();
  }

  heartbeat(ready: boolean, ballDetected: boolean) {
    this.write(gsproHeartbeat(this.shotNumber, ready, ballDetected));
  }

  close() {
    this.closed = true;
    if (this.retry) clearTimeout(this.retry);
    this.socket?.destroy();
  }
}

// ---------------- state ----------------
let outputs: SimOutput[] = [];
let ready = false;
let ballDetected = false;
const clients = new Set<WebSocket>();

const statuses = () => outputs.map((o) => ({ ...o.status }));
const broadcast = (m: ConnectorToApp) => {
  const s = JSON.stringify(m);
  for (const c of clients) if (c.readyState === c.OPEN) c.send(s);
};
const notifyOutputs = () => broadcast({ type: 'outputs', outputs: statuses() });

function configure(targets: TargetConfig[]) {
  const wanted = targets.filter((t) => t.enabled && t.host && t.port > 0 && t.port < 65536);
  const key = (t: TargetConfig) => `${t.name}|${t.host}|${t.port}`;
  // keep matching outputs, close removed ones, open new ones
  const keep = outputs.filter((o) => wanted.some((t) => key(t) === key(o.cfg)));
  for (const o of outputs) if (!keep.includes(o)) o.close();
  const add = wanted.filter((t) => !keep.some((o) => key(o.cfg) === key(t)));
  outputs = [
    ...keep,
    ...add.map((t) => new SimOutput(t, notifyOutputs, (club, from) => {
      log(`⛳ ${from} selected club ${club}`);
      broadcast({ type: 'club', club, source: from });
    }, (id, ok, message) => broadcast({ type: 'shotResult', id, output: t.name, ok, message }))),
  ];
  log(`Sending shots to: ${outputs.map((o) => `${o.cfg.name} (${o.status.target})`).join(', ') || 'nothing (all outputs off)'}`);
  notifyOutputs();
}

configure(DEFAULT_TARGETS);

// Keep simulators up to date with readiness
setInterval(() => outputs.forEach((o) => o.heartbeat(ready, ballDetected)), 5000);

// ---------------- web app link ----------------
const wss = new WebSocketServer({
  host: '127.0.0.1', // never reachable from other machines
  port: PORT,
  verifyClient: ({ origin }: { origin?: string }) => {
    const ok = originAllowed(origin);
    if (!ok) log(`Refused a connection from ${origin} (not the OpenSC4 app)`);
    return ok;
  },
});

wss.on('listening', () => {
  log(`OpenSC4 Connector ${CONNECTOR_VERSION} is running.`);
  log(`Waiting for the OpenSC4 app on ws://127.0.0.1:${PORT}. Open the OpenSC4 app, go to the Simulators tab and switch on "Send my shots to golf simulators".`);
});
wss.on('error', (e) => {
  log(`Couldn't start: ${(e as Error).message}. Is another copy of the connector already running?`);
  process.exitCode = 1;
});

wss.on('connection', (ws) => {
  clients.add(ws);
  log('✓ OpenSC4 app connected');
  ws.send(JSON.stringify({ type: 'hello', version: CONNECTOR_VERSION, outputs: statuses() } satisfies ConnectorToApp));
  ws.on('message', (data) => {
    let msg: AppToConnector;
    try {
      msg = JSON.parse(data.toString());
    } catch {
      return;
    }
    if (msg.type === 'configure' && Array.isArray(msg.targets)) configure(msg.targets);
    else if (msg.type === 'shot' && msg.shot && Number.isFinite(msg.shot.ballSpeedMph)) {
      if (!outputs.length) log('Shot received, but no simulator output is switched on');
      for (const o of outputs) o.sendShot(msg.id, msg.shot);
    } else if (msg.type === 'status') {
      const changed = msg.ready !== ready || msg.ballDetected !== ballDetected;
      ready = !!msg.ready;
      ballDetected = !!msg.ballDetected;
      if (changed) outputs.forEach((o) => o.heartbeat(ready, ballDetected));
    }
  });
  ws.on('close', () => {
    clients.delete(ws);
    log('✗ OpenSC4 app disconnected');
  });
});

process.on('SIGINT', () => {
  log('Stopping…');
  outputs.forEach((o) => o.close());
  wss.close();
  process.exit(0);
});
