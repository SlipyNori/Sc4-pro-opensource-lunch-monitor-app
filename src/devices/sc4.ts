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
  }
  info.summary = parts.join(' · ');
  return info;
}
