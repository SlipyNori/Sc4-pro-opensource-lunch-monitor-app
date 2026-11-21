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
  return { canvas, rect, zoom: z, failed };
}
