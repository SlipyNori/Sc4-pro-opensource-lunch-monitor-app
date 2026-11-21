import { describe, expect, it } from 'vitest';
import { checksumOk, describeSc4Frame } from '../src/devices/sc4';
import { hexToBytes } from '../src/devices/frameDecoder';

// Captured from a real SC4 Pro (firmware 200) right after a hit at 10:39 PM on 2026-11-20
const REAL = hexToBytes('53 73 00 00 01 1A 0B 14 16 27 0C 00 14 00 00 60 42 00 45 BC');

describe('SC4 Pro frames', () => {
  it('validates the checksum (all bytes sum to 0 mod 256)', () => {
    expect(checksumOk(REAL)).toBe(true);
    const bad = REAL.slice();
    bad[13] ^= 1;
    expect(checksumOk(bad)).toBe(false);
  });

  it('reads the frame type and the device clock', () => {
    const d = describeSc4Frame(REAL)!;
    expect(d.type).toBe('Ss');
    expect(d.time).toBe('2026-11-20 22:39:12');
    expect(d.summary).toContain('value@13 = 56');
  });

  it('ignores frames that are not SC4 messages', () => {
    expect(describeSc4Frame(hexToBytes('3C'))).toBeNull();
  });
});
