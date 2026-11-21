import { describe, expect, it } from 'vitest';
import { processShot } from '../src/session/processShot';
import { statsByClub } from '../src/session/stats';
import { csvToMeasurements, shotsToCsv } from '../src/session/csv';
import { randomShot } from '../src/devices/SimulatedDevice';
import { CLUBS } from '../src/types';

describe('session', () => {
  it('fills missing launch data and marks it estimated', () => {
    const { shot } = processShot({ ballSpeedMph: 120 }, '7i', 'test');
    expect(shot.launchAngleDeg).toBeGreaterThan(10);
    expect(shot.spinRpm).toBeGreaterThan(4000);
    expect(shot.estimated).toContain('spinRpm');
    expect(shot.carryYd).toBeGreaterThan(130);
  });

  it('computes smash factor', () => {
    const { shot } = processShot({ ballSpeedMph: 148, clubSpeedMph: 100 }, 'DR', 'test');
    expect(shot.smashFactor).toBe(1.48);
  });

  it('simulator produces plausible shots for every club', () => {
    let seed = 1;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (const c of CLUBS) {
      const m = randomShot(c, rand);
      expect(m.ballSpeedMph).toBeGreaterThan(0);
      const { shot } = processShot(m, c, 'sim');
      expect(Number.isFinite(shot.totalYd)).toBe(true);
    }
  });

  it('stats group by club', () => {
    const shots = [
      processShot({ ballSpeedMph: 120 }, '7i', 't').shot,
      processShot({ ballSpeedMph: 122 }, '7i', 't').shot,
      processShot({ ballSpeedMph: 150 }, 'DR', 't').shot,
    ];
    const s = statsByClub(shots);
    expect(s.find((x) => x.club === '7i')!.count).toBe(2);
    expect(s.find((x) => x.club === '7i')!.carryStdDev).toBeGreaterThan(0);
  });

  it('CSV export can be re-imported', () => {
    const shots = [processShot({ ballSpeedMph: 120, launchAngleDeg: 16, spinRpm: 7000 }, '7i', 't').shot];
    const back = csvToMeasurements(shotsToCsv(shots));
    expect(back).toHaveLength(1);
    expect(back[0].club).toBe('7i');
    expect(back[0].m.ballSpeedMph).toBe(120);
    expect(back[0].m.spinRpm).toBe(7000);
  });

  it('CSV import understands common header names', () => {
    const csv = 'Club,Ball Speed (mph),Launch Angle,Back Spin,Carry\nDR,150,12,2800,240\n';
    const [r] = csvToMeasurements(csv);
    expect(r.club).toBe('DR');
    expect(r.m).toMatchObject({ ballSpeedMph: 150, launchAngleDeg: 12, spinRpm: 2800, deviceCarryYd: 240 });
  });
});

describe('device-measured numbers', () => {
  it('shows the launch monitor’s own carry, total and apex when it reports them', () => {
    const { shot } = processShot({ ballSpeedMph: 28.5, clubSpeedMph: 30.6, launchAngleDeg: 33.8, spinRpm: 4066, deviceCarryYd: 16.9, deviceTotalYd: 17.9, deviceApexFt: 9.6 }, 'SW', 'SC4 Pro');
    expect(shot.carryYd).toBe(16.9);
    expect(shot.totalYd).toBe(17.9);
    expect(shot.apexFt).toBe(9.6);
    expect(shot.smashFactor).toBe(0.93);
    expect(shot.estimated).toEqual(expect.not.arrayContaining(['launchAngleDeg', 'spinRpm']));
  });
});
