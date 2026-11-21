/**
 * Low-cost impact replay.
 *
 * While the camera runs, keeps a short rolling buffer of small, low-frame-rate
 * frames (ImageBitmaps, GPU-backed and cheap to create). When a hit is detected,
 * it waits a moment for the follow-through, then cuts a clip around the hit.
 * Nothing is encoded to video; old frames are released as soon as they age out.
 */

export interface ReplayQuality {
  id: 'light' | 'balanced' | 'smooth';
  label: string;
  fps: number;
  width: number;
}

export const REPLAY_QUALITIES: ReplayQuality[] = [
  { id: 'light', label: 'Light – 10 fps, small', fps: 10, width: 320 },
  { id: 'balanced', label: 'Balanced – 15 fps', fps: 15, width: 480 },
  { id: 'smooth', label: 'Smooth – 30 fps (more CPU/memory)', fps: 30, width: 640 },
];

export interface ReplayClip {
  frames: ImageBitmap[];
  /** Capture time of each frame (ms, performance.now clock) */
  times: number[];
  fps: number;
  /** Index of the frame closest to the detected hit */
  hitIndex: number;
  createdAt: number;
}

interface Frame {
  t: number;
  bmp: ImageBitmap;
}

export class ReplayRecorder {
  quality: ReplayQuality = REPLAY_QUALITIES[1];
  preMs = 1500;
  postMs = 700;
  /** Rolling buffer length; must cover preMs + postMs */
  private bufferMs = 3500;
  private buf: Frame[] = [];
  private timer: ReturnType<typeof setInterval> | null = null;
  private video: HTMLVideoElement | null = null;
  private busy = false;

  get running() {
    return this.timer !== null;
  }

  start(video: HTMLVideoElement) {
    this.stop();
    this.video = video;
    this.timer = setInterval(() => this.grab(), 1000 / this.quality.fps);
  }

  stop() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    for (const f of this.buf) f.bmp.close();
    this.buf = [];
  }

  setQuality(q: ReplayQuality) {
    this.quality = q;
    if (this.video && this.running) this.start(this.video);
  }

  private async grab() {
    const v = this.video;
    if (!v || v.readyState < 2 || this.busy) return; // skip a frame rather than queue up work
    this.busy = true;
    try {
      const w = this.quality.width;
      const h = Math.round((w * v.videoHeight) / Math.max(1, v.videoWidth));
      const bmp = await createImageBitmap(v, { resizeWidth: w, resizeHeight: h, resizeQuality: 'low' });
      const now = performance.now();
      this.buf.push({ t: now, bmp });
      while (this.buf.length && now - this.buf[0].t > this.bufferMs) this.buf.shift()!.bmp.close();
    } catch {
      /* frame not available – skip */
    } finally {
      this.busy = false;
    }
  }

  /**
   * Cut a clip around `hitT`. Resolves after the post-roll has been recorded.
   * Frames are cloned so the rolling buffer can keep releasing its own copies.
   */
  async capture(hitT = performance.now(), preMs = this.preMs, postMs = this.postMs): Promise<ReplayClip | null> {
    const wait = Math.max(0, hitT + postMs - performance.now());
    await new Promise((r) => setTimeout(r, wait));
    const picked = this.buf.filter((f) => f.t >= hitT - preMs && f.t <= hitT + postMs);
    if (picked.length < 3) return null;
    const frames = await Promise.all(picked.map((f) => createImageBitmap(f.bmp)));
    let hitIndex = 0;
    picked.forEach((f, i) => {
      if (Math.abs(f.t - hitT) < Math.abs(picked[hitIndex].t - hitT)) hitIndex = i;
    });
    return { frames, times: picked.map((f) => f.t), fps: this.quality.fps, hitIndex, createdAt: Date.now() };
  }
}

export function releaseClip(clip: ReplayClip) {
  for (const f of clip.frames) f.close();
  clip.frames = [];
}
