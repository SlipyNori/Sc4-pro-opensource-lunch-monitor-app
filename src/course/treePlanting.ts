/**
 * Where to plant 3D trees on a hole: inside mapped woods, along tree rows and at
 * single mapped trees, never on fairways, greens, tees, bunkers or water.
 * Pure logic (no three.js), so it can be unit tested.
 */
import { pointInPolygon, type EN } from './geo';
import { lieAt, type CourseTrees, type Feature } from './osm';

export interface PlantedTree {
  p: EN;
  height: number;
  pick: number;
  rot: number;
}

export interface Rect {
  minE: number;
  maxE: number;
  minN: number;
  maxN: number;
}

function rng(seed: number) {
  return () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
}

export function plantTrees(trees: CourseTrees, features: Feature[], area: Rect, opts: { max?: number; spacing?: number; seed?: number } = {}): PlantedTree[] {
  const max = opts.max ?? 450;
  const spacing = opts.spacing ?? 9; // metres between trees in a wood
  const r = rng(opts.seed ?? 4242);
  const out: PlantedTree[] = [];
  const inArea = (p: EN) => p.e >= area.minE && p.e <= area.maxE && p.n >= area.minN && p.n <= area.maxN;
  const playable = (p: EN) => {
    const lie = lieAt(p, features);
    return lie === 'rough'; // only plant in the rough / woods
  };
  const add = (p: EN, hMin = 9, hMax = 18) => {
    if (out.length >= max || !inArea(p) || !playable(p)) return;
    out.push({ p, height: hMin + r() * (hMax - hMin), pick: r(), rot: r() * Math.PI * 2 });
  };

  for (const p of trees.singles) add(p, 8, 16);
  for (const row of trees.rows) {
    for (let i = 1; i < row.length; i++) {
      const a = row[i - 1], b = row[i];
      const len = Math.hypot(b.e - a.e, b.n - a.n);
      for (let d = 0; d < len; d += 7 + r() * 3) {
        const t = d / len;
        add({ e: a.e + (b.e - a.e) * t + (r() - 0.5) * 1.5, n: a.n + (b.n - a.n) * t + (r() - 0.5) * 1.5 });
      }
    }
  }
  // Woods: jittered grid inside each polygon (clipped to the area)
  for (const wood of trees.woods) {
    let minE = Infinity, maxE = -Infinity, minN = Infinity, maxN = -Infinity;
    for (const p of wood) { minE = Math.min(minE, p.e); maxE = Math.max(maxE, p.e); minN = Math.min(minN, p.n); maxN = Math.max(maxN, p.n); }
    minE = Math.max(minE, area.minE); maxE = Math.min(maxE, area.maxE);
    minN = Math.max(minN, area.minN); maxN = Math.min(maxN, area.maxN);
    for (let e = minE; e <= maxE; e += spacing) {
      for (let n = minN; n <= maxN; n += spacing) {
        const p = { e: e + (r() - 0.5) * spacing * 0.8, n: n + (r() - 0.5) * spacing * 0.8 };
        if (pointInPolygon(p, wood)) add(p);
      }
    }
  }
  // Shuffle so lower graphics settings thin evenly
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
