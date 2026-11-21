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

  // The device screen for this shot: Practice · SW/56.0° · shot 1 · carry 31.1 yd ·
  // swing 40.8 mph · ball 45.3 mph · smash 1.11 · launch 16.3° · dir −0.7° · apex 6.8 ft
  it('reads the shot header: type, part 1, clock, club and loft', () => {
    const d = describeSc4Frame(REAL)!;
    expect(d.type).toBe('Ss');
    expect(d.part).toBe(1);
    expect(d.time).toBe('2026-11-20 22:39:12');
    expect(d.clubCode).toBe(20);
    expect(d.loftDeg).toBe(56);
  });

  // Sent by the device straight after the app echoed part 1 back (acknowledge)
  it('reads part 2 as three float values', () => {
    const d = describeSc4Frame(hexToBytes('53 73 00 00 02 52 F8 77 44 00 00 00 42 93 B9 4C 41 00 45 D3'))!;
    expect(d.checksumOk).toBe(true);
    expect(d.part).toBe(2);
    expect(d.values).toEqual([991.88, 32, 12.795]);
  });

  it('reads "Sx" (no shot measured) frames', () => {
    const d = describeSc4Frame(hexToBytes('53 78 0F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 45 E1'))!;
    expect(d.type).toBe('Sx');
    expect(d.checksumOk).toBe(true);
    expect(d.code).toBe(15);
  });

  it('ignores frames that are not SC4 messages', () => {
    expect(describeSc4Frame(hexToBytes('3C'))).toBeNull();
  });
});

import { clubFromLoft, sc4ShotFromParts } from '../src/devices/sc4';

describe('SC4 Pro shot from parts', () => {
  // Screen for this shot: carry 17.0 yd · swing 30.5 mph · ball 28.6 mph · launch dir 6.8° R · apex 9.8 ft
  const parts = [
    { part: 1, loft: 56, club: 20, time: '2026-11-20 23:04:21' },
    { part: 2, values: [991.88, 32, 12.795] },
  ];

  it('uses the ball speed (m/s → mph) and names the club from the loft', () => {
    const shot = sc4ShotFromParts(parts)!;
    expect(shot.ballSpeedMph).toBe(28.6);
    expect(shot.launchAngleDeg).toBe(32);
    expect(shot.clubHint).toBe('SW');
    expect(shot.raw).toContain('p2: 991.88, 32, 12.795');
  });

  it('waits for the part with the ball speed', () => {
    expect(sc4ShotFromParts([parts[0]])).toBeNull();
  });

  it('maps lofts to clubs', () => {
    expect(clubFromLoft(10)).toBe('DR');
    expect(clubFromLoft(34)).toBe('7i');
    expect(clubFromLoft(46)).toBe('PW');
  });
});

describe('SC4 Pro full shot decode', () => {
  // Real 6-part shot, 2026-11-20 23:14:27. Device screen: carry 16.9 yd · swing 30.6 mph ·
  // ball 28.5 mph · launch direction 4.9° R · apex 9.6 ft (launch angle, spin, smash: "--")
  const parts = [
    { part: 1, loft: 56, club: 20, time: '2026-11-20 23:14:27' },
    { part: 2, values: [991.76, 33.8, 12.719] },
    { part: 3, values: [13.698, 136, 15.44] },
    { part: 4, values: [16.344, 2.936, 4066] },
    { part: 5, values: [4.945, 20.113, 0] },
    { part: 6, values: [0, 0, 0] },
  ];

  it('matches every number on the device screen', () => {
    const s = sc4ShotFromParts(parts)!;
    expect(s.ballSpeedMph).toBe(28.5);
    expect(s.clubSpeedMph).toBe(30.6);
    expect(s.deviceCarryYd).toBe(16.9);
    expect(s.deviceApexFt).toBe(9.6);
    expect(s.launchDirectionDeg).toBe(4.9);
    expect(s.clubHint).toBe('SW');
  });

  it('also reads launch angle, spin and total', () => {
    const s = sc4ShotFromParts(parts)!;
    expect(s.launchAngleDeg).toBe(33.8);
    expect(s.spinRpm).toBe(4066);
    expect(s.deviceTotalYd).toBe(17.9);
  });
});
