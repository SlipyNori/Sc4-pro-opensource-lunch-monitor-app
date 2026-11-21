/**
 * Real course layouts from OpenStreetMap.
 *
 * Mappers draw each hole as a line `golf=hole` from tee to green (with bends
 * for doglegs), plus polygons for greens, tees, fairways, bunkers and water.
 * We search with Photon/Nominatim, find `leisure=golf_course` areas with Overpass,
 * then download every golf feature inside the chosen course.
 *
 * Data © OpenStreetMap contributors, ODbL. Please respect the public servers'
 * usage policies: this app only queries when the user searches or loads a course.
 */
import { centroid, dist, pointInPolygon, toEN, type EN, type LatLon } from './geo';

export type Lie = 'tee' | 'fairway' | 'rough' | 'bunker' | 'green' | 'water';
export type FeatureKind = Exclude<Lie, 'rough'>;

export interface Feature {
  kind: FeatureKind;
  poly: EN[];
}

export interface Hole {
  number: number;
  par: number;
  /** Centre line from tee to green, as mapped (bends = doglegs) */
  path: EN[];
  tee: EN;
  pin: EN;
  /** Length along the centre line to the pin (m) */
  lengthM: number;
  handicap?: number;
}

/** Where trees stand, for planting 3D trees (from OSM woods, tree rows and single trees) */
export interface CourseTrees {
  woods: EN[][];
  rows: EN[][];
  singles: EN[];
}

export interface Course {
  id: string;
  name: string;
  origin: LatLon;
  holes: Hole[];
  features: Feature[];
  trees?: CourseTrees;
}

export interface PlaceResult {
  name: string;
  label: string;
  lat: number;
  lon: number;
  isGolfCourse: boolean;
  /** For golf courses found by the place search: enough to load it directly */
  course?: CourseSummary;
}

export interface CourseSummary {
  id: string;
  name: string;
  center: LatLon;
  bounds: { minlat: number; minlon: number; maxlat: number; maxlon: number };
}

const PHOTON = 'https://photon.komoot.io/api/';
const NOMINATIM = 'https://nominatim.openstreetmap.org/search';
export const OVERPASS_ENDPOINTS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.private.coffee/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
];

/** fetch with a time limit, so a slow server can't leave the search hanging */
async function fetchWithTimeout(url: string, init: RequestInit = {}, ms = 25000): Promise<Response> {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: ctl.signal });
  } catch (e) {
    throw new Error(ctl.signal.aborted ? 'timed out' : (e as Error).message || 'network error');
  } finally {
    clearTimeout(timer);
  }
}

// ---------------- Network ----------------

/**
 * Find places by name. Uses Photon (OSM-based, allows requests from pages opened
 * as a local file) and falls back to Nominatim, which only allows cross-site
 * requests when the page has a web address.
 */
export async function searchPlaces(query: string): Promise<PlaceResult[]> {
  try {
    const res = await fetchWithTimeout(`${PHOTON}?limit=10&q=${encodeURIComponent(query)}`, {}, 15000);
    if (!res.ok) throw new Error(String(res.status));
    const data = (await res.json()) as {
      features: {
        geometry: { coordinates: [number, number] };
        properties: Record<string, string | number | number[] | undefined>;
      }[];
    };
    return data.features.map((f) => {
      const p = f.properties as Record<string, string | undefined> & { extent?: number[]; osm_id?: number };
      const where = [p.city, p.state, p.country].filter(Boolean).join(', ');
      const isGolfCourse = p.osm_key === 'leisure' && p.osm_value === 'golf_course';
      const lat = f.geometry.coordinates[1];
      const lon = f.geometry.coordinates[0];
      // Photon gives a golf course's extent as [minLon, maxLat, maxLon, minLat]
      const ext = p.extent;
      const course: CourseSummary | undefined = isGolfCourse && ext && ext.length === 4
        ? {
            id: `${p.osm_type === 'R' ? 'relation' : 'way'}/${p.osm_id}`,
            name: p.name ?? 'Golf course',
            center: { lat, lon },
            bounds: { minlon: ext[0], maxlat: ext[1], maxlon: ext[2], minlat: ext[3] },
          }
        : undefined;
      return { name: p.name ?? where, label: [p.name, where].filter(Boolean).join(' – '), lat, lon, isGolfCourse, course };
    });
  } catch {
    const url = `${NOMINATIM}?format=jsonv2&limit=8&q=${encodeURIComponent(query)}`;
    const res = await fetchWithTimeout(url, { headers: { Accept: 'application/json' } }, 15000);
    if (!res.ok) throw new Error(`Place search failed (${res.status})`);
    const rows = (await res.json()) as { name: string; display_name: string; lat: string; lon: string; category?: string; type?: string }[];
    return rows.map((r) => ({
      name: r.name || r.display_name.split(',')[0],
      label: r.display_name,
      lat: Number(r.lat),
      lon: Number(r.lon),
      isGolfCourse: r.category === 'leisure' && r.type === 'golf_course',
    }));
  }
}

/** Query OpenStreetMap course data, trying each public Overpass server in turn. */
export async function overpass(query: string, onTry?: (host: string) => void): Promise<OverpassResponse> {
  const errors: string[] = [];
  for (const endpoint of OVERPASS_ENDPOINTS) {
    const host = new URL(endpoint).host;
    onTry?.(host);
    try {
      const res = await fetchWithTimeout(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `data=${encodeURIComponent(query)}`,
      }, 40000);
      if (!res.ok) throw new Error(res.status === 429 ? 'busy (429)' : `error ${res.status}`);
      return (await res.json()) as OverpassResponse;
    } catch (e) {
      errors.push(`${host}: ${(e as Error).message}`);
    }
  }
  throw new Error(`no course-data server answered (${errors.join('; ')}). Check your internet connection, or try again in a minute.`);
}

/** Golf courses within `radiusM` of a point, nearest first */
export async function findCourses(lat: number, lon: number, radiusM = 4000, onTry?: (host: string) => void): Promise<CourseSummary[]> {
  const q = `[out:json][timeout:25];
(way["leisure"="golf_course"](around:${radiusM},${lat},${lon});
 relation["leisure"="golf_course"](around:${radiusM},${lat},${lon}););
out tags center bb;`;
  const data = await overpass(q, onTry);
  return data.elements
    .filter((e) => e.bounds && e.center)
    .map((e) => ({
      id: `${e.type}/${e.id}`,
      name: e.tags?.name ?? 'Unnamed golf course',
      center: { lat: e.center!.lat, lon: e.center!.lon },
      bounds: e.bounds!,
    }))
    .sort((a, b) => Math.hypot(a.center.lat - lat, a.center.lon - lon) - Math.hypot(b.center.lat - lat, b.center.lon - lon));
}

/**
 * Download a course in two small steps: first just the holes (enough to play),
 * then greens, tees, fairways, bunkers and water. If the second step fails the
 * holes are still playable (everything off the hole line counts as rough).
 */
export async function loadCourse(
  summary: CourseSummary,
  onTry?: (host: string) => void,
  onNote?: (note: string) => void,
): Promise<Course> {
  const pad = 0.0015; // ~150 m
  const b = summary.bounds;
  const bbox = `${b.minlat - pad},${b.minlon - pad},${b.maxlat + pad},${b.maxlon + pad}`;
  const holes = await overpass(`[out:json][timeout:25];way["golf"="hole"](${bbox});out geom;`, onTry);
  if (!holes.elements.length) return parseCourse(holes, summary.name, summary.id, summary.center);
  try {
    const features = await overpass(
      `[out:json][timeout:25];
(way["golf"~"^(green|tee|fairway|bunker|water_hazard|lateral_water_hazard)$"](${bbox});
 node["golf"="pin"](${bbox});
 way["natural"="water"](${bbox});
 way["natural"~"^(wood|tree_row|scrub)$"](${bbox});
 way["landuse"="forest"](${bbox});
 node["natural"="tree"](${bbox}););
out geom;`,
      onTry,
    );
    return parseCourse({ elements: [...holes.elements, ...features.elements] }, summary.name, summary.id, summary.center);
  } catch (e) {
    onNote?.(`Greens, bunkers and water couldn't be downloaded (${(e as Error).message}), so the holes are played without them.`);
    return parseCourse(holes, summary.name, summary.id, summary.center);
  }
}

// ---------------- Parsing (pure, unit tested) ----------------

export interface OverpassElement {
  type: 'node' | 'way' | 'relation';
  id: number;
  lat?: number;
  lon?: number;
  tags?: Record<string, string>;
  geometry?: { lat: number; lon: number }[];
  members?: { type: string; role: string; geometry?: { lat: number; lon: number }[] }[];
  center?: { lat: number; lon: number };
  bounds?: { minlat: number; minlon: number; maxlat: number; maxlon: number };
}

export interface OverpassResponse {
  elements: OverpassElement[];
}

function featureKind(tags: Record<string, string>): FeatureKind | null {
  switch (tags.golf) {
    case 'green': return 'green';
    case 'tee': return 'tee';
    case 'fairway': return 'fairway';
    case 'bunker': return 'bunker';
    case 'water_hazard':
    case 'lateral_water_hazard': return 'water';
  }
  if (tags.natural === 'water') return 'water';
  return null;
}

function estimatePar(lengthM: number) {
  const yd = lengthM * 1.0936;
  return yd < 250 ? 3 : yd < 470 ? 4 : 5;
}

function pathLength(p: EN[]) {
  let l = 0;
  for (let i = 1; i < p.length; i++) l += dist(p[i - 1], p[i]);
  return l;
}

export function parseCourse(data: OverpassResponse, name: string, id = 'course', origin?: LatLon): Course {
  const els = data.elements;
  if (!origin) {
    const pts = els.flatMap((e) => e.geometry ?? (e.lat !== undefined ? [{ lat: e.lat, lon: e.lon! }] : []));
    if (!pts.length) throw new Error('No course data found');
    origin = { lat: pts.reduce((a, p) => a + p.lat, 0) / pts.length, lon: pts.reduce((a, p) => a + p.lon, 0) / pts.length };
  }
  const en = (g: { lat: number; lon: number }[]) => g.map((p) => toEN(p, origin!));

  const features: Feature[] = [];
  const pins: EN[] = [];
  const holeWays: OverpassElement[] = [];
  const trees: CourseTrees = { woods: [], rows: [], singles: [] };

  for (const e of els) {
    const tags = e.tags ?? {};
    if (e.type === 'node' && tags.golf === 'pin' && e.lat !== undefined) {
      pins.push(toEN({ lat: e.lat, lon: e.lon! }, origin));
      continue;
    }
    if (e.type === 'node' && tags.natural === 'tree' && e.lat !== undefined) {
      trees.singles.push(toEN({ lat: e.lat, lon: e.lon! }, origin));
      continue;
    }
    if (e.type === 'way' && e.geometry && e.geometry.length >= 2) {
      if (tags.natural === 'tree_row') {
        trees.rows.push(en(e.geometry));
        continue;
      }
      if ((tags.natural === 'wood' || tags.natural === 'scrub' || tags.landuse === 'forest') && e.geometry.length >= 3) {
        trees.woods.push(en(e.geometry));
        continue;
      }
    }
    if (tags.golf === 'hole' && e.type === 'way' && e.geometry && e.geometry.length >= 2) {
      holeWays.push(e);
      continue;
    }
    const kind = featureKind(tags);
    if (!kind) continue;
    if (e.type === 'way' && e.geometry && e.geometry.length >= 3) {
      features.push({ kind, poly: en(e.geometry) });
    } else if (e.type === 'relation' && e.members) {
      for (const m of e.members) {
        if (m.role !== 'inner' && m.geometry && m.geometry.length >= 3) features.push({ kind, poly: en(m.geometry) });
      }
    }
  }

  const greens = features.filter((f) => f.kind === 'green');
  const seen = new Set<number>();
  const holes: Hole[] = [];
  for (const w of holeWays) {
    const tags = w.tags ?? {};
    const path = en(w.geometry!);
    const end = path[path.length - 1];
    // Pin: a mapped pin on the green, else the green's centre, else the end of the line
    const green = greens.find((g) => pointInPolygon(end, g.poly))
      ?? greens.map((g) => ({ g, d: dist(centroid(g.poly), end) })).filter((x) => x.d < 40).sort((a, b) => a.d - b.d)[0]?.g;
    let pin = end;
    if (green) {
      pin = pins.find((p) => pointInPolygon(p, green.poly)) ?? centroid(green.poly);
    } else {
      const near = pins.map((p) => ({ p, d: dist(p, end) })).filter((x) => x.d < 25).sort((a, b) => a.d - b.d)[0];
      if (near) pin = near.p;
    }
    const num = parseInt(tags.ref ?? '', 10);
    if (Number.isFinite(num)) {
      if (seen.has(num)) continue; // another course in the same area reusing numbers
      seen.add(num);
    }
    const fullPath = dist(path[path.length - 1], pin) > 1 ? [...path, pin] : [...path.slice(0, -1), pin];
    const lengthM = pathLength(fullPath);
    const par = parseInt(tags.par ?? '', 10);
    holes.push({
      number: Number.isFinite(num) ? num : 0,
      par: Number.isFinite(par) && par >= 3 && par <= 6 ? par : estimatePar(lengthM),
      path: fullPath,
      tee: path[0],
      pin,
      lengthM,
      handicap: parseInt(tags.handicap ?? '', 10) || undefined,
    });
  }
  holes.sort((a, b) => (a.number || 99) - (b.number || 99));
  holes.forEach((h, i) => { if (!h.number) h.number = i + 1; });

  return { id, name, origin, holes, features, trees };
}

/** What the ball is lying on at a point. Water beats everything; rough is the default. */
export function lieAt(p: EN, features: Feature[]): Lie {
  const order: FeatureKind[] = ['water', 'bunker', 'green', 'tee', 'fairway'];
  for (const k of order) {
    if (features.some((f) => f.kind === k && pointInPolygon(p, f.poly))) return k;
  }
  return 'rough';
}
