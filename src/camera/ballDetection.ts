/**
 * Pure (DOM-free) ball detection logic so it can be unit tested.
 *
 * The approach is deliberately simple: inside a user-drawn zone, count pixels
 * that look like a golf ball (bright and un-saturated, i.e. white), then run a
 * small state machine: ball appears → holds still → READY → disappears → HIT.
 * Works best with a white ball on a green/dark mat and steady lighting.
 */

/** Zone in normalised coordinates (0–1) of the video frame */
export interface Zone {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface PixelOptions {
  /** 'white': bright, unsaturated pixels. 'color': pixels close to a learned ball colour. */
  mode: 'white' | 'color';
  /** White mode: minimum value of every RGB channel (0–255) */
  brightness: number;
  /** White mode: maximum spread between RGB channels (keeps out coloured highlights) */
  maxSpread: number;
  /**
   * Colour mode: the ball's colour as chromaticity (r/sum, g/sum, so it doesn't
   * change with lighting) plus brightness, and a display colour for the UI.
   */
  color?: { r: number; g: number; lum: number; rgb: [number, number, number] };
  /** Colour mode: how far (in chromaticity) a pixel may be from the ball colour */
  tolerance: number;
}

export const DEFAULT_PIXEL_OPTIONS: PixelOptions = { mode: 'white', brightness: 170, maxSpread: 55, tolerance: 0.04 };

/** Is this pixel part of the ball? Shared by detection and the preview overlay. */
export function isBallPixel(r: number, g: number, b: number, o: PixelOptions): boolean {
  if (o.mode === 'color' && o.color) {
    const sum = r + g + b;
    if (sum < 60) return false; // too dark: colour is unreliable
    const lum = sum / 3;
    // Allow shadowed and highlighted sides of the ball, but not wildly different brightness
    if (lum < o.color.lum * 0.45 || lum > o.color.lum * 1.8 + 20) return false;
    return Math.hypot(r / sum - o.color.r, g / sum - o.color.g) <= o.tolerance;
  }
  const min = Math.min(r, g, b);
  return min >= o.brightness && Math.max(r, g, b) - min <= o.maxSpread;
}

export interface PixelCount {
  count: number;
  /** Centroid of ball pixels in normalised frame coordinates, if any */
  cx?: number;
  cy?: number;
  /** Bounding box of ball pixels, in frame pixels (for measuring the ball's size) */
  box?: { x0: number; y0: number; x1: number; y1: number };
}

/** Count ball-coloured pixels inside the zone of an RGBA frame. */
export function countBallPixels(
  data: Uint8ClampedArray,
  width: number,
  height: number,
  zone: Zone,
  opts: PixelOptions = DEFAULT_PIXEL_OPTIONS,
): PixelCount {
  const x0 = Math.max(0, Math.floor(zone.x * width));
  const y0 = Math.max(0, Math.floor(zone.y * height));
  const x1 = Math.min(width, Math.ceil((zone.x + zone.w) * width));
  const y1 = Math.min(height, Math.ceil((zone.y + zone.h) * height));
  let count = 0;
  let sx = 0;
  let sy = 0;
  let bx0 = Infinity, by0 = Infinity, bx1 = -Infinity, by1 = -Infinity;
  for (let y = y0; y < y1; y++) {
    let i = (y * width + x0) * 4;
    for (let x = x0; x < x1; x++, i += 4) {
      if (isBallPixel(data[i], data[i + 1], data[i + 2], opts)) {
        count++;
        sx += x;
        sy += y;
        if (x < bx0) bx0 = x;
        if (x > bx1) bx1 = x;
        if (y < by0) by0 = y;
        if (y > by1) by1 = y;
      }
    }
  }
  return count
    ? { count, cx: sx / count / width, cy: sy / count / height, box: { x0: bx0, y0: by0, x1: bx1, y1: by1 } }
    : { count };
}

export interface LearnedBall {
  pixels: PixelOptions;
  /** Ball pixels found with the learned settings */
  count: number;
  /** Human-readable description, e.g. "Coloured ball" */
  label: string;
}

/**
 * Learn what the ball looks like from a frame with the ball sitting in the box.
 * The floor colour comes from a ring just outside the box; the ball is whatever
 * inside the box stands out most from it. White balls keep the white detector
 * (robust on any floor); anything else switches to colour matching.
 */
export function learnBall(data: Uint8ClampedArray, width: number, height: number, zone: Zone, prev: PixelOptions): LearnedBall | null {
  type Px = { r: number; g: number; lum: number; rgb: [number, number, number] };
  const px = (i: number): Px => {
    const R = data[i], G = data[i + 1], B = data[i + 2];
    const sum = Math.max(1, R + G + B);
    return { r: R / sum, g: G / sum, lum: sum / 3, rgb: [R, G, B] };
  };
  const zx0 = Math.floor(zone.x * width), zy0 = Math.floor(zone.y * height);
  const zx1 = Math.ceil((zone.x + zone.w) * width), zy1 = Math.ceil((zone.y + zone.h) * height);
  const padX = Math.max(4, Math.round((zx1 - zx0) * 0.4)), padY = Math.max(4, Math.round((zy1 - zy0) * 0.4));
  const inside: Px[] = [];
  const ring: Px[] = [];
  for (let y = Math.max(0, zy0 - padY); y < Math.min(height, zy1 + padY); y++) {
    for (let x = Math.max(0, zx0 - padX); x < Math.min(width, zx1 + padX); x++) {
      const p = px((y * width + x) * 4);
      if (x >= zx0 && x < zx1 && y >= zy0 && y < zy1) inside.push(p);
      else ring.push(p);
    }
  }
  if (inside.length < 20 || ring.length < 20) return null;
  const median = (a: number[]) => {
    const s = [...a].sort((p, q) => p - q);
    return s[Math.floor(s.length / 2)];
  };
  const bg = { r: median(ring.map((p) => p.r)), g: median(ring.map((p) => p.g)), lum: median(ring.map((p) => p.lum)) };
  const satOf = (p: { r: number; g: number }) => Math.hypot(p.r - 1 / 3, p.g - 1 / 3);
  const medianBall = (c: Px[]) => ({
    r: median(c.map((p) => p.r)),
    g: median(c.map((p) => p.g)),
    lum: median(c.map((p) => p.lum)),
    rgb: [0, 1, 2].map((k) => median(c.map((p) => p.rgb[k]))) as [number, number, number],
  });

  // 1) Colour: pixels whose colour (not brightness) differs most from the floor.
  //    Glare and shadows change brightness but barely change colour, so they're ignored.
  const chroma = inside.map((p) => ({ p, s: Math.hypot(p.r - bg.r, p.g - bg.g) })).sort((a, b) => b.s - a.s);
  const maxC = chroma[0].s;
  if (maxC >= 0.05) {
    const cand = chroma.filter((x) => x.s >= maxC * 0.5).map((x) => x.p);
    const ball = medianBall(cand);
    const sep = Math.hypot(ball.r - bg.r, ball.g - bg.g);
    const whiteish = satOf(ball) < 0.035 && ball.lum > bg.lum + 25;
    if (cand.length >= 4 && sep >= 0.025 && !whiteish) {
      const pixels: PixelOptions = { ...prev, mode: 'color', color: ball, tolerance: Math.min(0.09, Math.max(0.02, sep * 0.5)) };
      const count = countBallPixels(data, width, height, zone, pixels).count;
      if (count >= 4) return { pixels, count, label: 'Coloured ball' };
    }
  }

  // 2) White: bright, unsaturated pixels clearly brighter than the floor
  const white = inside.filter((p) => satOf(p) < 0.04 && p.lum > bg.lum + 35);
  if (white.length >= 4) {
    const ball = medianBall(white);
    const pixels: PixelOptions = { ...prev, mode: 'white', brightness: Math.round(Math.max(90, Math.min(240, (ball.lum + bg.lum) / 2 + 10))), maxSpread: 60 };
    const count = countBallPixels(data, width, height, zone, pixels).count;
    if (count >= 4) return { pixels, count, label: 'White ball' };
  }
  return null;
}

export type BallState = 'empty' | 'settling' | 'ready' | 'cooldown';
export type BallEvent = 'ready' | 'hit' | 'removed';

export interface PresenceOptions {
  /** Pixel count at or above which a ball is considered present */
  minPixels: number;
  /** How long the ball must sit still before READY (ms) */
  settleMs: number;
  /** How long it must be gone before we call it a hit (ms) */
  goneMs: number;
  /** Ignore the zone for this long after a hit (ms) */
  cooldownMs: number;
  /** Centroid movement (normalised) that counts as "not still" while settling */
  stillTolerance: number;
}

export const DEFAULT_PRESENCE: PresenceOptions = {
  minPixels: 25,
  settleMs: 800,
  goneMs: 120,
  cooldownMs: 1500,
  stillTolerance: 0.02,
};

/**
 * State machine: empty → settling → ready → (ball vanishes quickly) → hit → cooldown → empty.
 * If the ball is removed slowly (fades out over several frames) we report 'removed' instead of 'hit'.
 */
export class BallPresence {
  state: BallState = 'empty';
  private since = 0;
  private goneSince: number | null = null;
  private anchor: { cx: number; cy: number } | null = null;
  /** Pixel count while ready, to tell a sudden disappearance (hit) from a slow removal */
  private readyCount = 0;
  private lastCount = 0;
  private suddenDrop = false;

  constructor(public opts: PresenceOptions = { ...DEFAULT_PRESENCE }) {}

  update(px: PixelCount, now: number): BallEvent | null {
    const present = px.count >= this.opts.minPixels;
    const prevCount = this.lastCount;
    this.lastCount = px.count;

    switch (this.state) {
      case 'cooldown':
        if (now - this.since >= this.opts.cooldownMs) this.set('empty', now);
        return null;

      case 'empty':
        if (present) {
          this.set('settling', now);
          this.anchor = px.cx !== undefined ? { cx: px.cx, cy: px.cy! } : null;
        }
        return null;

      case 'settling': {
        if (!present) {
          this.set('empty', now);
          return null;
        }
        if (this.anchor && px.cx !== undefined) {
          const moved = Math.hypot(px.cx - this.anchor.cx, px.cy! - this.anchor.cy);
          if (moved > this.opts.stillTolerance) {
            // still moving – restart the settle timer from the new position
            this.anchor = { cx: px.cx, cy: px.cy! };
            this.since = now;
            return null;
          }
        }
        if (now - this.since >= this.opts.settleMs) {
          this.set('ready', now);
          this.readyCount = px.count;
          return 'ready';
        }
        return null;
      }

      case 'ready':
        if (present) {
          this.goneSince = null;
          this.readyCount = Math.max(this.readyCount * 0.95, px.count);
          return null;
        }
        if (this.goneSince === null) {
          this.goneSince = now;
          // A hit makes the ball vanish between two frames; a hand removing it doesn't.
          this.suddenDrop = prevCount >= this.readyCount * 0.6;
        }
        if (now - this.goneSince >= this.opts.goneMs) {
          if (this.suddenDrop) {
            this.set('cooldown', now);
            return 'hit';
          }
          this.set('empty', now);
          return 'removed';
        }
        return null;
    }
  }

  private set(state: BallState, now: number) {
    this.state = state;
    this.since = now;
    this.goneSince = null;
  }
}
