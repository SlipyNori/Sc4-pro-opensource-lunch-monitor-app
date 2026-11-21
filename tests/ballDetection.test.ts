import { describe, expect, it } from 'vitest';
import { BallPresence, countBallPixels, type PixelCount } from '../src/camera/ballDetection';

/** Make a green "mat" frame, optionally with a white ball (filled circle). */
function frame(w: number, h: number, ball?: { x: number; y: number; r: number }) {
  const d = new Uint8ClampedArray(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const inBall = ball && (x - ball.x) ** 2 + (y - ball.y) ** 2 <= ball.r ** 2;
      d.set(inBall ? [235, 238, 240, 255] : [40, 120, 50, 255], i);
    }
  }
  return d;
}

const zone = { x: 0.25, y: 0.25, w: 0.5, h: 0.5 };

describe('countBallPixels', () => {
  it('finds no ball on an empty mat', () => {
    expect(countBallPixels(frame(100, 100), 100, 100, zone).count).toBe(0);
  });

  it('counts ball pixels and finds the centroid inside the zone', () => {
    const r = countBallPixels(frame(100, 100, { x: 50, y: 60, r: 5 }), 100, 100, zone);
    expect(r.count).toBeGreaterThan(60);
    expect(r.cx).toBeCloseTo(0.5, 1);
    expect(r.cy).toBeCloseTo(0.6, 1);
  });

  it('ignores a ball outside the zone', () => {
    expect(countBallPixels(frame(100, 100, { x: 10, y: 10, r: 5 }), 100, 100, zone).count).toBe(0);
  });
});

describe('BallPresence', () => {
  const ball: PixelCount = { count: 80, cx: 0.5, cy: 0.6 };
  const none: PixelCount = { count: 0 };

  it('goes ready after the ball sits still, then reports a hit when it vanishes', () => {
    const p = new BallPresence();
    const events: (string | null)[] = [];
    let t = 0;
    for (; t <= 1000; t += 66) events.push(p.update(ball, t));
    expect(events).toContain('ready');
    expect(p.state).toBe('ready');
    events.length = 0;
    for (let i = 0; i < 4; i++, t += 66) events.push(p.update(none, t));
    expect(events).toContain('hit');
    expect(p.state).toBe('cooldown');
  });

  it('does not go ready while the ball is still moving', () => {
    const p = new BallPresence();
    for (let t = 0, x = 0.3; t <= 1500; t += 66, x += 0.03) {
      expect(p.update({ count: 80, cx: x, cy: 0.6 }, t)).not.toBe('ready');
    }
  });

  it('reports "removed" (not a hit) when the ball fades out slowly', () => {
    const p = new BallPresence();
    let t = 0;
    for (; t <= 1000; t += 66) p.update(ball, t);
    const evs: (string | null)[] = [];
    for (const c of [60, 40, 20, 10, 0, 0, 0]) evs.push(p.update({ count: c, cx: 0.5, cy: 0.6 }, (t += 66)));
    expect(evs).toContain('removed');
    expect(evs).not.toContain('hit');
  });

  it('comes back to empty after the cooldown', () => {
    const p = new BallPresence();
    let t = 0;
    for (; t <= 1000; t += 66) p.update(ball, t);
    for (let i = 0; i < 4; i++) p.update(none, (t += 66));
    for (let i = 0; i < 30; i++) p.update(none, (t += 66));
    expect(p.state).toBe('empty');
  });
});
