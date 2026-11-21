import { bearingDeg, dist, sub, type EN } from './geo';
import type { Round } from './round';
import type { HoleImagery } from './satellite';
import { CLUB_REACH_YD } from './round';
import { ydToM } from '../physics/units';
import type { ClubId } from '../types';

/**
 * Top-down satellite view of the current hole, rotated so the hole plays "up".
 * Shows the ball, pin, aim line and shots played. Click to aim.
 */
export class Minimap {
  private view = { cx: 0, cn: 0, rot: 0, s: 1 };
  onAim: (p: EN) => void = () => {};

  constructor(private canvas: HTMLCanvasElement) {
    canvas.addEventListener('click', (e) => {
      const r = canvas.getBoundingClientRect();
      this.onAim(this.toEN((e.clientX - r.left) * devicePixelRatio, (e.clientY - r.top) * devicePixelRatio));
    });
  }

  private toScreen(p: EN) {
    const { cx, cn, rot, s } = this.view;
    const x = (p.e - cx) * s;
    const y = -(p.n - cn) * s;
    const c = Math.cos(rot), sn = Math.sin(rot);
    return { x: this.canvas.width / 2 + x * c - y * sn, y: this.canvas.height / 2 + x * sn + y * c };
  }

  private toEN(sx: number, sy: number): EN {
    const { cx, cn, rot, s } = this.view;
    const x = sx - this.canvas.width / 2, y = sy - this.canvas.height / 2;
    const c = Math.cos(-rot), sn = Math.sin(-rot);
    const ux = x * c - y * sn, uy = x * sn + y * c;
    return { e: cx + ux / s, n: cn - uy / s };
  }

  draw(round: Round, imagery: HoleImagery | null, club: ClubId) {
    const c = this.canvas;
    const dpr = devicePixelRatio || 1;
    c.width = Math.round(c.clientWidth * dpr) || 300;
    c.height = Math.round(c.clientHeight * dpr) || 300;
    const g = c.getContext('2d')!;
    const h = round.hole;

    // Fit the hole (tee, centre line, pin, ball) into the canvas, hole pointing up
    const pts = [...h.path, h.pin, round.ball];
    const up = sub(h.pin, h.tee);
    const rot = (-bearingDeg(up) * Math.PI) / 180;
    const cosr = Math.cos(rot), sinr = Math.sin(rot);
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const p of pts) {
      const x = p.e * cosr - -p.n * sinr;
      const y = p.e * sinr + -p.n * cosr;
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    }
    const pad = 40;
    const s = Math.min(c.width / (maxX - minX + 2 * pad), c.height / (maxY - minY + 2 * pad));
    const mx = (minX + maxX) / 2, my = (minY + maxY) / 2;
    // centre in world coords = inverse-rotate (mx, my)
    const ce = mx * Math.cos(-rot) - my * Math.sin(-rot);
    const cnn = -(mx * Math.sin(-rot) + my * Math.cos(-rot));
    this.view = { cx: ce, cn: cnn, rot, s };

    g.fillStyle = '#2f5d2a';
    g.fillRect(0, 0, c.width, c.height);

    // Satellite image
    if (imagery) {
      g.save();
      g.translate(c.width / 2, c.height / 2);
      g.rotate(rot);
      g.scale(s, s);
      const { rect } = imagery;
      g.drawImage(imagery.canvas, rect.minE - ce, -(rect.maxN - cnn), rect.maxE - rect.minE, rect.maxN - rect.minN);
      g.restore();
    }

    const line = (a: EN[], color: string, width: number, dash: number[] = []) => {
      g.beginPath();
      a.forEach((p, i) => {
        const q = this.toScreen(p);
        if (i) g.lineTo(q.x, q.y);
        else g.moveTo(q.x, q.y);
      });
      g.strokeStyle = color;
      g.lineWidth = width * dpr;
      g.setLineDash(dash.map((d) => d * dpr));
      g.stroke();
      g.setLineDash([]);
    };

    // Centre line, shots, aim
    line(h.path, 'rgba(255,255,255,0.35)', 1, [3, 4]);
    for (const shot of round.shots) line(shot.points.map((p) => ({ e: p.e, n: p.n })), '#ffdd33', 2);
    if (!round.holed) {
      const reach = club === 'PT' ? dist(round.ball, h.pin) : ydToM(CLUB_REACH_YD[club] || 150);
      const aimEnd = { e: round.ball.e + round.aim.e * reach, n: round.ball.n + round.aim.n * reach };
      line([round.ball, aimEnd], '#ffffff', 2, [6, 5]);
      const q = this.toScreen(aimEnd);
      g.strokeStyle = '#ffffff';
      g.lineWidth = 2 * dpr;
      g.beginPath();
      g.arc(q.x, q.y, 6 * dpr, 0, Math.PI * 2);
      g.stroke();
    }

    // Pin
    const pin = this.toScreen(h.pin);
    g.fillStyle = '#e0393e';
    g.beginPath();
    g.moveTo(pin.x, pin.y);
    g.lineTo(pin.x, pin.y - 16 * dpr);
    g.lineTo(pin.x + 11 * dpr, pin.y - 11 * dpr);
    g.lineTo(pin.x, pin.y - 6 * dpr);
    g.fill();
    g.strokeStyle = '#ffffff';
    g.lineWidth = 1.5 * dpr;
    g.beginPath();
    g.moveTo(pin.x, pin.y);
    g.lineTo(pin.x, pin.y - 16 * dpr);
    g.stroke();

    // Ball
    const b = this.toScreen(round.ball);
    g.fillStyle = '#ffffff';
    g.strokeStyle = '#111111';
    g.lineWidth = 1.5 * dpr;
    g.beginPath();
    g.arc(b.x, b.y, 5 * dpr, 0, Math.PI * 2);
    g.fill();
    g.stroke();

    // Attribution
    g.font = `${9 * dpr}px system-ui, sans-serif`;
    g.fillStyle = 'rgba(0,0,0,0.55)';
    const text = round.course.id === 'practice'
      ? 'Practice course'
      : imagery?.total ? 'Imagery © Esri · Map data © OpenStreetMap' : 'Map data © OpenStreetMap';
    const tw = g.measureText(text).width;
    g.fillRect(c.width - tw - 8 * dpr, c.height - 14 * dpr, tw + 8 * dpr, 14 * dpr);
    g.fillStyle = '#ffffff';
    g.fillText(text, c.width - tw - 4 * dpr, c.height - 4 * dpr);
  }
}
