import { describe, expect, it } from 'vitest';
import { toLatLon, dist, type EN, type LatLon } from '../src/course/geo';
import { lieAt, parseCourse, type OverpassResponse } from '../src/course/osm';
import { Round, puttDrops } from '../src/course/round';
import { puttDistance, puttSpeedFor } from '../src/physics/putt';
import { msToMph } from '../src/physics/units';
import { measurePutt, laneZone } from '../src/camera/puttTracking';

const ORIGIN: LatLon = { lat: 36, lon: -120 };
const ll = (p: EN) => toLatLon(p, ORIGIN);
const rect = (e0: number, n0: number, e1: number, n1: number) =>
  [ll({ e: e0, n: n0 }), ll({ e: e1, n: n0 }), ll({ e: e1, n: n1 }), ll({ e: e0, n: n1 }), ll({ e: e0, n: n0 })];

/** Two holes: #1 par 4 straight north 340 m with a pond right of the fairway; #2 par 3 east. */
const FIXTURE: OverpassResponse = {
  elements: [
    { type: 'way', id: 1, tags: { golf: 'hole', ref: '1', par: '4' }, geometry: [ll({ e: 0, n: 0 }), ll({ e: 0, n: 335 })] },
    { type: 'way', id: 2, tags: { golf: 'hole', ref: '2', par: '3' }, geometry: [ll({ e: 30, n: 340 }), ll({ e: 170, n: 340 })] },
    { type: 'way', id: 10, tags: { golf: 'tee' }, geometry: rect(-5, -5, 5, 5) },
    { type: 'way', id: 11, tags: { golf: 'fairway' }, geometry: rect(-20, 40, 20, 320) },
    { type: 'way', id: 12, tags: { golf: 'green' }, geometry: rect(-12, 328, 12, 352) },
    { type: 'way', id: 13, tags: { golf: 'bunker' }, geometry: rect(-30, 300, -21, 320) },
    { type: 'way', id: 14, tags: { natural: 'water' }, geometry: rect(25, 150, 120, 280) },
    { type: 'way', id: 15, tags: { golf: 'green' }, geometry: rect(160, 330, 180, 350) },
    { type: 'node', id: 20, tags: { golf: 'pin' }, ...ll({ e: 3, n: 342 }) },
  ],
};

describe('OpenStreetMap course parsing', () => {
  const course = parseCourse(FIXTURE, 'Test Links', 'way/1', ORIGIN);

  it('builds holes in order with par and length', () => {
    expect(course.holes.map((h) => h.number)).toEqual([1, 2]);
    expect(course.holes[0].par).toBe(4);
    expect(course.holes[1].par).toBe(3);
    expect(course.holes[0].lengthM).toBeGreaterThan(330);
  });

  it('uses a mapped pin on the green, else the green centre', () => {
    expect(dist(course.holes[0].pin, { e: 3, n: 342 })).toBeLessThan(0.5);
    expect(dist(course.holes[1].pin, { e: 170, n: 340 })).toBeLessThan(1);
  });

  it('knows the lie anywhere on the course', () => {
    expect(lieAt({ e: 0, n: 0 }, course.features)).toBe('tee');
    expect(lieAt({ e: 0, n: 200 }, course.features)).toBe('fairway');
    expect(lieAt({ e: 0, n: 340 }, course.features)).toBe('green');
    expect(lieAt({ e: -25, n: 310 }, course.features)).toBe('bunker');
    expect(lieAt({ e: 60, n: 200 }, course.features)).toBe('water');
    expect(lieAt({ e: -60, n: 200 }, course.features)).toBe('rough');
  });
});

describe('playing a round', () => {
  const course = parseCourse(FIXTURE, 'Test Links', 'way/1', ORIGIN);
  const drive = { ballSpeedMph: 150, launchAngleDeg: 12, spinRpm: 2700, launchDirectionDeg: 0, spinAxisDeg: 0 };

  it('aims down the hole and moves the ball after a drive', () => {
    const r = new Round(course);
    expect(r.aim.n).toBeGreaterThan(0.99);
    const out = r.play(drive, 'DR');
    expect(out.penalty).toBe(0);
    expect(r.ball.n).toBeGreaterThan(200);
    expect(r.strokesThisHole).toBe(1);
    expect(r.lie).toBe('fairway');
  });

  it('only finished holes count toward the score', () => {
    const r = new Round(course);
    r.play(drive, 'DR');
    expect(r.totals()).toMatchObject({ strokes: 0, par: 0 });
  });

  it('water costs a stroke and you replay from the same spot', () => {
    const r = new Round(course);
    r.aimAt({ e: 70, n: 215 });
    const out = r.play(drive, 'DR');
    expect(out.lie).toBe('water');
    expect(r.strokesThisHole).toBe(2);
    expect(r.ball).toEqual({ e: 0, n: 0 });
  });

  it('a well-paced straight putt drops, and the hole is scored', () => {
    const r = new Round(course);
    r.ball = { e: 3, n: 338 }; // 4 m short of the pin
    r.lie = 'green';
    r.autoAim('PT');
    const speed = msToMph(puttSpeedFor(4.4, 10)); // would roll 40 cm past
    const out = r.play({ ballSpeedMph: speed, launchDirectionDeg: 0 }, 'PT', { airDensity: 1.225, windSpeed: 0, windDirectionDeg: 0, firmness: 0.5, stimp: 10 });
    expect(out.holed).toBe(true);
    expect(r.holed).toBe(true);
    expect(r.totals()).toMatchObject({ strokes: 1, par: 4, toPar: -3 });
  });
});

describe('putting', () => {
  it('a Stimp 10 green rolls a 1.83 m/s ball 10 feet', () => {
    expect(puttDistance(1.83, 10)).toBeCloseTo(3.048, 2);
  });

  const start = { e: 0, n: 0 };
  const aim = { e: 0, n: 1 };
  const pin = { e: 0, n: 3 };
  it('drops at good pace, lips out when too fast, misses when off line or short', () => {
    expect(puttDrops(start, aim, msToMph(puttSpeedFor(3.3, 10)), 0, pin, 10)).toBe(true);
    expect(puttDrops(start, aim, msToMph(puttSpeedFor(9, 10)), 0, pin, 10)).toBe(false);
    expect(puttDrops(start, aim, msToMph(puttSpeedFor(3.3, 10)), 3, pin, 10)).toBe(false);
    expect(puttDrops(start, aim, msToMph(puttSpeedFor(2.5, 10)), 0, pin, 10)).toBe(false);
  });
});

describe('camera putt measurement', () => {
  // Ball 10 px across (→ 4.267 mm per px), rolling "up" the picture at 300 px/s
  const rest = { x: 240, y: 300 };
  const samples = Array.from({ length: 12 }, (_, i) => ({ t: 1000 + i * 33, count: 60, x: 240 + i * 33 * 0.03, y: 300 - i * 33 * 0.3 }));

  it('measures speed from the ball size and direction from the sideways drift', () => {
    const m = measurePutt(samples, rest, 10, 'up')!;
    expect(m).not.toBeNull();
    expect(m.speedMs).toBeCloseTo(Math.hypot(300, 30) * 0.004267, 1);
    expect(m.directionDeg).toBeCloseTo(5.7, 0); // drifting right
    expect(measurePutt(samples, rest, 10, 'up', { flip: true })!.directionDeg).toBeCloseTo(-5.7, 0);
  });

  it('ignores a ball that barely moved', () => {
    const tiny = samples.map((s, i) => ({ ...s, y: 300 - i * 0.5 }));
    expect(measurePutt(tiny, rest, 10, 'up')).toBeNull();
  });

  it('builds a lane in the putt direction', () => {
    const lane = laneZone({ x: 0.4, y: 0.6, w: 0.2, h: 0.2 }, 'up');
    expect(lane.y).toBe(0);
    expect(lane.y + lane.h).toBeCloseTo(0.8);
  });
});

import { practiceCourse } from '../src/course/practiceCourse';

describe('built-in practice course', () => {
  const course = practiceCourse();
  it('has three playable holes with sensible pars and lengths', () => {
    expect(course.holes.map((h) => h.par)).toEqual([4, 3, 5]);
    for (const h of course.holes) {
      expect(lieAt(h.tee, course.features)).toBe('tee');
      expect(lieAt(h.pin, course.features)).toBe('green');
    }
    expect(course.holes[2].lengthM).toBeGreaterThan(430);
  });

  it('hole 2 plays over water', () => {
    const r = new Round(course);
    r.startHole(1);
    const topped = r.play({ ballSpeedMph: 75, launchAngleDeg: 8, spinRpm: 3000, launchDirectionDeg: 0, spinAxisDeg: 0 }, '7i');
    expect(topped.lie).toBe('water');
    expect(r.strokesThisHole).toBe(2);
  });
});

import { plantTrees } from '../src/course/treePlanting';

describe('3D trees on courses', () => {
  it('reads woods, tree rows and single trees from OpenStreetMap', () => {
    const data: OverpassResponse = {
      elements: [
        ...FIXTURE.elements,
        { type: 'way', id: 40, tags: { natural: 'wood' }, geometry: rect(-120, 50, -40, 250) },
        { type: 'way', id: 41, tags: { natural: 'tree_row' }, geometry: [ll({ e: 30, n: 20 }), ll({ e: 30, n: 120 })] },
        { type: 'node', id: 42, tags: { natural: 'tree' }, ...ll({ e: -30, n: 30 }) },
      ],
    };
    const c = parseCourse(data, 'Test', 'way/1', ORIGIN);
    expect(c.trees!.woods).toHaveLength(1);
    expect(c.trees!.rows).toHaveLength(1);
    expect(c.trees!.singles).toHaveLength(1);
  });

  it('plants trees in woods and rows but never on the fairway, green or water', () => {
    const course = parseCourse(FIXTURE, 'Test', 'way/1', ORIGIN);
    // a wood that overlaps the fairway (x −20…20) and the pond (x 25…120)
    const woods = [[{ e: -60, n: 100 }, { e: 60, n: 100 }, { e: 60, n: 200 }, { e: -60, n: 200 }]];
    const trees = plantTrees({ woods, rows: [], singles: [{ e: -40, n: 30 }, { e: 0, n: 340 }] }, course.features, { minE: -500, maxE: 500, minN: -500, maxN: 800 });
    expect(trees.length).toBeGreaterThan(20);
    for (const t of trees) expect(lieAt(t.p, course.features)).toBe('rough');
    // the single tree on the green was skipped, the one in the rough kept
    expect(trees.some((t) => t.p.e === -40 && t.p.n === 30)).toBe(true);
    expect(trees.some((t) => t.p.e === 0 && t.p.n === 340)).toBe(false);
  });

  it('respects the area and the cap', () => {
    const woods = [[{ e: -500, n: -500 }, { e: 500, n: -500 }, { e: 500, n: 500 }, { e: -500, n: 500 }]];
    const trees = plantTrees({ woods, rows: [], singles: [] }, [], { minE: 0, maxE: 100, minN: 0, maxN: 100 }, { max: 50 });
    expect(trees.length).toBe(50);
    for (const t of trees) expect(t.p.e >= 0 && t.p.e <= 100 && t.p.n >= 0 && t.p.n <= 100).toBe(true);
  });

  it('the practice course has woods to plant', () => {
    const c = practiceCourse();
    const t = plantTrees(c.trees!, c.features, { minE: -200, maxE: 500, minN: -50, maxN: 560 });
    expect(t.length).toBeGreaterThan(100);
  });
});
