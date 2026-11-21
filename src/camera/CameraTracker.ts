import {
  BallPresence,
  countBallPixels,
  DEFAULT_PIXEL_OPTIONS,
  type BallEvent,
  type BallState,
  type PixelCount,
  type PixelOptions,
  type Zone,
} from './ballDetection';

export interface CameraSettings {
  deviceId?: string;
  zone: Zone;
  pixels: PixelOptions;
  minPixels: number;
}

export const DEFAULT_CAMERA_SETTINGS: CameraSettings = {
  zone: { x: 0.4, y: 0.55, w: 0.2, h: 0.25 },
  pixels: { ...DEFAULT_PIXEL_OPTIONS },
  minPixels: 25,
};

/** Analysis resolution: small enough to be cheap, big enough for a ball a few metres away. */
const W = 320;
const H = 240;

/**
 * Runs the webcam, analyses ~15 frames/s inside the zone, draws the preview
 * overlay, and reports ball state changes.
 */
export class CameraTracker {
  readonly video = document.createElement('video');
  private stream: MediaStream | null = null;
  private work = document.createElement('canvas');
  private ctx: CanvasRenderingContext2D;
  private timer: ReturnType<typeof setInterval> | null = null;
  private presence: BallPresence;
  last: PixelCount = { count: 0 };
  /** When the ball was last seen in the box (performance.now ms): the best estimate of impact time */
  lastBallSeenAt = 0;
  onEvent: (e: BallEvent) => void = () => {};
  onFrame: () => void = () => {};

  constructor(public settings: CameraSettings, private overlay: HTMLCanvasElement) {
    this.video.muted = true;
    this.video.playsInline = true;
    this.work.width = W;
    this.work.height = H;
    this.ctx = this.work.getContext('2d', { willReadFrequently: true })!;
    this.presence = new BallPresence();
    this.presence.opts.minPixels = settings.minPixels;
  }

  get running() {
    return !!this.stream;
  }

  get state(): BallState {
    return this.presence.state;
  }

  static async listCameras(): Promise<MediaDeviceInfo[]> {
    if (!navigator.mediaDevices?.enumerateDevices) return [];
    return (await navigator.mediaDevices.enumerateDevices()).filter((d) => d.kind === 'videoinput');
  }

  async start() {
    if (!navigator.mediaDevices?.getUserMedia) throw new Error('This browser can’t use a camera here. Open the app in Chrome or Edge.');
    this.stop();
    this.stream = await navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: this.settings.deviceId ? { exact: this.settings.deviceId } : undefined,
        width: { ideal: 1280 },
        height: { ideal: 720 },
        frameRate: { ideal: 30 },
      },
      audio: false,
    });
    this.video.srcObject = this.stream;
    await this.video.play();
    this.presence = new BallPresence({ ...this.presence.opts, minPixels: this.settings.minPixels });
    this.timer = setInterval(() => this.tick(), 66);
  }

  stop() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.stream?.getTracks().forEach((t) => t.stop());
    this.stream = null;
    this.video.srcObject = null;
    this.presence.state = 'empty';
    this.last = { count: 0 };
    this.draw();
  }

  setMinPixels(n: number) {
    this.settings.minPixels = n;
    this.presence.opts.minPixels = n;
  }

  private tick() {
    if (this.video.readyState < 2) return;
    this.ctx.drawImage(this.video, 0, 0, W, H);
    const img = this.ctx.getImageData(0, 0, W, H);
    this.last = countBallPixels(img.data, W, H, this.settings.zone, this.settings.pixels);
    if (this.last.count >= this.settings.minPixels) this.lastBallSeenAt = performance.now();
    const ev = this.presence.update(this.last, performance.now());
    if (ev) this.onEvent(ev);
    this.draw(img);
    this.onFrame();
  }

  /** Draw the preview: video frame, zone box coloured by state, ball pixels highlighted. */
  draw(img?: ImageData) {
    const c = this.overlay;
    const g = c.getContext('2d')!;
    const cw = (c.width = c.clientWidth * devicePixelRatio || W);
    const ch = (c.height = c.clientHeight * devicePixelRatio || H);
    g.fillStyle = '#0a0f0c';
    g.fillRect(0, 0, cw, ch);
    if (this.running && this.video.readyState >= 2) {
      g.drawImage(this.video, 0, 0, cw, ch);
    } else {
      g.fillStyle = '#94a69a';
      g.font = `${14 * devicePixelRatio}px system-ui, sans-serif`;
      g.textAlign = 'center';
      g.fillText('Camera off', cw / 2, ch / 2);
    }
    // Highlight detected ball pixels inside the zone
    if (img) {
      const { x, y, w, h } = this.settings.zone;
      const x0 = Math.floor(x * W), y0 = Math.floor(y * H), x1 = Math.ceil((x + w) * W), y1 = Math.ceil((y + h) * H);
      g.fillStyle = 'rgba(79, 179, 255, 0.85)';
      const sx = cw / W, sy = ch / H;
      const { brightness, maxSpread } = this.settings.pixels;
      for (let py = y0; py < y1; py++) {
        for (let px = x0; px < x1; px++) {
          const i = (py * W + px) * 4;
          const r = img.data[i], gg = img.data[i + 1], b = img.data[i + 2];
          const min = Math.min(r, gg, b);
          if (min >= brightness && Math.max(r, gg, b) - min <= maxSpread) g.fillRect(px * sx, py * sy, sx, sy);
        }
      }
    }
    const colors: Record<BallState, string> = {
      empty: '#f2b84b', settling: '#f2b84b', ready: '#3ddc5c', cooldown: '#4fb3ff',
    };
    const z = this.settings.zone;
    g.lineWidth = 3 * devicePixelRatio;
    g.strokeStyle = colors[this.presence.state];
    g.setLineDash(this.presence.state === 'ready' ? [] : [8 * devicePixelRatio, 6 * devicePixelRatio]);
    g.strokeRect(z.x * cw, z.y * ch, z.w * cw, z.h * ch);
    g.setLineDash([]);
  }

  /** Let the user drag a new zone on the preview. */
  enableZoneDrawing(onChange: (z: Zone) => void) {
    const c = this.overlay;
    let start: { x: number; y: number } | null = null;
    const pos = (e: PointerEvent) => {
      const r = c.getBoundingClientRect();
      return { x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)) };
    };
    c.addEventListener('pointerdown', (e) => {
      start = pos(e);
      c.setPointerCapture(e.pointerId);
    });
    c.addEventListener('pointermove', (e) => {
      if (!start) return;
      const p = pos(e);
      this.settings.zone = { x: Math.min(start.x, p.x), y: Math.min(start.y, p.y), w: Math.abs(p.x - start.x), h: Math.abs(p.y - start.y) };
      if (!this.running) this.draw();
    });
    c.addEventListener('pointerup', () => {
      if (!start) return;
      start = null;
      const z = this.settings.zone;
      if (z.w < 0.02 || z.h < 0.02) this.settings.zone = { ...DEFAULT_CAMERA_SETTINGS.zone };
      onChange(this.settings.zone);
      this.draw();
    });
  }
}
