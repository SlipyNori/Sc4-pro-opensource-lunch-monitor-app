import type { ClubId, Shot } from '../types';

export interface ClubStats {
  club: ClubId;
  count: number;
  avgCarry: number;
  avgTotal: number;
  avgBallSpeed: number;
  avgClubSpeed?: number;
  avgSpin: number;
  avgLaunch: number;
  /** Standard deviation of carry (yd) – a simple consistency metric */
  carryStdDev: number;
  /** Standard deviation of offline (yd) */
  offlineStdDev: number;
}

const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
const std = (xs: number[]) => {
  if (xs.length < 2) return 0;
  const m = mean(xs);
  return Math.sqrt(xs.reduce((a, x) => a + (x - m) ** 2, 0) / (xs.length - 1));
};
const r1 = (v: number) => Math.round(v * 10) / 10;

export function statsByClub(shots: Shot[]): ClubStats[] {
  const groups = new Map<ClubId, Shot[]>();
  for (const s of shots) {
    if (!groups.has(s.club)) groups.set(s.club, []);
    groups.get(s.club)!.push(s);
  }
  return [...groups.entries()].map(([club, ss]) => {
    const clubSpeeds = ss.map((s) => s.clubSpeedMph).filter((v): v is number => v !== undefined);
    return {
      club,
      count: ss.length,
      avgCarry: r1(mean(ss.map((s) => s.carryYd))),
      avgTotal: r1(mean(ss.map((s) => s.totalYd))),
      avgBallSpeed: r1(mean(ss.map((s) => s.ballSpeedMph))),
      avgClubSpeed: clubSpeeds.length ? r1(mean(clubSpeeds)) : undefined,
      avgSpin: Math.round(mean(ss.map((s) => s.spinRpm ?? 0))),
      avgLaunch: r1(mean(ss.map((s) => s.launchAngleDeg ?? 0))),
      carryStdDev: r1(std(ss.map((s) => s.carryYd))),
      offlineStdDev: r1(std(ss.map((s) => s.offlineYd))),
    };
  });
}
