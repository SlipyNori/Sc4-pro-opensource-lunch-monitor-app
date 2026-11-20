/**
 * Calibration helper: grid-searches the AERO coefficients in src/physics/ballFlight.ts
 * against published tour-average launch/flight data. Run with `npm run calibrate`,
 * then copy the printed best-fit values into AERO.
 */
import { simulateShot, AERO } from '../src/physics/ballFlight';
import { mToYd } from '../src/physics/units';
// [ballSpeed, launch, spin, carry, apexYd, landDeg]  (TrackMan PGA Tour averages)
const T = [
  [167, 10.9, 2686, 275, 32, 38],
  [158, 9.2, 3655, 243, 30, 43],
  [132, 12.1, 5361, 194, 31, 47],
  [120, 16.3, 7097, 172, 32, 50],
  [102, 24.2, 9304, 136, 29, 52],
];
function score() {
  let e = 0;
  for (const [bs, la, sp, c, a, l] of T) {
    const r = simulateShot({ ballSpeedMph: bs, launchAngleDeg: la, launchDirectionDeg: 0, spinRpm: sp, spinAxisDeg: 0 }, undefined, 0.01);
    e += ((mToYd(r.carryM) - c) / 3) ** 2 + ((mToYd(r.apexM) - a) / 3) ** 2 + ((r.landingAngleDeg - l) / 4) ** 2;
  }
  return e;
}
let best = { e: Infinity, p: { ...AERO } };
const r = (c: number, d: number, n = 2) => Array.from({ length: 2 * n + 1 }, (_, i) => +(c + (i - n) * d).toFixed(4));
for (const cd0 of r(0.18, 0.015))
  for (const cdS of r(0.6, 0.1))
    for (const clA of r(2.0, 0.2))
      for (const clB of r(3, 0.75))
        for (const sMax of [0.25, 0.3, 0.35])
          for (const [cdLow, vLow] of [[0, 30], [0.1, 30], [0.2, 30], [0.1, 40], [0.2, 40], [0.3, 40]]) {
          Object.assign(AERO, { cd0, cdS, clA, clB, sMax, cdLow, vLow });
                    const e = score();
          if (e < best.e) best = { e, p: { ...AERO } };
        }
console.log(best);
Object.assign(AERO, best.p);
for (const [bs, la, sp, c, a, l] of T) {
  const r = simulateShot({ ballSpeedMph: bs, launchAngleDeg: la, launchDirectionDeg: 0, spinRpm: sp, spinAxisDeg: 0 });
  console.log(bs, 'carry', mToYd(r.carryM).toFixed(1), '/', c, 'apex', mToYd(r.apexM).toFixed(1), '/', a, 'land', r.landingAngleDeg.toFixed(1), '/', l, 'total', mToYd(r.totalM).toFixed(1));
}
