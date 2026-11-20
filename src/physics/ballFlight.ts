/**
 * Golf ball flight model.
 *
 * Coordinate system (metres, right-handed):
 *   x = down-range (toward target)
 *   y = up
 *   z = right of target line (from the golfer's view)
 *
 * Forces: gravity, aerodynamic drag, Magnus lift. Integrated with RK4.
 * After landing a simple bounce + roll model is applied.
 *
 * Coefficients are empirical fits chosen so that typical tour-average launch
 * conditions land close to published carry numbers (see tests/ballFlight.test.ts).
 * They are a starting point; PRs with better aero models are very welcome.
 */
import { DEG, RPM_TO_RADS, mphToMs } from './units';

export interface LaunchConditions {
  /** Ball speed, mph */
  ballSpeedMph: number;
  /** Vertical launch angle, degrees */
  launchAngleDeg: number;
  /** Horizontal launch direction, degrees. Positive = right of target. */
  launchDirectionDeg: number;
  /** Total spin, rpm */
  spinRpm: number;
  /** Spin axis tilt, degrees. Positive = tilted right (fade/slice for RH). */
  spinAxisDeg: number;
}

export interface Environment {
  /** Air density kg/m^3 (1.225 = sea level, 15°C) */
  airDensity: number;
  /** Wind speed m/s */
  windSpeed: number;
  /** Direction the wind blows TOWARD, degrees: 0 = tailwind, 180 = headwind, 90 = left-to-right */
  windDirectionDeg: number;
  /** Fairway firmness 0 (soft) – 1 (firm); affects bounce and roll */
  firmness: number;
}

export const DEFAULT_ENVIRONMENT: Environment = {
  airDensity: 1.225,
  windSpeed: 0,
  windDirectionDeg: 0,
  firmness: 0.5,
};

export interface TrajectoryPoint {
  t: number;
  x: number;
  y: number;
  z: number;
}

export interface FlightResult {
  /** Flight path (air only) */
  flight: TrajectoryPoint[];
  /** Bounce/roll path after first landing */
  ground: TrajectoryPoint[];
  carryM: number;
  totalM: number;
  /** Lateral offline at landing (m, + = right) */
  carryLateralM: number;
  /** Lateral offline at rest (m, + = right) */
  totalLateralM: number;
  apexM: number;
  flightTimeS: number;
  /** Descent angle at landing, degrees */
  landingAngleDeg: number;
}

const BALL_MASS = 0.04593; // kg
const BALL_RADIUS = 0.021335; // m
const BALL_AREA = Math.PI * BALL_RADIUS * BALL_RADIUS;
const G = 9.80665;
/** Spin decays exponentially with this time constant (s) */
const SPIN_DECAY_TAU = 25;

type Vec3 = [number, number, number];

const add = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scale = (a: Vec3, s: number): Vec3 => [a[0] * s, a[1] * s, a[2] * s];
const len = (a: Vec3) => Math.hypot(a[0], a[1], a[2]);
const cross = (a: Vec3, b: Vec3): Vec3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];

/** Tunable aerodynamic model parameters (exported so calibration/tests can inspect them). */
export const AERO = {
  /** Drag coefficient at zero spin */
  cd0: 0.15,
  /** Drag increase per unit spin parameter */
  cdS: 0.6,
  /** Lift = clA·S − clB·S², S clamped to sMax */
  clA: 1.6,
  clB: 1.5,
  sMax: 0.25,
  /** Extra drag at low speed (approximates the low-Reynolds-number drag rise) */
  cdLow: 0.3,
  /** Speed (m/s) below which the low-speed drag rise starts */
  vLow: 40,
};

/** Drag coefficient as a function of spin parameter S = r·ω / v and airspeed (m/s) */
export function dragCoefficient(S: number, speed = Infinity): number {
  const low = speed < AERO.vLow ? AERO.cdLow * (1 - speed / AERO.vLow) : 0;
  return AERO.cd0 + AERO.cdS * Math.min(S, AERO.sMax) + low;
}

/** Lift coefficient as a function of spin parameter S */
export function liftCoefficient(S: number): number {
  const s = Math.min(S, AERO.sMax);
  return Math.max(0, AERO.clA * s - AERO.clB * s * s);
}

interface State {
  p: Vec3;
  v: Vec3;
}

function makeAccel(spinAxisUnit: Vec3, omega0: number, env: Environment) {
  const windDir = env.windDirectionDeg * DEG;
  const wind: Vec3 = [env.windSpeed * Math.cos(windDir), 0, env.windSpeed * Math.sin(windDir)];
  const k = (0.5 * env.airDensity * BALL_AREA) / BALL_MASS;

  return (s: State, t: number): Vec3 => {
    // Wind only acts above a small height (simple boundary layer approximation)
    const windScale = Math.min(1, Math.max(0, s.p[1] / 10));
    const vRel: Vec3 = add(s.v, scale(wind, -windScale));
    const speed = len(vRel);
    if (speed < 1e-6) return [0, -G, 0];

    const omega = omega0 * Math.exp(-t / SPIN_DECAY_TAU);
    const S = (BALL_RADIUS * omega) / speed;
    const cd = dragCoefficient(S, speed);
    const cl = liftCoefficient(S);

    const drag = scale(vRel, -k * cd * speed);
    // Magnus direction: ω̂ × v̂
    const magDir = cross(spinAxisUnit, vRel);
    const magLen = len(magDir);
    const lift: Vec3 = magLen > 1e-9 ? scale(magDir, (k * cl * speed * speed) / magLen) : [0, 0, 0];

    return add(add(drag, lift), [0, -G, 0]);
  };
}

function rk4(s: State, t: number, dt: number, accel: (s: State, t: number) => Vec3): State {
  const a1 = accel(s, t);
  const s2 = { p: add(s.p, scale(s.v, dt / 2)), v: add(s.v, scale(a1, dt / 2)) };
  const a2 = accel(s2, t + dt / 2);
  const s3 = { p: add(s.p, scale(s2.v, dt / 2)), v: add(s.v, scale(a2, dt / 2)) };
  const a3 = accel(s3, t + dt / 2);
  const s4 = { p: add(s.p, scale(s3.v, dt)), v: add(s.v, scale(a3, dt)) };
  const a4 = accel(s4, t + dt);
  return {
    p: add(s.p, scale(add(add(s.v, scale(s2.v, 2)), add(scale(s3.v, 2), s4.v)), dt / 6)),
    v: add(s.v, scale(add(add(a1, scale(a2, 2)), add(scale(a3, 2), a4)), dt / 6)),
  };
}

export function simulateShot(
  launch: LaunchConditions,
  env: Environment = DEFAULT_ENVIRONMENT,
  dt = 0.005,
): FlightResult {
  const v0 = mphToMs(launch.ballSpeedMph);
  const la = launch.launchAngleDeg * DEG;
  const ld = launch.launchDirectionDeg * DEG;
  const v: Vec3 = [v0 * Math.cos(la) * Math.cos(ld), v0 * Math.sin(la), v0 * Math.cos(la) * Math.sin(ld)];

  // Spin axis: pure backspin is +z (rotated by launch direction), tilted by spin axis angle.
  const ax = launch.spinAxisDeg * DEG;
  const back: Vec3 = [-Math.sin(ld), 0, Math.cos(ld)];
  const spinAxisUnit: Vec3 = add(scale(back, Math.cos(ax)), [0, -Math.sin(ax), 0]);
  const omega0 = Math.max(0, launch.spinRpm) * RPM_TO_RADS;

  const accel = makeAccel(spinAxisUnit, omega0, env);

  let state: State = { p: [0, 0, 0], v };
  let t = 0;
  let apex = 0;
  const flight: TrajectoryPoint[] = [{ t, x: 0, y: 0, z: 0 }];

  // Air phase
  const maxT = 20;
  while (t < maxT) {
    const next = rk4(state, t, dt, accel);
    if (next.p[1] < 0 && t > 0.05) {
      // Interpolate landing
      const f = state.p[1] / (state.p[1] - next.p[1]);
      const p: Vec3 = add(state.p, scale(add(next.p, scale(state.p, -1)), f));
      const vl: Vec3 = add(state.v, scale(add(next.v, scale(state.v, -1)), f));
      t += dt * f;
      state = { p: [p[0], 0, p[2]], v: vl };
      flight.push({ t, x: p[0], y: 0, z: p[2] });
      break;
    }
    state = next;
    t += dt;
    apex = Math.max(apex, state.p[1]);
    flight.push({ t, x: state.p[0], y: state.p[1], z: state.p[2] });
  }

  const flightTime = t;
  const carry = state.p[0];
  const carryLat = state.p[2];
  const hSpeed = Math.hypot(state.v[0], state.v[2]);
  const landingAngle = Math.atan2(-state.v[1], hSpeed) / DEG;

  const ground = simulateGround(state, t, omega0 * Math.exp(-t / SPIN_DECAY_TAU), env);
  const last = ground.length ? ground[ground.length - 1] : flight[flight.length - 1];

  return {
    flight,
    ground,
    carryM: carry,
    totalM: last.x,
    carryLateralM: carryLat,
    totalLateralM: last.z,
    apexM: apex,
    flightTimeS: flightTime,
    landingAngleDeg: landingAngle,
  };
}

/**
 * Simple ground model: a few damped bounces, then rolling with constant deceleration.
 * Backspin at landing reduces forward speed after the first bounce (check / spin-back).
 */
function simulateGround(landing: State, t0: number, omegaAtLanding: number, env: Environment): TrajectoryPoint[] {
  const pts: TrajectoryPoint[] = [];
  let p: Vec3 = [...landing.p];
  let vx = landing.v[0];
  let vz = landing.v[2];
  let vy = -landing.v[1];
  let t = t0;
  const firm = Math.min(1, Math.max(0, env.firmness));
  const restitution = 0.25 + 0.2 * firm;
  // Backspin "bite": high spin + steep landing kills horizontal speed
  const spinRpm = omegaAtLanding / RPM_TO_RADS;
  const hSpeed0 = Math.hypot(vx, vz);
  const steep = Math.atan2(vy, Math.max(hSpeed0, 0.01));
  const bite = Math.min(0.85, (spinRpm / 10000) * Math.sin(steep) * (1.1 - 0.5 * firm));
  const tangentialKeep = Math.max(0.05, 0.5 + 0.2 * firm - bite);

  for (let bounce = 0; bounce < 5 && vy > 0.6; bounce++) {
    vy *= restitution;
    // Only the first impact is affected by spin "bite"; later bounces lose less speed.
    const keep = bounce === 0 ? tangentialKeep : 0.8;
    vx *= keep;
    vz *= keep;
    const tAir = (2 * vy) / G;
    const steps = 12;
    for (let i = 1; i <= steps; i++) {
      const tt = (tAir * i) / steps;
      pts.push({ t: t + tt, x: p[0] + vx * tt, y: Math.max(0, vy * tt - 0.5 * G * tt * tt), z: p[2] + vz * tt });
    }
    p = [p[0] + vx * tAir, 0, p[2] + vz * tAir];
    t += tAir;
  }

  // Roll
  const rollDecel = G * (0.45 - 0.2 * firm);
  const speed = Math.hypot(vx, vz);
  if (speed > 0.01) {
    const ux = vx / speed;
    const uz = vz / speed;
    const tRoll = speed / rollDecel;
    const steps = Math.max(4, Math.ceil(tRoll / 0.05));
    for (let i = 1; i <= steps; i++) {
      const tt = (tRoll * i) / steps;
      const d = speed * tt - 0.5 * rollDecel * tt * tt;
      pts.push({ t: t + tt, x: p[0] + ux * d, y: 0, z: p[2] + uz * d });
    }
  }
  return pts;
}
