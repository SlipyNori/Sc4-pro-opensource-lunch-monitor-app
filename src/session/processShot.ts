import { simulateShot, DEFAULT_ENVIRONMENT, type Environment, type FlightResult } from '../physics/ballFlight';
import { mToFt, mToYd } from '../physics/units';
import { CLUB_DEFAULTS, type ClubId, type Shot, type ShotMeasurement } from '../types';

/** Fill missing measurements with club-typical values so the flight model always has full inputs. */
export function completeMeasurement(m: ShotMeasurement, club: ClubId) {
  const d = CLUB_DEFAULTS[club];
  return {
    ballSpeedMph: m.ballSpeedMph,
    launchAngleDeg: m.launchAngleDeg ?? d.launch,
    launchDirectionDeg: m.launchDirectionDeg ?? 0,
    spinRpm: m.spinRpm ?? d.spinPerMph * m.ballSpeedMph,
    spinAxisDeg: m.spinAxisDeg ?? 0,
  };
}

let counter = 0;
const newId = () => `${Date.now().toString(36)}-${(counter++).toString(36)}`;

export function processShot(
  m: ShotMeasurement,
  club: ClubId,
  source: string,
  env: Environment = DEFAULT_ENVIRONMENT,
): { shot: Shot; flight: FlightResult } {
  const launch = completeMeasurement(m, club);
  const estimated = (Object.keys(launch) as (keyof typeof launch)[]).filter((k) => m[k] === undefined);
  const flight = simulateShot(launch, env);
  const shot: Shot = {
    ...m,
    ...launch,
    id: newId(),
    timestamp: Date.now(),
    club,
    source,
    carryYd: round1(mToYd(flight.carryM)),
    totalYd: round1(mToYd(flight.totalM)),
    offlineYd: round1(mToYd(flight.totalLateralM)),
    apexFt: Math.round(mToFt(flight.apexM)),
    landingAngleDeg: round1(flight.landingAngleDeg),
    flightTimeS: round1(flight.flightTimeS),
    estimated: estimated.length ? estimated : undefined,
    smashFactor: m.clubSpeedMph ? Math.round((m.ballSpeedMph / m.clubSpeedMph) * 100) / 100 : undefined,
  };
  return { shot, flight };
}

const round1 = (v: number) => Math.round(v * 10) / 10;
