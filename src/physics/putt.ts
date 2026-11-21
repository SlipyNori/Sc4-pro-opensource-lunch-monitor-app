/**
 * Putting model: the ball rolls in a straight line and slows at a constant rate
 * set by green speed. A Stimpmeter releases the ball at 1.83 m/s, and the
 * Stimp number is how many feet it rolls – so deceleration = 1.83² / (2 · stimp · 0.3048).
 * (No slopes/break: greens are treated as flat.)
 */
import type { FlightResult, TrajectoryPoint } from './ballFlight';
import { DEG, mphToMs } from './units';

export const STIMP_RELEASE_MS = 1.83;
export const HOLE_RADIUS_M = 0.054;

export const puttDecel = (stimp: number) => (STIMP_RELEASE_MS ** 2) / (2 * Math.max(4, stimp) * 0.3048);

/** Roll distance (m) for a launch speed (m/s) on a green of the given Stimp */
export const puttDistance = (speedMs: number, stimp: number) => (speedMs * speedMs) / (2 * puttDecel(stimp));

/** Speed (m/s) needed to roll `distanceM` */
export const puttSpeedFor = (distanceM: number, stimp: number) => Math.sqrt(2 * puttDecel(stimp) * distanceM);

export function simulatePutt(ballSpeedMph: number, directionDeg: number, stimp = 10): FlightResult {
  const v0 = mphToMs(Math.max(0, ballSpeedMph));
  const a = puttDecel(stimp);
  const total = puttDistance(v0, stimp);
  const tEnd = v0 / a;
  const dir = directionDeg * DEG;
  const ground: TrajectoryPoint[] = [];
  const steps = Math.max(6, Math.ceil(tEnd / 0.05));
  for (let i = 1; i <= steps; i++) {
    const t = (tEnd * i) / steps;
    const d = v0 * t - 0.5 * a * t * t;
    ground.push({ t, x: d * Math.cos(dir), y: 0, z: d * Math.sin(dir) });
  }
  return {
    flight: [{ t: 0, x: 0, y: 0, z: 0 }],
    ground,
    carryM: 0,
    totalM: total * Math.cos(dir),
    carryLateralM: 0,
    totalLateralM: total * Math.sin(dir),
    apexM: 0,
    flightTimeS: 0,
    landingAngleDeg: 0,
  };
}
