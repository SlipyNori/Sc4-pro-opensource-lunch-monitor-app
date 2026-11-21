/**
 * A single measured shot as reported by a launch monitor.
 *
 * Only ballSpeed is required. Anything the device doesn't measure is filled in
 * by the ball-flight model (carry, total, apex) or sensible defaults.
 */
export interface ShotMeasurement {
  ballSpeedMph: number;
  clubSpeedMph?: number;
  launchAngleDeg?: number;
  /** + = right of target */
  launchDirectionDeg?: number;
  spinRpm?: number;
  /** + = tilted right (fade/slice for a right-handed golfer) */
  spinAxisDeg?: number;
  /** Device-reported carry / total in yards and apex in feet, if provided */
  deviceCarryYd?: number;
  deviceTotalYd?: number;
  deviceApexFt?: number;
  /** Raw bytes from the device for debugging / protocol research */
  raw?: string;
  /** Club the device says was used (if it reports one) */
  clubHint?: ClubId;
}

export interface Shot extends ShotMeasurement {
  id: string;
  timestamp: number;
  club: ClubId;
  source: string;
  /** Simulated results */
  carryYd: number;
  totalYd: number;
  offlineYd: number;
  apexFt: number;
  landingAngleDeg: number;
  flightTimeS: number;
  smashFactor?: number;
  /** Launch inputs that were estimated because the device didn't report them */
  estimated?: (keyof ShotMeasurement)[];
}

export const CLUBS = [
  'DR', '3W', '5W', 'HY', '3i', '4i', '5i', '6i', '7i', '8i', '9i', 'PW', 'GW', 'SW', 'LW', 'PT',
] as const;
export type ClubId = (typeof CLUBS)[number];

/** Typical launch & spin for each club, used to fill gaps when a device only reports speed. */
export const CLUB_DEFAULTS: Record<ClubId, { launch: number; spinPerMph: number; smash: number }> = {
  DR: { launch: 12, spinPerMph: 17, smash: 1.48 },
  '3W': { launch: 10.5, spinPerMph: 23, smash: 1.46 },
  '5W': { launch: 12, spinPerMph: 29, smash: 1.44 },
  HY: { launch: 12.5, spinPerMph: 33, smash: 1.42 },
  '3i': { launch: 11, spinPerMph: 33, smash: 1.4 },
  '4i': { launch: 11.5, spinPerMph: 36, smash: 1.39 },
  '5i': { launch: 12.5, spinPerMph: 40, smash: 1.38 },
  '6i': { launch: 14, spinPerMph: 49, smash: 1.36 },
  '7i': { launch: 16, spinPerMph: 58, smash: 1.33 },
  '8i': { launch: 18, spinPerMph: 69, smash: 1.31 },
  '9i': { launch: 20.5, spinPerMph: 80, smash: 1.28 },
  PW: { launch: 24, spinPerMph: 91, smash: 1.24 },
  GW: { launch: 27, spinPerMph: 100, smash: 1.2 },
  SW: { launch: 30, spinPerMph: 110, smash: 1.15 },
  LW: { launch: 33, spinPerMph: 115, smash: 1.1 },
  PT: { launch: 1, spinPerMph: 0, smash: 1.0 },
};
