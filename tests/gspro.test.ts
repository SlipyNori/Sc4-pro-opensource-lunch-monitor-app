import { describe, expect, it } from 'vitest';
import { fromGsproClub, gsproHeartbeat, gsproShot, splitJsonStream, toGsproClub } from '../connector/src/gspro';

describe('GSPro Open Connect messages', () => {
  // A real decoded SC4 Pro shot (2026-11-20 23:30): ball 24.2, club 26.1, launch 32.8, dir 8.9 L, spin 3343
  const shot = { ballSpeedMph: 24.2, clubSpeedMph: 26.1, launchAngleDeg: 32.8, launchDirectionDeg: -8.9, spinRpm: 3343, spinAxisDeg: 0, carryYd: 12.3 };

  it('builds a shot message in GSPro units and field names', () => {
    const m = gsproShot(shot, 7);
    expect(m).toMatchObject({
      DeviceID: expect.stringContaining('OpenSC4'),
      Units: 'Yards',
      ShotNumber: 7,
      APIversion: '1',
      BallData: { Speed: 24.2, VLA: 32.8, HLA: -8.9, TotalSpin: 3343, BackSpin: 3343, SideSpin: 0, SpinAxis: 0, CarryDistance: 12.3 },
      ClubData: { Speed: 26.1 },
      ShotDataOptions: { ContainsBallData: true, ContainsClubData: true, IsHeartBeat: false, LaunchMonitorIsReady: true },
    });
  });

  it('splits total spin into back and side spin from the spin axis', () => {
    const m = gsproShot({ ...shot, spinRpm: 3000, spinAxisDeg: 10 }, 1);
    expect(m.BallData!.BackSpin).toBe(Math.round(3000 * Math.cos(Math.PI / 18)));
    expect(m.BallData!.SideSpin).toBe(Math.round(3000 * Math.sin(Math.PI / 18)));
    expect(m.BallData!.SideSpin).toBeGreaterThan(0); // + = right / fade
  });

  it('leaves club data out when there is no club speed', () => {
    const m = gsproShot({ ballSpeedMph: 100 }, 1);
    expect(m.ClubData).toBeUndefined();
    expect(m.ShotDataOptions.ContainsClubData).toBe(false);
  });

  it('builds heartbeats with readiness', () => {
    const h = gsproHeartbeat(3, true, false);
    expect(h.BallData).toBeUndefined();
    expect(h.ShotDataOptions).toMatchObject({ IsHeartBeat: true, LaunchMonitorIsReady: true, LaunchMonitorBallDetected: false, ContainsBallData: false });
  });

  it('reads responses that arrive split or joined on the TCP stream', () => {
    const a = '{"Code":200,"Message":"Shot received successfully"}{"Code":201,"Message":"GSPro Player Information","Player":{"Handed":"RH","Club":"I7"}}{"Code":2';
    const first = splitJsonStream(a);
    expect(first.messages.map((m) => m.Code)).toEqual([200, 201]);
    expect(first.messages[1].Player?.Club).toBe('I7');
    expect(first.rest).toBe('{"Code":2');
    const second = splitJsonStream(first.rest + '01,"Message":"x {brace} in string","Player":{"Club":"DR"}}\n');
    expect(second.messages[0].Player?.Club).toBe('DR');
    expect(second.rest).toBe('');
  });

  it('maps clubs both ways', () => {
    expect(toGsproClub('7i')).toBe('I7');
    expect(toGsproClub('3W')).toBe('W3');
    expect(fromGsproClub('I7')).toBe('7i');
    expect(fromGsproClub('W5')).toBe('5W');
    expect(fromGsproClub('H3')).toBe('HY');
    expect(fromGsproClub('DR')).toBe('DR');
    expect(fromGsproClub('XX')).toBeUndefined();
  });
});
