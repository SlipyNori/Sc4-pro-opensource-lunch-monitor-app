/**
 * Link from the web app to the OpenSC4 Connector running on this PC, which
 * forwards shots to GSPro / Infinite Tees / other simulators.
 */
import {
  CONNECTOR_PORT,
  type AppToConnector,
  type ConnectorShot,
  type ConnectorToApp,
  type OutputStatus,
  type TargetConfig,
} from '../../connector/src/protocol';

export type LinkState = 'off' | 'connecting' | 'connected' | 'unreachable';

export class ConnectorClient {
  state: LinkState = 'off';
  outputs: OutputStatus[] = [];
  version = '';
  private ws: WebSocket | null = null;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private enabled = false;
  private lastStatus = '';
  onChange: () => void = () => {};
  onClub: (club: string, source: string) => void = () => {};
  onResult: (output: string, ok: boolean, message?: string) => void = () => {};

  constructor(public targets: TargetConfig[], public port = CONNECTOR_PORT) {}

  setEnabled(on: boolean) {
    this.enabled = on;
    if (on) this.open();
    else {
      if (this.timer) clearTimeout(this.timer);
      this.ws?.close();
      this.ws = null;
      this.set('off');
    }
  }

  configure(targets: TargetConfig[]) {
    this.targets = targets;
    this.send({ type: 'configure', targets });
  }

  sendShot(id: string, shot: ConnectorShot): boolean {
    return this.send({ type: 'shot', id, shot });
  }

  /** Tell simulators whether the launch monitor is armed and a ball is set (deduplicated). */
  setStatus(ready: boolean, ballDetected: boolean) {
    const key = `${ready}|${ballDetected}`;
    if (key === this.lastStatus) return;
    this.lastStatus = key;
    this.send({ type: 'status', ready, ballDetected });
  }

  private set(s: LinkState) {
    this.state = s;
    this.onChange();
  }

  private send(m: AppToConnector) {
    if (this.ws?.readyState !== WebSocket.OPEN) return false;
    this.ws.send(JSON.stringify(m));
    return true;
  }

  private open() {
    if (!this.enabled || this.ws) return;
    this.set('connecting');
    let ws: WebSocket;
    try {
      ws = new WebSocket(`ws://127.0.0.1:${this.port}`);
    } catch {
      this.retry();
      return;
    }
    this.ws = ws;
    ws.onopen = () => {
      this.set('connected');
      this.send({ type: 'hello', app: 'OpenSC4 Range', version: '1' });
      this.send({ type: 'configure', targets: this.targets });
      const [ready, ball] = this.lastStatus.split('|');
      if (ready) this.send({ type: 'status', ready: ready === 'true', ballDetected: ball === 'true' });
    };
    ws.onmessage = (ev) => {
      let m: ConnectorToApp;
      try {
        m = JSON.parse(String(ev.data));
      } catch {
        return;
      }
      if (m.type === 'hello') {
        this.version = m.version;
        this.outputs = m.outputs;
        this.onChange();
      } else if (m.type === 'outputs') {
        this.outputs = m.outputs;
        this.onChange();
      } else if (m.type === 'club') this.onClub(m.club, m.source);
      else if (m.type === 'shotResult') this.onResult(m.output, m.ok, m.message);
    };
    ws.onclose = () => {
      this.ws = null;
      this.outputs = [];
      if (this.enabled) {
        this.set('unreachable');
        this.retry();
      }
    };
    ws.onerror = () => {
      /* onclose follows */
    };
  }

  private retry() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => this.open(), 3000);
  }
}
