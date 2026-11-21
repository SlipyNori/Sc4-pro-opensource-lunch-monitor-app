import { describe, expect, it } from 'vitest';
import { simulateShot, DEFAULT_ENVIRONMENT } from '../src/physics/ballFlight';
import { mToYd } from '../src/physics/units';

const shot = (ballSpeedMph: number, launchAngleDeg: number, spinRpm: number, extra = {}) =>
  simulateShot({ ballSpeedMph, launchAngleDeg, spinRpm, launchDirectionDeg: 0, spinAxisDeg: 0, ...extra });

describe('ball flight model', () => {
  // TrackMan PGA Tour averages: [ball speed, launch, spin, carry yd, apex yd]
  const tour: [string, number, number, number, number, number][] = [
    ['driver', 167, 10.9, 2686, 275, 32],
    ['3-wood', 158, 9.2, 3655, 243, 30],
    ['5-iron', 132, 12.1, 5361, 194, 31],
    ['7-iron', 120, 16.3, 7097, 172, 32],
    ['PW', 102, 24.2, 9304, 136, 29],
  ];
  for (const [name, bs, la, spin, carry, apex] of tour) {
    it(`${name} carry and apex are close to tour averages`, () => {
      const r = shot(bs, la, spin);
      expect(Math.abs(mToYd(r.carryM) - carry)).toBeLessThan(10);
      expect(Math.abs(mToYd(r.apexM) - apex)).toBeLessThan(5);
      expect(r.totalM).toBeGreaterThanOrEqual(r.carryM);
    });
  }

  it('straight shot stays on the target line', () => {
    const r = shot(150, 12, 3000);
    expect(Math.abs(r.carryLateralM)).toBeLessThan(0.01);
  });

  it('positive spin axis curves right, negative curves left', () => {
    expect(shot(150, 12, 3000, { spinAxisDeg: 15 }).carryLateralM).toBeGreaterThan(5);
    expect(shot(150, 12, 3000, { spinAxisDeg: -15 }).carryLateralM).toBeLessThan(-5);
  });

  it('launch direction starts the ball right/left', () => {
    expect(shot(150, 12, 3000, { launchDirectionDeg: 5 }).carryLateralM).toBeGreaterThan(5);
  });

  it('thin air (altitude) flies further', () => {
    const launch = { ballSpeedMph: 150, launchAngleDeg: 12, spinRpm: 3000, launchDirectionDeg: 0, spinAxisDeg: 0 };
    const sea = simulateShot(launch);
    const denver = simulateShot(launch, { ...DEFAULT_ENVIRONMENT, airDensity: 1.0 });
    expect(denver.carryM).toBeGreaterThan(sea.carryM * 1.04);
  });

  it('headwind shortens, tailwind lengthens', () => {
    const launch = { ballSpeedMph: 150, launchAngleDeg: 12, spinRpm: 3000, launchDirectionDeg: 0, spinAxisDeg: 0 };
    const calm = simulateShot(launch).carryM;
    const head = simulateShot(launch, { ...DEFAULT_ENVIRONMENT, windSpeed: 8, windDirectionDeg: 180 }).carryM;
    const tail = simulateShot(launch, { ...DEFAULT_ENVIRONMENT, windSpeed: 8, windDirectionDeg: 0 }).carryM;
    expect(head).toBeLessThan(calm);
    expect(tail).toBeGreaterThan(calm);
  });

  it('roll is realistic: drivers roll more than wedges, and never absurdly far', () => {
    const roll = (r: ReturnType<typeof shot>) => mToYd(r.totalM - r.carryM);
    const dr = roll(shot(167, 10.9, 2686));
    const lowSpin = roll(shot(135, 12, 1900));
    const pw = roll(shot(102, 24.2, 9304));
    expect(dr).toBeGreaterThan(10);
    expect(dr).toBeLessThan(45);
    expect(lowSpin).toBeLessThan(60);
    expect(pw).toBeLessThan(dr);
  });

  it('more ball speed means more carry', () => {
    expect(shot(160, 12, 2800).carryM).toBeGreaterThan(shot(140, 12, 2800).carryM);
  });
});
