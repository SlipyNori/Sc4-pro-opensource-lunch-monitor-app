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
 * Only confirmed entries are listed; each was matched against the device screen.
 *   ballSpeedMs: confirmed 2026-11-20, 12.795 m/s ↔ screen "Ball 28.6 mph"
 */
export const SC4_VALUE_MAP: Partial<Record<'ballSpeedMs', [number, number]>> = {
  ballSpeedMs: [2, 2],
};

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
  const get = (key: keyof typeof SC4_VALUE_MAP) => {
    const loc = SC4_VALUE_MAP[key];
    if (!loc) return undefined;
    const v = parts.find((p) => p.part === loc[0])?.values?.[loc[1]];
    return v !== undefined && Number.isFinite(v) ? v : undefined;
  };
  const ballMs = get('ballSpeedMs');
  if (ballMs === undefined || ballMs <= 0 || ballMs > 120) return null;
  const head = parts.find((p) => p.part === 1);
  const raw = parts
    .map((p) => (p.part === 1 ? `p1: club ${p.club}, loft ${p.loft}` : `p${p.part}: ${p.values?.join(', ')}`))
    .join(' | ');
  return {
    ballSpeedMph: Math.round(ballMs * 2.23694 * 10) / 10,
    clubHint: head?.loft ? clubFromLoft(head.loft) : undefined,
    raw,
  };
}
