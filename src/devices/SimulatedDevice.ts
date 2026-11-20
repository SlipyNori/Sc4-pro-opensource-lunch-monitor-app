import { BaseAdapter } from './DeviceAdapter';
import { CLUB_DEFAULTS, type ClubId, type ShotMeasurement } from '../types';

/** Typical amateur club speeds (mph) used by the simulator. */
const CLUB_SPEED: Record<ClubId, number> = {
  DR: 95, '3W': 90, '5W': 87, HY: 85, '3i': 84, '4i': 83, '5i': 81, '6i': 79,
  '7i': 77, '8i': 75, '9i': 73, PW: 71, GW: 68, SW: 65, LW: 60, PT: 5,
};

function gauss(rand: () => number = Math.random): number {
  const u = 1 - rand();
  const v = rand();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

/** Generate a realistic random shot for the given club. Exported for tests. */
export function randomShot(club: ClubId, rand: () => number = Math.random): ShotMeasurement {
  const d = CLUB_DEFAULTS[club];
  const clubSpeed = CLUB_SPEED[club] * (1 + 0.04 * gauss(rand));
  const smash = Math.min(1.52, d.smash * (1 - Math.abs(0.03 * gauss(rand))));
  const ballSpeed = clubSpeed * smash;
  return {
    clubSpeedMph: round(clubSpeed, 1),
    ballSpeedMph: round(ballSpeed, 1),
    launchAngleDeg: round(Math.max(0.5, d.launch + 2 * gauss(rand)), 1),
    launchDirectionDeg: round(2.5 * gauss(rand), 1),
    spinRpm: Math.round(Math.max(500, d.spinPerMph * ballSpeed * (1 + 0.12 * gauss(rand)))),
    spinAxisDeg: round(8 * gauss(rand), 1),
  };
}

const round = (v: number, dp: number) => Math.round(v * 10 ** dp) / 10 ** dp;

/**
 * A fake launch monitor so the app (and the 3D range) can be used and developed
 * without hardware. Call `hit()` to produce a shot, or enable auto-fire.
 */
export class SimulatedDevice extends BaseAdapter {
  readonly id = 'simulator';
  readonly name = 'Simulator (no hardware)';
  readonly description = 'Generates realistic random shots for the selected club.';
  club: ClubId = '7i';
  private timer: ReturnType<typeof setInterval> | null = null;
  private connected = false;

  isSupported() {
    return true;
  }

  async connect() {
    this.connected = true;
    this.emit('status', 'connected', 'Simulator');
  }

  async disconnect() {
    this.setAutoFire(0);
    this.connected = false;
    this.emit('status', 'disconnected');
  }

  hit() {
    if (!this.connected) return;
    this.emit('shot', randomShot(this.club));
  }

  setAutoFire(seconds: number) {
    if (this.timer) clearInterval(this.timer);
    this.timer = seconds > 0 ? setInterval(() => this.hit(), seconds * 1000) : null;
  }
}
