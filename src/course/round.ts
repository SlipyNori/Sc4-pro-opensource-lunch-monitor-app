/**
 * Playing a round: ball position, aim, lie, hazards, holing out and scoring.
 * Pure logic (no DOM) so it can be unit tested.
 */
import { simulateShot, DEFAULT_ENVIRONMENT, type Environment, type FlightResult, type TrajectoryPoint } from '../physics/ballFlight';
import { HOLE_RADIUS_M, puttDecel, simulatePutt } from '../physics/putt';
import { mphToMs, ydToM } from '../physics/units';
import { completeMeasurement } from '../session/processShot';
import type { ClubId, ShotMeasurement } from '../types';
import { add, dist, norm, rightOf, rotate, scale, sub, type EN } from './geo';
import { lieAt, type Course, type Hole, type Lie } from './osm';

/** Typical amateur total distance per club (yd), used to choose a sensible aim point */
export const CLUB_REACH_YD: Record<ClubId, number> = {
  DR: 230, '3W': 210, '5W': 195, HY: 185, '3i': 180, '4i': 170, '5i': 160, '6i': 150,
  '7i': 140, '8i': 130, '9i': 120, PW: 110, GW: 95, SW: 80, LW: 65, PT: 0,
};

/** How a lie changes the strike: ball speed and spin multipliers (putter unaffected) */
export const LIE_EFFECT: Record<Lie, { speed: number; spin: number; label: string }> = {
  tee: { speed: 1, spin: 1, label: 'Tee' },
  fairway: { speed: 1, spin: 1, label: 'Fairway' },
  green: { speed: 1, spin: 1, label: 'Green' },
  rough: { speed: 0.93, spin: 0.6, label: 'Rough' },
  bunker: { speed: 0.82, spin: 0.7, label: 'Bunker' },
  water: { speed: 1, spin: 1, label: 'Water' },
};

export const MAX_STROKES = 10;

export interface ShotRecord {
  /** World points (e, n, height) for drawing */
  points: { e: number; n: number; y: number }[];
  from: EN;
  to: EN;
  club: ClubId;
}

export interface ShotOutcome {
  flight: FlightResult;
  start: EN;
  aim: EN;
  /** Where the ball finished (before any penalty relief) */
  end: EN;
  lie: Lie;
  penalty: number;
  holed: boolean;
  message: string;
}

export interface RoundOptions {
  /** Putts finishing within this distance are conceded (m). 0 = off. */
  gimmeM: number;
}

/** Convert a point in the shot's own frame (x downrange, z right) to course coordinates. */
export function shotToWorld(p: TrajectoryPoint, start: EN, aim: EN) {
  const r = rightOf(aim);
  return { e: start.e + aim.e * p.x + r.e * p.z, n: start.n + aim.n * p.x + r.n * p.z, y: p.y };
}

export class Round {
  holeIndex = 0;
  ball: EN = { e: 0, n: 0 };
  aim: EN = { e: 0, n: 1 };
  lie: Lie = 'tee';
  holed = false;
  /** Strokes per hole (index = hole index); undefined = not played */
  strokes: (number | undefined)[] = [];
  shots: ShotRecord[] = [];

  constructor(public course: Course, public opts: RoundOptions = { gimmeM: 0 }) {
    if (!course.holes.length) throw new Error('This course has no holes mapped');
    this.startHole(0);
  }

  get hole(): Hole {
    return this.course.holes[this.holeIndex];
  }

  get strokesThisHole() {
    return this.strokes[this.holeIndex] ?? 0;
  }

  get distanceToPin() {
    return dist(this.ball, this.hole.pin);
  }

  startHole(i: number) {
    this.holeIndex = Math.max(0, Math.min(i, this.course.holes.length - 1));
    this.ball = { ...this.hole.tee };
    this.lie = 'tee';
    this.holed = false;
    this.shots = [];
    this.strokes[this.holeIndex] = 0;
    this.completed[this.holeIndex] = false;
    this.autoAim('DR');
  }

  nextHole(): boolean {
    if (this.holeIndex >= this.course.holes.length - 1) return false;
    this.startHole(this.holeIndex + 1);
    return true;
  }

  /** Aim down the hole: at the farthest point on the centre line within reach, or the pin. */
  autoAim(club: ClubId) {
    const h = this.hole;
    if (club === 'PT' || this.lie === 'green') {
      this.aim = norm(sub(h.pin, this.ball));
      return;
    }
    // Which segment of the centre line are we beside?
    let seg = 0;
    let best = Infinity;
    for (let i = 0; i < h.path.length - 1; i++) {
      const d = distToSegment(this.ball, h.path[i], h.path[i + 1]);
      if (d < best) { best = d; seg = i; }
    }
    const ahead = h.path.slice(seg + 1);
    const reach = ydToM(CLUB_REACH_YD[club] || 150) * 1.1;
    const inReach = ahead.filter((p) => dist(this.ball, p) <= reach);
    const target = inReach.length ? inReach[inReach.length - 1] : ahead[0] ?? h.pin;
    this.aim = norm(sub(target, this.ball));
  }

  aimAt(p: EN) {
    if (dist(p, this.ball) > 0.5) this.aim = norm(sub(p, this.ball));
  }

  adjustAim(deg: number) {
    this.aim = norm(rotate(this.aim, deg));
  }

  play(m: ShotMeasurement, club: ClubId, env: Environment = DEFAULT_ENVIRONMENT): ShotOutcome {
    if (this.holed) throw new Error('Hole finished – move to the next hole');
    const start = { ...this.ball };
    const aim = { ...this.aim };
    const putt = club === 'PT';
    let flight: FlightResult;
    let holed = false;
    let message = '';

    if (putt) {
      const stimp = env.stimp ?? 10;
      flight = simulatePutt(m.ballSpeedMph, m.launchDirectionDeg ?? 0, stimp);
      holed = puttDrops(start, aim, m.ballSpeedMph, m.launchDirectionDeg ?? 0, this.hole.pin, stimp);
    } else {
      const fx = LIE_EFFECT[this.lie];
      const launch = completeMeasurement(m, club);
      flight = simulateShot({ ...launch, ballSpeedMph: launch.ballSpeedMph * fx.speed, spinRpm: launch.spinRpm * fx.spin }, env);
    }

    const lastLocal = flight.ground.length ? flight.ground[flight.ground.length - 1] : flight.flight[flight.flight.length - 1];
    let end: EN = shotToWorld(lastLocal, start, aim);
    if (!holed && !putt && dist(end, this.hole.pin) < 0.12) holed = true; // holed out from off the green!
    if (holed) end = { ...this.hole.pin };

    let strokes = this.strokesThisHole + 1;
    let penalty = 0;
    const lie = holed ? 'green' : lieAt(end, this.course.features);

    if (holed) {
      message = strokes === 1 ? 'Hole in one!' : `Holed! ${scoreName(strokes, this.hole.par)}`;
    } else if (lie === 'water') {
      penalty = 1;
      message = 'In the water – 1 stroke penalty. Play again from the previous spot.';
    } else if (putt && this.opts.gimmeM > 0 && dist(end, this.hole.pin) <= this.opts.gimmeM) {
      strokes += 1;
      holed = true;
      message = `Gimme – that's good. ${scoreName(strokes, this.hole.par)}`;
    } else {
      message = `${LIE_EFFECT[lie].label} · ${Math.round(dist(end, this.hole.pin) * 1.0936)} yd to the pin`;
    }
    strokes += penalty;

    if (!holed && strokes >= MAX_STROKES) {
      holed = true;
      message = `Picked up at ${MAX_STROKES} strokes`;
      strokes = MAX_STROKES;
    }

    this.strokes[this.holeIndex] = strokes;
    this.shots.push({
      points: [...flight.flight, ...flight.ground].map((p) => shotToWorld(p, start, aim)),
      from: start,
      to: end,
      club,
    });
    this.holed = holed;
    this.completed[this.holeIndex] = holed;
    if (holed) {
      this.ball = { ...this.hole.pin };
      this.lie = 'green';
    } else if (penalty) {
      this.ball = start; // replay from the previous spot (simplified relief)
    } else {
      this.ball = end;
      this.lie = lie;
    }
    if (!holed) this.autoAim(this.lie === 'green' ? 'PT' : club);
    return { flight, start, aim, end, lie, penalty, holed, message };
  }

  /** Holes that have been finished */
  completed: boolean[] = [];

  /** Score over finished holes only */
  totals() {
    let strokes = 0, par = 0;
    this.course.holes.forEach((h, i) => {
      const s = this.strokes[i];
      if (this.completed[i] && s !== undefined && s > 0) {
        strokes += s;
        par += h.par;
      }
    });
    return { strokes, par, toPar: strokes - par };
  }
}

/**
 * Does a putt drop? The ball's line must pass over the cup and it must arrive
 * slowly enough not to lip out (faster is OK if it's dead centre).
 */
export function puttDrops(start: EN, aim: EN, speedMph: number, dirDeg: number, pin: EN, stimp: number): boolean {
  const dir = norm(rotate(aim, dirDeg));
  const rel = sub(pin, start);
  const along = rel.e * dir.e + rel.n * dir.n;
  if (along <= 0) return false;
  const miss = Math.abs(rel.e * dir.n - rel.n * dir.e);
  const v0 = mphToMs(speedMph);
  const v2 = v0 * v0 - 2 * puttDecel(stimp) * along;
  if (v2 < 0) return false; // short
  const vAtHole = Math.sqrt(v2);
  const captureR = HOLE_RADIUS_M + 0.01;
  if (miss > captureR) return false;
  const centred = 1 - miss / captureR; // 1 = dead centre
  return vAtHole <= 1.0 + 0.8 * centred;
}

function distToSegment(p: EN, a: EN, b: EN) {
  const ab = sub(b, a);
  const l2 = ab.e * ab.e + ab.n * ab.n || 1;
  const t = Math.max(0, Math.min(1, ((p.e - a.e) * ab.e + (p.n - a.n) * ab.n) / l2));
  return dist(p, add(a, scale(ab, t)));
}

export function scoreName(strokes: number, par: number) {
  const d = strokes - par;
  const names: Record<string, string> = { '-3': 'Albatross', '-2': 'Eagle', '-1': 'Birdie', '0': 'Par', '1': 'Bogey', '2': 'Double bogey', '3': 'Triple bogey' };
  return names[String(d)] ?? (d < 0 ? `${-d} under` : `+${d}`);
}
