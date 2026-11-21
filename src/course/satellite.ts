/**
 * Builds a satellite image for one hole by stitching map tiles onto a canvas.
 * The canvas is north-up and covers an east/north rectangle in course metres,
 * so it can be laid flat in the 3D scene and drawn on the minimap.
 */
import { latLonToPixel, metresPerPixel, TILE_SIZE, toLatLon, type LatLon } from './geo';

/** Esri World Imagery. Free for non-commercial use with attribution; see README. */
export const TILE_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
export const IMAGERY_ATTRIBUTION = 'Imagery © Esri, Maxar, Earthstar Geographics';

export interface ENRect {
  minE: number;
  maxE: number;
  minN: number;
  maxN: number;
}

export interface HoleImagery {
  canvas: HTMLCanvasElement;
  rect: ENRect;
  zoom: number;
  /** Tiles that failed to load (shown as plain green) */
  failed: number;
  /** Tiles requested (0 for a drawn map) */
  total: number;
}

function loadTile(url: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // required so the canvas can be used as a WebGL texture
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

export async function buildImagery(origin: LatLon, rect: ENRect, maxPx = 2048, maxZoom = 19): Promise<HoleImagery> {
  const nw = toLatLon({ e: rect.minE, n: rect.maxN }, origin);
  const se = toLatLon({ e: rect.maxE, n: rect.minN }, origin);
  const extent = Math.max(rect.maxE - rect.minE, rect.maxN - rect.minN);
  let z = maxZoom;
  while (z > 14 && extent / metresPerPixel(origin.lat, z) > maxPx) z--;

  const p0 = latLonToPixel(nw, z);
  const p1 = latLonToPixel(se, z);
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.ceil(p1.x - p0.x));
  canvas.height = Math.max(1, Math.ceil(p1.y - p0.y));
  const g = canvas.getContext('2d')!;
  g.fillStyle = '#3d6b35';
  g.fillRect(0, 0, canvas.width, canvas.height);

  const tx0 = Math.floor(p0.x / TILE_SIZE), tx1 = Math.floor(p1.x / TILE_SIZE);
  const ty0 = Math.floor(p0.y / TILE_SIZE), ty1 = Math.floor(p1.y / TILE_SIZE);
  const jobs: { x: number; y: number }[] = [];
  for (let ty = ty0; ty <= ty1; ty++) for (let tx = tx0; tx <= tx1; tx++) jobs.push({ x: tx, y: ty });

  let failed = 0;
  // A few at a time, to be polite to the tile server
  const queue = [...jobs];
  await Promise.all(
    Array.from({ length: 6 }, async () => {
      while (queue.length) {
        const t = queue.shift()!;
        const url = TILE_URL.replace('{z}', String(z)).replace('{x}', String(t.x)).replace('{y}', String(t.y));
        const img = await loadTile(url);
        if (img) g.drawImage(img, t.x * TILE_SIZE - p0.x, t.y * TILE_SIZE - p0.y);
        else failed++;
      }
    }),
  );
  return { canvas, rect, zoom: z, failed, total: jobs.length };
}

// Natural, photo-like tones (the map is drawn unlit, like a satellite photo)
const FEATURE_STYLE: Record<string, string> = {
  fairway: '#5e9440',
  tee: '#679c47',
  green: '#6fa94c',
  bunker: '#d9cba0',
  water: '#2f5f80',
};

/**
 * A drawn map of the hole from its mapped features (no internet needed).
 * Used for the built-in course, and when satellite tiles can't be loaded.
 */
export function buildFeatureImagery(
  features: { kind: string; poly: { e: number; n: number }[] }[],
  rect: ENRect,
  metresPerPx = 0.4,
): HoleImagery {
  const w = rect.maxE - rect.minE;
  const h = rect.maxN - rect.minN;
  const s = Math.max(metresPerPx, Math.max(w, h) / 2048);
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(w / s);
  canvas.height = Math.ceil(h / s);
  const g = canvas.getContext('2d')!;
  // Rough: mottled dark green
  g.fillStyle = '#466f33';
  g.fillRect(0, 0, canvas.width, canvas.height);
  let seed = 9;
  const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 1500; i++) {
    g.fillStyle = r() > 0.5 ? 'rgba(30,60,25,0.12)' : 'rgba(110,150,80,0.1)';
    g.beginPath();
    g.arc(r() * canvas.width, r() * canvas.height, 3 + r() * 14, 0, Math.PI * 2);
    g.fill();
  }
  const toPx = (p: { e: number; n: number }) => [(p.e - rect.minE) / s, (rect.maxN - p.n) / s] as const;
  const order = ['fairway', 'tee', 'water', 'green', 'bunker'];
  for (const kind of order) {
    for (const f of features.filter((x) => x.kind === kind)) {
      g.beginPath();
      f.poly.forEach((p, i) => {
        const [x, y] = toPx(p);
        if (i) g.lineTo(x, y);
        else g.moveTo(x, y);
      });
      g.closePath();
      g.fillStyle = FEATURE_STYLE[kind];
      g.fill();
      if (kind === 'fairway') {
        // mowing stripes
        g.save();
        g.clip();
        g.fillStyle = 'rgba(255,255,255,0.07)';
        for (let y = 0; y < canvas.height; y += 24 / s * 0.5) g.fillRect(0, y, canvas.width, 6 / s);
        g.restore();
      }
      if (kind === 'water' || kind === 'bunker' || kind === 'green') {
        g.lineWidth = Math.max(1, (kind === 'green' ? 2.5 : 1.5) / s);
        g.strokeStyle = kind === 'water' ? '#2b5f8c' : kind === 'green' ? '#6fb553' : '#c9b984';
        g.stroke();
      }
    }
  }
  return { canvas, rect, zoom: 0, failed: 0, total: 0 };
}
