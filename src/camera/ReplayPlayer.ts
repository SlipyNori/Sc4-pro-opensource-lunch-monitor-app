import type { ReplayClip } from './ReplayRecorder';

/**
 * Small picture-in-picture player for impact replays.
 * Auto-plays a new clip twice in slow motion, then rests on the impact frame.
 */
export class ReplayPlayer {
  private clip: ReplayClip | null = null;
  private idx = 0;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private loopsLeft = 0;
  speed = 0.5;

  constructor(
    private root: HTMLElement,
    private canvas: HTMLCanvasElement,
    private scrub: HTMLInputElement,
    private label: HTMLElement,
  ) {
    scrub.addEventListener('input', () => {
      this.pause();
      this.show(Number(scrub.value));
    });
  }

  load(clip: ReplayClip, title: string, autoplay = true) {
    this.pause();
    this.clip = clip;
    this.root.hidden = false;
    this.scrub.max = String(clip.frames.length - 1);
    this.label.textContent = title;
    this.show(0);
    if (autoplay) this.play(2);
  }

  play(loops = 1) {
    if (!this.clip) return;
    this.pause();
    this.loopsLeft = loops;
    if (this.idx >= this.clip.frames.length - 1) this.idx = 0;
    const step = () => {
      if (!this.clip) return;
      this.show(this.idx);
      if (this.idx < this.clip.frames.length - 1) {
        this.idx++;
        this.timer = setTimeout(step, 1000 / (this.clip.fps * this.speed));
      } else if (--this.loopsLeft > 0) {
        this.idx = 0;
        this.timer = setTimeout(step, 400);
      } else {
        // Rest on the impact frame so it's easy to inspect
        this.timer = setTimeout(() => this.show(this.clip!.hitIndex), 500);
      }
    };
    step();
  }

  pause() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = null;
  }

  hide() {
    this.pause();
    this.root.hidden = true;
  }

  get playing() {
    return this.timer !== null;
  }

  private show(i: number) {
    const clip = this.clip;
    if (!clip || !clip.frames[i]) return;
    this.idx = i;
    const f = clip.frames[i];
    if (this.canvas.width !== f.width) this.canvas.width = f.width;
    if (this.canvas.height !== f.height) this.canvas.height = f.height;
    const g = this.canvas.getContext('2d')!;
    g.drawImage(f, 0, 0);
    // Mark the impact frame
    if (i === clip.hitIndex) {
      g.strokeStyle = '#4fb3ff';
      g.lineWidth = Math.max(3, f.width / 120);
      g.strokeRect(0, 0, f.width, f.height);
      g.fillStyle = 'rgba(10,14,12,0.7)';
      g.fillRect(8, 8, 74, 24);
      g.fillStyle = '#fff';
      g.font = `bold ${14}px system-ui, sans-serif`;
      g.fillText('IMPACT', 16, 25);
    }
    this.scrub.value = String(i);
  }
}
