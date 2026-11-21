/**
 * Small geo helpers. Course geometry uses a local flat "ENU" frame in metres
 * (east, north) around a course origin – accurate to well under 1 m over a
 * golf course, and much simpler than working in lat/lon.
 */

export interface LatLon {
  lat: number;
  lon: number;
}

/** Local east/north coordinates in metres */
export interface EN {
  e: number;
  n: number;
}

const M_PER_DEG_LAT = 110_540;
const M_PER_DEG_LON_EQ = 111_320;

export function toEN(p: LatLon, origin: LatLon): EN {
  return {
    e: (p.lon - origin.lon) * M_PER_DEG_LON_EQ * Math.cos((origin.lat * Math.PI) / 180),
    n: (p.lat - origin.lat) * M_PER_DEG_LAT,
  };
}

export function toLatLon(p: EN, origin: LatLon): LatLon {
  return {
    lat: origin.lat + p.n / M_PER_DEG_LAT,
    lon: origin.lon + p.e / (M_PER_DEG_LON_EQ * Math.cos((origin.lat * Math.PI) / 180)),
  };
}

export const dist = (a: EN, b: EN) => Math.hypot(a.e - b.e, a.n - b.n);
export const sub = (a: EN, b: EN): EN => ({ e: a.e - b.e, n: a.n - b.n });
export const add = (a: EN, b: EN): EN => ({ e: a.e + b.e, n: a.n + b.n });
export const scale = (a: EN, s: number): EN => ({ e: a.e * s, n: a.n * s });
export const norm = (a: EN): EN => {
  const l = Math.hypot(a.e, a.n) || 1;
  return { e: a.e / l, n: a.n / l };
};
/** Unit vector 90° clockwise (to the right when facing `a`) */
export const rightOf = (a: EN): EN => ({ e: a.n, n: -a.e });
/** Rotate a unit/any vector clockwise by `deg` */
export const rotate = (a: EN, deg: number): EN => {
  const r = (-deg * Math.PI) / 180;
  return { e: a.e * Math.cos(r) - a.n * Math.sin(r), n: a.e * Math.sin(r) + a.n * Math.cos(r) };
};
/** Compass bearing of a vector, degrees clockwise from north */
export const bearingDeg = (a: EN) => ((Math.atan2(a.e, a.n) * 180) / Math.PI + 360) % 360;

export function pointInPolygon(p: EN, poly: EN[]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i];
    const b = poly[j];
    if (a.n > p.n !== b.n > p.n && p.e < ((b.e - a.e) * (p.n - a.n)) / (b.n - a.n) + a.e) inside = !inside;
  }
  return inside;
}

export function centroid(poly: EN[]): EN {
  // Area-weighted centroid; falls back to vertex mean for degenerate shapes
  let a = 0, cx = 0, cy = 0;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const f = poly[j].e * poly[i].n - poly[i].e * poly[j].n;
    a += f;
    cx += (poly[j].e + poly[i].e) * f;
    cy += (poly[j].n + poly[i].n) * f;
  }
  if (Math.abs(a) < 1e-9) {
    return { e: poly.reduce((s, p) => s + p.e, 0) / poly.length, n: poly.reduce((s, p) => s + p.n, 0) / poly.length };
  }
  return { e: cx / (3 * a), n: cy / (3 * a) };
}

// ---------- Web-Mercator tile maths (for satellite imagery) ----------

export const TILE_SIZE = 256;

/** World pixel coordinates at zoom z */
export function latLonToPixel(p: LatLon, z: number): { x: number; y: number } {
  const s = TILE_SIZE * 2 ** z;
  const sin = Math.sin((p.lat * Math.PI) / 180);
  return {
    x: ((p.lon + 180) / 360) * s,
    y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * s,
  };
}

export function pixelToLatLon(x: number, y: number, z: number): LatLon {
  const s = TILE_SIZE * 2 ** z;
  const lon = (x / s) * 360 - 180;
  const n = Math.PI - (2 * Math.PI * y) / s;
  return { lat: (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))), lon };
}

/** Metres per pixel at a latitude and zoom */
export const metresPerPixel = (lat: number, z: number) => (156543.03392 * Math.cos((lat * Math.PI) / 180)) / 2 ** z;
