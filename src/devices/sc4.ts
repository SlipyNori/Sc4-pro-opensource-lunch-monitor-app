/**
 * What we know so far about Swing Caddie SC4 Pro data-channel (50340003) frames.
 * See docs/PROTOCOL.md. Everything here is confirmed from real captures paired
 * with what the device's screen showed; unknown bytes are kept raw.
 *
 * "Ss" frame, sent right after a shot registers (20 bytes):
 *   0-1   "Ss" (53 73)                 message type (shot header)
 *   2-4   uint24 big-endian            shot number (screen counter)
 *   5-10  YY MM DD hh mm ss            device clock at the shot
 *   11-12 uint16 big-endian            club code (20 = SW)
 *   13-16 float32 little-endian        club loft in degrees (56.0 for SW)
 *   17-18 00 45                        unknown
 *   19    checksum: all 20 bytes sum to 0 (mod 256)
 *
 * The shot's measurements (club/ball speed, carry, launch, apex…) are NOT in
 * this frame. They're expected in later frames, which the device may only send
 * after the app acknowledges the header.
 */

export function checksumOk(bytes: Uint8Array): boolean {
  let s = 0;
  for (const b of bytes) s = (s + b) & 0xff;
  return s === 0;
}

export interface Sc4FrameInfo {
  type: string;
  checksumOk: boolean;
  /** Device clock at the event, if the frame carries one */
  time?: string;
  shotNumber?: number;
  clubCode?: number;
  loftDeg?: number;
  /** Short human-readable summary for the log */
  summary: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

export function describeSc4Frame(bytes: Uint8Array): Sc4FrameInfo | null {
  if (bytes.length < 3) return null;
  const type = String.fromCharCode(bytes[0], bytes[1]);
  if (!/^[A-Za-z]{2}$/.test(type)) return null;
  const ok = checksumOk(bytes);
  const info: Sc4FrameInfo = { type, checksumOk: ok, summary: '' };
  const parts = [`"${type}" frame`, ok ? 'checksum ok' : 'checksum MISMATCH'];
  if (type === 'Ss' && bytes.length >= 20) {
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    info.shotNumber = (bytes[2] << 16) | (bytes[3] << 8) | bytes[4];
    const [yy, mo, dd, hh, mi, ss] = Array.from(bytes.slice(5, 11));
    if (mo >= 1 && mo <= 12 && dd >= 1 && dd <= 31 && hh < 24 && mi < 60 && ss < 60) {
      info.time = `20${pad(yy)}-${pad(mo)}-${pad(dd)} ${pad(hh)}:${pad(mi)}:${pad(ss)}`;
    }
    info.clubCode = v.getUint16(11, false);
    const loft = v.getFloat32(13, true);
    if (Number.isFinite(loft)) info.loftDeg = Math.round(loft * 10) / 10;
    parts.push(`shot #${info.shotNumber}`);
    if (info.time) parts.push(`at ${info.time}`);
    parts.push(`club code ${info.clubCode}`, `loft ${info.loftDeg}°`, `unknown ${bytes[17].toString(16).padStart(2, '0')} ${bytes[18].toString(16).padStart(2, '0')}`);
  }
  info.summary = parts.join(' · ');
  return info;
}
