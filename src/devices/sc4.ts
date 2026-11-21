/**
 * What we know so far about Swing Caddie SC4 Pro data-channel (50340003) frames.
 * See docs/PROTOCOL.md. Everything here is confirmed from real captures; unknown
 * bytes are shown raw so they can be matched against the device's screen.
 *
 * Frame seen after a hit (20 bytes):
 *   0-1   "Ss" (53 73)                 message type
 *   2-4   00 00 01                     unknown (counter / shot number?)
 *   5-10  YY MM DD hh mm ss            device clock at the hit
 *   11-12 00 14                        unknown
 *   13-16 float32 little-endian (56.0) unknown – ball speed?
 *   17-18 00 45                        unknown
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
  /** Device clock at the event, if the frame carries one */
  time?: string;
  /** Short human-readable summary for the log */
  summary: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

export function describeSc4Frame(bytes: Uint8Array): Sc4FrameInfo | null {
  if (bytes.length < 3) return null;
  const type = String.fromCharCode(bytes[0], bytes[1]);
  if (!/^[A-Za-z]{2}$/.test(type)) return null;
  const ok = checksumOk(bytes);
  let time: string | undefined;
  const parts = [`"${type}" frame`, ok ? 'checksum ok' : 'checksum MISMATCH'];
  if (type === 'Ss' && bytes.length >= 11) {
    const [yy, mo, dd, hh, mi, ss] = Array.from(bytes.slice(5, 11));
    if (mo >= 1 && mo <= 12 && dd >= 1 && dd <= 31 && hh < 24 && mi < 60 && ss < 60) {
      time = `20${pad(yy)}-${pad(mo)}-${pad(dd)} ${pad(hh)}:${pad(mi)}:${pad(ss)}`;
      parts.push(`device time ${time}`);
    }
    if (bytes.length >= 17) {
      const f = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength).getFloat32(13, true);
      if (Number.isFinite(f)) parts.push(`value@13 = ${Math.round(f * 100) / 100}`);
    }
  }
  return { type, checksumOk: ok, time, summary: parts.join(' · ') };
}
