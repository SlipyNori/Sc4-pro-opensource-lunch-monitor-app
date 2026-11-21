import { describe, expect, it } from 'vitest';
import { bytesToHex, decodeFrame, hexToBytes, validateProfile } from '../src/devices/frameDecoder';
import { EXAMPLE_PROFILE, SC4_PRO_PROFILE } from '../src/devices/profiles';

describe('frame decoder', () => {
  it('round-trips hex', () => {
    expect(bytesToHex(hexToBytes('a5 01 ff'))).toBe('A5 01 FF');
  });

  it('decodes a frame with the example profile', () => {
    const buf = new ArrayBuffer(14);
    const v = new DataView(buf);
    v.setUint8(0, 0xa5);
    v.setUint8(1, 0x01);
    v.setUint16(2, 1452, true); // 145.2 mph
    v.setUint16(4, 985, true); // 98.5 mph
    v.setInt16(6, 123, true); // 12.3°
    v.setInt16(8, -21, true); // -2.1°
    v.setUint16(10, 2750, true);
    v.setInt16(12, 45, true);
    const shot = decodeFrame(new Uint8Array(buf), EXAMPLE_PROFILE)!;
    expect(shot.ballSpeedMph).toBeCloseTo(145.2);
    expect(shot.clubSpeedMph).toBeCloseTo(98.5);
    expect(shot.launchAngleDeg).toBeCloseTo(12.3);
    expect(shot.launchDirectionDeg).toBeCloseTo(-2.1);
    expect(shot.spinRpm).toBe(2750);
    expect(shot.spinAxisDeg).toBeCloseTo(4.5);
    expect(shot.raw).toMatch(/^A5 01/);
  });

  it('rejects frames that do not match', () => {
    expect(decodeFrame(hexToBytes('00 00 00'), EXAMPLE_PROFILE)).toBeNull();
    expect(decodeFrame(new Uint8Array(14), EXAMPLE_PROFILE)).toBeNull(); // wrong prefix
  });

  it('default SC4 Pro profile is valid and in capture mode', () => {
    expect(validateProfile(SC4_PRO_PROFILE)).toBeTruthy();
    expect(Object.keys(SC4_PRO_PROFILE.fields)).toHaveLength(0);
  });

  it('validates bad profiles', () => {
    expect(() => validateProfile({ name: 'x', namePrefixes: [], services: [], fields: { ballSpeedMph: { offset: 'a' } } })).toThrow();
  });
});
