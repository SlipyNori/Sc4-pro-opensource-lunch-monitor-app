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
  /** Minimum value of every RGB channel for a pixel to count as "ball white" (0–255) */
  brightness: number;
  /** Maximum spread between RGB channels (keeps out coloured highlights) */
  maxSpread: number;
}

export const DEFAULT_PIXEL_OPTIONS: PixelOptions = { brightness: 170, maxSpread: 55 };

export interface PixelCount {
  count: number;
  /** Centroid of ball pixels in normalised frame coordinates, if any */
  cx?: number;
  cy?: number;
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
  for (let y = y0; y < y1; y++) {
    let i = (y * width + x0) * 4;
    for (let x = x0; x < x1; x++, i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const min = Math.min(r, g, b);
      if (min >= opts.brightness && Math.max(r, g, b) - min <= opts.maxSpread) {
        count++;
        sx += x;
        sy += y;
      }
    }
  }
  return count ? { count, cx: sx / count / width, cy: sy / count / height } : { count };
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
