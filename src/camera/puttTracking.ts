/**
 * Measure a putt from webcam frames (pure logic, unit tested).
 *
 * Assumes the camera looks DOWN at the ball (overhead), so distances in the
 * picture are proportional to distances on the floor. The ball's known
 * diameter (42.67 mm) gives the scale, so no manual measuring is needed.
 */
import type { Zone } from './ballDetection';

export const BALL_DIAMETER_M = 0.04267;

/** Which way the ball rolls in the camera picture */
export type PuttDirection = 'up' | 'right' | 'down' | 'left';

export interface LaneSample {
  /** performance.now() ms */
  t: number;
  count: number;
  /** Centroid in frame pixels */
  x?: number;
  y?: number;
}

export interface PuttMeasurement {
  speedMs: number;
  /** + = right of the target line */
  directionDeg: number;
  /** How far the ball was tracked (m) */
  trackedM: number;
  samplesUsed: number;
}

const FORWARD: Record<PuttDirection, [number, number]> = {
  up: [0, -1],
  down: [0, 1],
  right: [1, 0],
  left: [-1, 0],
};

/** The lane: the ball box stretched to the frame edge in the putt direction, a bit wider than the box. */
export function laneZone(box: Zone, dir: PuttDirection): Zone {
  const padX = box.w;
  const padY = box.h;
  let z: Zone;
  switch (dir) {
    case 'up': z = { x: box.x - padX, y: 0, w: box.w + 2 * padX, h: box.y + box.h }; break;
    case 'down': z = { x: box.x - padX, y: box.y, w: box.w + 2 * padX, h: 1 - box.y }; break;
    case 'right': z = { x: box.x, y: box.y - padY, w: 1 - box.x, h: box.h + 2 * padY }; break;
    case 'left': z = { x: 0, y: box.y - padY, w: box.x + box.w, h: box.h + 2 * padY }; break;
  }
  const x0 = Math.max(0, z.x), y0 = Math.max(0, z.y);
  return { x: x0, y: y0, w: Math.min(1, z.x + z.w) - x0, h: Math.min(1, z.y + z.h) - y0 };
}

/**
 * Fit the ball's early roll. `rest` is where the ball sat (frame px), `diameterPx`
 * its size at rest. Returns null if the samples don't look like a putt.
 */
export function measurePutt(
  samples: LaneSample[],
  rest: { x: number; y: number },
  diameterPx: number,
  dir: PuttDirection,
  opts: { flip?: boolean; minCount?: number; calibration?: number } = {},
): PuttMeasurement | null {
  if (diameterPx < 2) return null;
  const [fx, fy] = FORWARD[dir];
  // Right of target when looking along the roll direction (image y points down)
  let lx = -fy, ly = fx;
  if (opts.flip) { lx = -lx; ly = -ly; }
  const minCount = opts.minCount ?? 3;

  // Keep samples where the ball is visible and has started moving forward
  const pts = samples
    .filter((s) => s.x !== undefined && s.count >= minCount)
    .map((s) => {
      const dx = s.x! - rest.x, dy = s.y! - rest.y;
      return { t: s.t / 1000, f: dx * fx + dy * fy, l: dx * lx + dy * ly };
    })
    .filter((p) => p.f > diameterPx * 0.5);

  // Require forward motion that keeps increasing (reject jitter / a hand)
  const mono: typeof pts = [];
  for (const p of pts) {
    if (!mono.length || p.f > mono[mono.length - 1].f) mono.push(p);
    if (mono.length >= 6) break; // early frames: before the ball slows much
  }
  if (mono.length < 2) return null;
  const travelPx = mono[mono.length - 1].f;
  if (travelPx < diameterPx * 2) return null;

  // Least-squares velocity along and across the lane
  const n = mono.length;
  const mt = mono.reduce((a, p) => a + p.t, 0) / n;
  const mf = mono.reduce((a, p) => a + p.f, 0) / n;
  const ml = mono.reduce((a, p) => a + p.l, 0) / n;
  let stt = 0, stf = 0, stl = 0;
  for (const p of mono) {
    stt += (p.t - mt) ** 2;
    stf += (p.t - mt) * (p.f - mf);
    stl += (p.t - mt) * (p.l - ml);
  }
  if (stt <= 0) return null;
  const vf = stf / stt;
  const vl = stl / stt;
  if (vf <= 0) return null;

  const mPerPx = (BALL_DIAMETER_M / diameterPx) * (opts.calibration ?? 1);
  return {
    speedMs: Math.hypot(vf, vl) * mPerPx,
    directionDeg: (Math.atan2(vl, vf) * 180) / Math.PI,
    trackedM: travelPx * mPerPx,
    samplesUsed: n,
  };
}
