/**
 * Data-driven binary frame decoder.
 *
 * The SC4 Pro's Bluetooth protocol is not publicly documented. Rather than
 * hard-coding guesses, the byte layout lives in a JSON "device profile" so it
 * can be filled in (and corrected) by the community without code changes.
 * See docs/PROTOCOL.md for how to capture packets and build a profile.
 */
import type { ShotMeasurement } from '../types';

export type FieldType =
  | 'uint8' | 'int8'
  | 'uint16le' | 'uint16be' | 'int16le' | 'int16be'
  | 'uint32le' | 'uint32be' | 'int32le' | 'int32be'
  | 'float32le' | 'float32be';

export interface FieldSpec {
  /** Byte offset into the frame */
  offset: number;
  type: FieldType;
  /** Multiplied after reading (e.g. 0.1 for tenths, 0.621371 for km/h → mph) */
  scale?: number;
  /** Added after scaling */
  add?: number;
}

export type DecodableField = Exclude<keyof ShotMeasurement, 'raw' | 'clubHint'>;

export interface FrameMatcher {
  /** Exact frame length in bytes, if fixed */
  length?: number;
  /** Hex prefix the frame must start with, e.g. "AA 55 01" */
  prefix?: string;
}

export interface DeviceProfile {
  name: string;
  notes?: string;
  /** Advertised name prefixes used in the Bluetooth chooser */
  namePrefixes: string[];
  /** GATT services to request access to (Web Bluetooth requires these up front) */
  services: string[];
  /** Characteristic that carries shot frames (if known) */
  shotCharacteristic?: string;
  /** Characteristic that accepts commands (if known) */
  commandCharacteristic?: string;
  match?: FrameMatcher;
  fields: Partial<Record<DecodableField, FieldSpec>>;
  /**
   * Optional status messages, for the "ready to hit" light. Fill these in once a
   * capture shows which packets the device sends when it is armed / not armed.
   */
  status?: {
    ready?: FrameMatcher;
    notReady?: FrameMatcher;
  };
}

export type DeviceReadiness = 'ready' | 'not-ready';

/** Classify a packet as a ready / not-ready status message, if the profile describes them. */
export function matchStatus(bytes: Uint8Array, profile: DeviceProfile): DeviceReadiness | null {
  const st = profile.status;
  if (!st) return null;
  if (st.ready && (st.ready.prefix || st.ready.length !== undefined) && frameMatches(bytes, st.ready)) return 'ready';
  if (st.notReady && (st.notReady.prefix || st.notReady.length !== undefined) && frameMatches(bytes, st.notReady)) return 'not-ready';
  return null;
}

const SIZES: Record<FieldType, number> = {
  uint8: 1, int8: 1,
  uint16le: 2, uint16be: 2, int16le: 2, int16be: 2,
  uint32le: 4, uint32be: 4, int32le: 4, int32be: 4,
  float32le: 4, float32be: 4,
};

export function readField(view: DataView, spec: FieldSpec): number | undefined {
  if (spec.offset < 0 || spec.offset + SIZES[spec.type] > view.byteLength) return undefined;
  const o = spec.offset;
  let v: number;
  switch (spec.type) {
    case 'uint8': v = view.getUint8(o); break;
    case 'int8': v = view.getInt8(o); break;
    case 'uint16le': v = view.getUint16(o, true); break;
    case 'uint16be': v = view.getUint16(o, false); break;
    case 'int16le': v = view.getInt16(o, true); break;
    case 'int16be': v = view.getInt16(o, false); break;
    case 'uint32le': v = view.getUint32(o, true); break;
    case 'uint32be': v = view.getUint32(o, false); break;
    case 'int32le': v = view.getInt32(o, true); break;
    case 'int32be': v = view.getInt32(o, false); break;
    case 'float32le': v = view.getFloat32(o, true); break;
    case 'float32be': v = view.getFloat32(o, false); break;
  }
  return v * (spec.scale ?? 1) + (spec.add ?? 0);
}

export function hexToBytes(hex: string): Uint8Array {
  const clean = hex.replace(/[^0-9a-fA-F]/g, '');
  if (clean.length % 2) throw new Error(`Odd-length hex string: ${hex}`);
  const out = new Uint8Array(clean.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
  return out;
}

export function bytesToHex(bytes: ArrayBuffer | ArrayBufferView): string {
  const u8 = bytes instanceof ArrayBuffer
    ? new Uint8Array(bytes)
    : new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  return Array.from(u8, (b) => b.toString(16).padStart(2, '0').toUpperCase()).join(' ');
}

export function frameMatches(bytes: Uint8Array, match?: FrameMatcher): boolean {
  if (!match) return true;
  if (match.length !== undefined && bytes.length !== match.length) return false;
  if (match.prefix) {
    const p = hexToBytes(match.prefix);
    if (bytes.length < p.length) return false;
    for (let i = 0; i < p.length; i++) if (bytes[i] !== p[i]) return false;
  }
  return true;
}

/** Decode a frame using a profile. Returns null if the frame doesn't match or has no ball speed. */
export function decodeFrame(bytes: Uint8Array, profile: DeviceProfile): ShotMeasurement | null {
  if (!frameMatches(bytes, profile.match)) return null;
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const out: Partial<ShotMeasurement> = { raw: bytesToHex(bytes) };
  for (const [key, spec] of Object.entries(profile.fields) as [DecodableField, FieldSpec][]) {
    const v = readField(view, spec);
    if (v !== undefined && Number.isFinite(v)) out[key] = v;
  }
  if (!out.ballSpeedMph || out.ballSpeedMph <= 0) return null;
  return out as ShotMeasurement;
}

export function validateProfile(p: unknown): DeviceProfile {
  if (!p || typeof p !== 'object') throw new Error('Profile must be a JSON object');
  const o = p as Record<string, unknown>;
  if (typeof o.name !== 'string') throw new Error('Profile needs a "name"');
  if (!Array.isArray(o.namePrefixes)) throw new Error('Profile needs "namePrefixes": []');
  if (!Array.isArray(o.services)) throw new Error('Profile needs "services": []');
  if (!o.fields || typeof o.fields !== 'object') throw new Error('Profile needs "fields": {}');
  for (const [k, spec] of Object.entries(o.fields as Record<string, FieldSpec>)) {
    if (typeof spec.offset !== 'number' || !(spec.type in SIZES)) {
      throw new Error(`Field "${k}" needs a numeric "offset" and a valid "type"`);
    }
  }
  return o as unknown as DeviceProfile;
}
