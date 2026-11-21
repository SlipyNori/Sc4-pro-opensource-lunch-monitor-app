import type { ClubId, ShotMeasurement } from '../types';
/**
 * What we know so far about Swing Caddie SC4 Pro data-channel (50340003) frames.
 * See docs/PROTOCOL.md. Everything here is confirmed from real captures paired
 * with what the device's screen showed; unknown values are kept raw.
 *
 * A shot is sent as a series of 20-byte "Ss" frames. The device sends part 1,
 * then waits: the app acknowledges each part by writing the same 20 bytes back
 * to the command channel (50340002), and the device answers with the next part.
 *
 *   0-1   "Ss" (53 73)                 message type
 *   2-4   uint24 big-endian            part number (1, 2, 3, …)
 *   5-16  part 1: YY MM DD hh mm ss (device clock), uint16 BE club code
 *                 (20 = SW), float32 LE club loft (56.0 for SW)
 *         part 2+: three float32 little-endian values (meaning being mapped)
 *   17-18 00 45                        unknown (same in every frame so far)
 *   19    checksum: all 20 bytes sum to 0 (mod 256)
 *
 * "Sx" frame: `53 78 0F 00 … 00 45 E1`, no measurements. Seen after swings
 * that didn't produce a reading. Repeated until acknowledged (same echo).
 * Byte 2 is probably a reason code (0x0F seen so far).
 */

export function checksumOk(bytes: Uint8Array): boolean {
  let s = 0;
  for (const b of bytes) s = (s + b) & 0xff;
  return s === 0;
}

export interface Sc4FrameInfo {
  type: string;
  checksumOk: boolean;
  /** Part number within a shot (1 = header) */
  part?: number;
  /** Device clock at the shot (part 1) */
  time?: string;
  clubCode?: number;
  loftDeg?: number;
  /** Part 2+: the three float values */
  values?: number[];
  /** "Sx" frames: reason code */
  code?: number;
  /** Short human-readable summary for the log */
  summary: string;
}

const pad = (n: number) => String(n).padStart(2, '0');
const round = (n: number) => Math.round(n * 1000) / 1000;

export function describeSc4Frame(bytes: Uint8Array): Sc4FrameInfo | null {
  if (bytes.length < 3) return null;
  const type = String.fromCharCode(bytes[0], bytes[1]);
  if (!/^[A-Za-z]{2}$/.test(type)) return null;
  const ok = checksumOk(bytes);
  const info: Sc4FrameInfo = { type, checksumOk: ok, summary: '' };
  const parts = [`"${type}" frame`, ok ? 'checksum ok' : 'checksum MISMATCH'];
  if (type === 'Ss' && bytes.length >= 20) {
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    info.part = (bytes[2] << 16) | (bytes[3] << 8) | bytes[4];
    parts.push(`part ${info.part}`);
    if (info.part === 1) {
      const [yy, mo, dd, hh, mi, ss] = Array.from(bytes.slice(5, 11));
      if (mo >= 1 && mo <= 12 && dd >= 1 && dd <= 31 && hh < 24 && mi < 60 && ss < 60) {
        info.time = `20${pad(yy)}-${pad(mo)}-${pad(dd)} ${pad(hh)}:${pad(mi)}:${pad(ss)}`;
        parts.push(`device time ${info.time}`);
      }
      info.clubCode = v.getUint16(11, false);
      info.loftDeg = Math.round(v.getFloat32(13, true) * 10) / 10;
      parts.push(`club code ${info.clubCode}`, `loft ${info.loftDeg}°`);
    } else {
      info.values = [5, 9, 13].map((o) => round(v.getFloat32(o, true)));
      parts.push(`values ${info.values.join(' · ')}`);
    }
  } else if (type === 'Sx') {
    info.code = bytes[2];
    parts.push(`no shot measured (code ${bytes[2]})`);
  }
  info.summary = parts.join(' · ');
  return info;
}

// ---------------- Turning parts into a shot ----------------


export interface Sc4Part {
  part: number;
  values?: number[];
  loft?: number;
  club?: number;
  time?: string;
}

/**
 * Where each measurement lives, as [part, index within that part's three values].
 * Units are SI as sent by the device. Matched against the device screen for the
 * shot at 23:14:27 on 2026-11-20 (screen → data):
 *   swing 30.6 mph ↔ 13.698 m/s · ball 28.5 mph ↔ 12.719 m/s · carry 16.9 yd ↔ 15.44 m
 *   apex 9.6 ft ↔ 2.936 m · launch direction 4.9° R ↔ 4.945
 * Launch angle (33.8°) and spin (4066 rpm) showed "--" on screen, but reproduce
 * the measured carry/apex in the flight model; total (16.344 m) is the device's
 * estimate including roll. Other values seen: p2[0] ≈ 991.8 (constant; air
 * pressure?), p3[1] = 136 (unknown), p5[1] = 20.1 (air temperature °C?).
 */
export const SC4_VALUE_MAP = {
  ballSpeedMs: [2, 2],
  launchAngleDeg: [2, 1],
  clubSpeedMs: [3, 0],
  carryM: [3, 2],
  totalM: [4, 0],
  apexM: [4, 1],
  spinRpm: [4, 2],
  launchDirectionDeg: [5, 0],
} as const satisfies Record<string, readonly [number, number]>;

/** Typical lofts, to name the club from the loft the device reports */
const CLUB_LOFTS: [ClubId, number][] = [
  ['DR', 10.5], ['3W', 15], ['5W', 18], ['HY', 21], ['4i', 24], ['5i', 27], ['6i', 30],
  ['7i', 34], ['8i', 38], ['9i', 42], ['PW', 46], ['GW', 50], ['SW', 56], ['LW', 60],
];

export function clubFromLoft(loft: number): ClubId {
  let best = CLUB_LOFTS[0];
  for (const c of CLUB_LOFTS) if (Math.abs(c[1] - loft) < Math.abs(best[1] - loft)) best = c;
  return best[0];
}

/**
 * Build a shot from the parts received so far, using only confirmed values.
 * Returns null if the shot's ball speed hasn't arrived (e.g. acknowledge is off).
 */
export function sc4ShotFromParts(parts: Sc4Part[]): (ShotMeasurement & { clubHint?: ClubId }) | null {
  const get = (key: keyof typeof SC4_VALUE_MAP, min: number, max: number) => {
    const [part, idx] = SC4_VALUE_MAP[key];
    const v = parts.find((p) => p.part === part)?.values?.[idx];
    // Zero means "not measured"; anything outside a sane range is ignored
    return v !== undefined && Number.isFinite(v) && v !== 0 && v >= min && v <= max ? v : undefined;
  };
  const ballMs = get('ballSpeedMs', 0.5, 120);
  if (ballMs === undefined) return null;
  const MS = 2.23694, YD = 1.0936133, FT = 3.2808399;
  const r1 = (n: number) => Math.round(n * 10) / 10;
  const clubMs = get('clubSpeedMs', 0.5, 100);
  const carryM = get('carryM', 0.1, 450);
  const totalM = get('totalM', 0.1, 500);
  const apexM = get('apexM', 0.01, 100);
  const launch = get('launchAngleDeg', 0.1, 80);
  const spin = get('spinRpm', 50, 15000);
  const dirRaw = parts.find((p) => p.part === SC4_VALUE_MAP.launchDirectionDeg[0])?.values?.[SC4_VALUE_MAP.launchDirectionDeg[1]];
  const dir = dirRaw !== undefined && Number.isFinite(dirRaw) && Math.abs(dirRaw) <= 45 ? dirRaw : undefined;
  const head = parts.find((p) => p.part === 1);
  const raw = parts
    .map((p) => (p.part === 1 ? `p1: club ${p.club}, loft ${p.loft}` : `p${p.part}: ${p.values?.join(', ')}`))
    .join(' | ');
  const shot: ShotMeasurement & { clubHint?: ClubId } = {
    ballSpeedMph: r1(ballMs * MS),
    clubHint: head?.loft ? clubFromLoft(head.loft) : undefined,
    raw,
  };
  if (clubMs !== undefined) shot.clubSpeedMph = r1(clubMs * MS);
  if (launch !== undefined) shot.launchAngleDeg = r1(launch);
  if (spin !== undefined) shot.spinRpm = Math.round(spin);
  if (dir !== undefined) shot.launchDirectionDeg = r1(dir);
  if (carryM !== undefined) shot.deviceCarryYd = r1(carryM * YD);
  if (totalM !== undefined) shot.deviceTotalYd = r1(totalM * YD);
  if (apexM !== undefined) shot.deviceApexFt = r1(apexM * FT);
  return shot;
}
