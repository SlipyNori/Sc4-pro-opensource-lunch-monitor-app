/**
 * GSPro Open Connect API v1 (TCP, default port 921, JSON messages).
 * Also understood by several other simulators that adopted the same format.
 *
 * Connector → simulator: a shot or heartbeat object with BallData, ClubData and
 * ShotDataOptions. Simulator → connector: { Code, Message, Player } where
 * 200 = shot received, 201 = player info (handedness and selected club),
 * 5xx = error.
 */
import type { ConnectorShot } from './protocol';

export interface GsproMessage {
  DeviceID: string;
  Units: 'Yards' | 'Metres';
  ShotNumber: number;
  APIversion: '1';
  BallData?: {
    Speed: number;
    SpinAxis: number;
    TotalSpin: number;
    BackSpin: number;
    SideSpin: number;
    HLA: number;
    VLA: number;
    CarryDistance?: number;
  };
  ClubData?: {
    Speed: number;
  };
  ShotDataOptions: {
    ContainsBallData: boolean;
    ContainsClubData: boolean;
    LaunchMonitorIsReady: boolean;
    LaunchMonitorBallDetected: boolean;
    IsHeartBeat: boolean;
  };
}

export const DEVICE_ID = 'OpenSC4 (Swing Caddie SC4 Pro)';

const r = (n: number, dp = 1) => Math.round(n * 10 ** dp) / 10 ** dp;

/** Build a GSPro shot message. Spin is split into back/side spin from the spin axis. */
export function gsproShot(shot: ConnectorShot, shotNumber: number): GsproMessage {
  const total = shot.spinRpm ?? 0;
  const axis = shot.spinAxisDeg ?? 0;
  const rad = (axis * Math.PI) / 180;
  const msg: GsproMessage = {
    DeviceID: DEVICE_ID,
    Units: 'Yards',
    ShotNumber: shotNumber,
    APIversion: '1',
    BallData: {
      Speed: r(shot.ballSpeedMph),
      SpinAxis: r(axis),
      TotalSpin: Math.round(total),
      BackSpin: Math.round(total * Math.cos(rad)),
      SideSpin: Math.round(total * Math.sin(rad)),
      HLA: r(shot.launchDirectionDeg ?? 0),
      VLA: r(shot.launchAngleDeg ?? 0),
    },
    ShotDataOptions: {
      ContainsBallData: true,
      ContainsClubData: shot.clubSpeedMph !== undefined,
      LaunchMonitorIsReady: true,
      LaunchMonitorBallDetected: true,
      IsHeartBeat: false,
    },
  };
  if (shot.carryYd !== undefined) msg.BallData!.CarryDistance = r(shot.carryYd);
  if (shot.clubSpeedMph !== undefined) msg.ClubData = { Speed: r(shot.clubSpeedMph) };
  return msg;
}

/** Heartbeat / readiness update (no shot data). */
export function gsproHeartbeat(shotNumber: number, ready: boolean, ballDetected: boolean): GsproMessage {
  return {
    DeviceID: DEVICE_ID,
    Units: 'Yards',
    ShotNumber: shotNumber,
    APIversion: '1',
    ShotDataOptions: {
      ContainsBallData: false,
      ContainsClubData: false,
      LaunchMonitorIsReady: ready,
      LaunchMonitorBallDetected: ballDetected,
      IsHeartBeat: true,
    },
  };
}

export interface GsproResponse {
  Code: number;
  Message?: string;
  Player?: { Handed?: string; Club?: string; DistanceToTarget?: number } | null;
}

/**
 * Responses arrive on a TCP stream, so several JSON objects can come in one
 * chunk or one object can be split across chunks. Returns the complete objects
 * and whatever text is left over for the next chunk.
 */
export function splitJsonStream(buffer: string): { messages: GsproResponse[]; rest: string } {
  const messages: GsproResponse[] = [];
  let depth = 0, start = -1, inStr = false, esc = false;
  let consumed = 0; // end of the last complete object
  for (let i = 0; i < buffer.length; i++) {
    const c = buffer[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') inStr = true;
    else if (c === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (c === '}' && depth > 0) {
      depth--;
      if (depth === 0 && start >= 0) {
        try {
          messages.push(JSON.parse(buffer.slice(start, i + 1)));
        } catch {
          /* skip malformed object */
        }
        consumed = i + 1;
        start = -1;
      }
    }
  }
  // Keep an unfinished object for the next chunk; drop anything between objects
  const rest = depth > 0 && start >= 0 ? buffer.slice(start) : '';
  void consumed;
  return { messages, rest };
}

// ---------------- Club codes ----------------

/** OpenSC4 club → GSPro club code */
const TO_GSPRO: Record<string, string> = {
  DR: 'DR', '3W': 'W3', '5W': 'W5', HY: 'H4', '3i': 'I3', '4i': 'I4', '5i': 'I5', '6i': 'I6',
  '7i': 'I7', '8i': 'I8', '9i': 'I9', PW: 'PW', GW: 'GW', SW: 'SW', LW: 'LW', PT: 'PT',
};

export function toGsproClub(club: string): string | undefined {
  return TO_GSPRO[club];
}

/** GSPro club code → nearest OpenSC4 club */
export function fromGsproClub(code: string): string | undefined {
  const c = code.toUpperCase().trim();
  if (c === 'DR' || c === 'PW' || c === 'GW' || c === 'SW' || c === 'LW' || c === 'PT') return c;
  if (c === 'AW') return 'GW';
  const m = /^([WHI])(\d)$/.exec(c);
  if (!m) return undefined;
  const n = Number(m[2]);
  if (m[1] === 'W') return n <= 4 ? '3W' : '5W';
  if (m[1] === 'H') return 'HY';
  return n <= 3 ? '3i' : `${n}i`;
}
