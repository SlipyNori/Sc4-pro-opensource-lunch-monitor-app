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

import { learnBall, DEFAULT_PIXEL_OPTIONS } from '../src/camera/ballDetection';

/** Wood floor with grain and a glare patch, plus an optional ball of a given colour. */
function woodFrame(w: number, h: number, ball?: { x: number; y: number; r: number; rgb: [number, number, number] }) {
  const d = new Uint8ClampedArray(w * h * 4);
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const grain = Math.sin(y * 0.9 + Math.sin(x * 0.05) * 3) * 14 + (rnd() - 0.5) * 16;
      const glare = Math.max(0, 70 - Math.hypot(x - w * 0.45, y - h * 0.85) * 1.2);
      let rgb = [196 + grain + glare, 162 + grain + glare, 128 + grain * 0.8 + glare];
      if (ball && (x - ball.x) ** 2 + (y - ball.y) ** 2 <= ball.r ** 2) {
        const shade = 1 - ((y - ball.y) / ball.r) * 0.25; // lit from above
        rgb = ball.rgb.map((c) => c * shade + (rnd() - 0.5) * 10);
      }
      d.set([...rgb.map((c) => Math.max(0, Math.min(255, c))), 255], i);
    }
  }
  return d;
}

describe('learning the ball colour', () => {
  const W = 200, H = 150;
  const zone = { x: 0.35, y: 0.55, w: 0.3, h: 0.3 };
  const ballPx = Math.round(Math.PI * 8 * 8);

  it('learns a red/salmon foam ball on a wood floor and ignores the floor and glare', () => {
    const frame = woodFrame(W, H, { x: 100, y: 105, r: 8, rgb: [232, 138, 120] });
    const res = learnBall(frame, W, H, zone, DEFAULT_PIXEL_OPTIONS)!;
    expect(res).not.toBeNull();
    expect(res.pixels.mode).toBe('color');
    expect(res.count).toBeGreaterThan(ballPx * 0.6);
    expect(res.count).toBeLessThan(ballPx * 1.3);
    // Same scene without the ball: almost nothing should count
    const empty = countBallPixels(woodFrame(W, H), W, H, zone, res.pixels);
    expect(empty.count).toBeLessThan(ballPx * 0.1);
  });

  it('learns a yellow ball too', () => {
    const frame = woodFrame(W, H, { x: 100, y: 105, r: 8, rgb: [235, 215, 40] });
    const res = learnBall(frame, W, H, zone, DEFAULT_PIXEL_OPTIONS)!;
    expect(res.pixels.mode).toBe('color');
    expect(countBallPixels(woodFrame(W, H), W, H, zone, res.pixels).count).toBeLessThan(ballPx * 0.1);
  });

  it('keeps the white detector for a white ball on a green mat', () => {
    const f = frame(100, 100, { x: 50, y: 60, r: 6 });
    const res = learnBall(f, 100, 100, { x: 0.35, y: 0.45, w: 0.3, h: 0.3 }, DEFAULT_PIXEL_OPTIONS)!;
    expect(res.pixels.mode).toBe('white');
    expect(res.count).toBeGreaterThan(80);
  });

  it('gives up on an empty box instead of learning the floor', () => {
    expect(learnBall(woodFrame(W, H), W, H, zone, DEFAULT_PIXEL_OPTIONS)).toBeNull();
  });
});
