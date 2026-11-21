/**
 * A small built-in course that needs no internet: three holes with fairways,
 * greens, bunkers and water, so course play can always be tried.
 * (It's a made-up layout, not a real course.)
 */
import { dist, norm, rightOf, sub, add, scale, type EN } from './geo';
import type { Course, Feature, Hole } from './osm';

function circle(c: EN, r: number, n = 28): EN[] {
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return { e: c.e + Math.cos(a) * r, n: c.n + Math.sin(a) * r * 0.85 };
  });
}

function rect(e0: number, n0: number, e1: number, n1: number): EN[] {
  return [{ e: e0, n: n0 }, { e: e1, n: n0 }, { e: e1, n: n1 }, { e: e0, n: n1 }];
}

/** A strip of the given half-width along a polyline (fairway shape) */
function strip(path: EN[], halfWidth: number): EN[] {
  const left: EN[] = [];
  const right: EN[] = [];
  path.forEach((p, i) => {
    const a = path[Math.max(0, i - 1)];
    const b = path[Math.min(path.length - 1, i + 1)];
    const r = rightOf(norm(sub(b, a)));
    const w = halfWidth * (0.85 + 0.15 * Math.sin(i * 1.7));
    right.push(add(p, scale(r, w)));
    left.push(add(p, scale(r, -w)));
  });
  return [...right, ...left.reverse()];
}

function hole(number: number, par: number, path: EN[]): Hole {
  let lengthM = 0;
  for (let i = 1; i < path.length; i++) lengthM += dist(path[i - 1], path[i]);
  return { number, par, path, tee: path[0], pin: path[path.length - 1], lengthM };
}

export function practiceCourse(): Course {
  // Hole 1: par 4, gentle dogleg left, bunker guarding the green
  const h1 = hole(1, 4, [{ e: 0, n: 0 }, { e: 0, n: 215 }, { e: -55, n: 340 }]);
  // Hole 2: par 3 over a pond
  const h2 = hole(2, 3, [{ e: 160, n: 20 }, { e: 175, n: 165 }]);
  // Hole 3: par 5, S-bend, creek on the right of the landing area
  const h3 = hole(3, 5, [{ e: 320, n: 0 }, { e: 340, n: 230 }, { e: 300, n: 380 }, { e: 315, n: 470 }]);

  const features: Feature[] = [
    // tees
    { kind: 'tee', poly: rect(-6, -6, 6, 6) },
    { kind: 'tee', poly: rect(154, 14, 166, 26) },
    { kind: 'tee', poly: rect(314, -6, 326, 6) },
    // fairways (stop short of the green so there's a little rough before it)
    { kind: 'fairway', poly: strip([{ e: 0, n: 45 }, { e: 0, n: 150 }, { e: 0, n: 215 }, { e: -40, n: 300 }], 17) },
    { kind: 'fairway', poly: strip([{ e: 335, n: 60 }, { e: 340, n: 230 }, { e: 305, n: 370 }, { e: 312, n: 440 }], 18) },
    // greens
    { kind: 'green', poly: circle(h1.pin, 15) },
    { kind: 'green', poly: circle(h2.pin, 14) },
    { kind: 'green', poly: circle(h3.pin, 16) },
    // bunkers
    { kind: 'bunker', poly: circle({ e: -32, n: 330 }, 6) },
    { kind: 'bunker', poly: circle({ e: 22, n: 205 }, 7) },
    { kind: 'bunker', poly: circle({ e: 158, n: 172 }, 5) },
    { kind: 'bunker', poly: circle({ e: 292, n: 455 }, 6) },
    { kind: 'bunker', poly: circle({ e: 318, n: 245 }, 7) },
    // water
    { kind: 'water', poly: circle({ e: 168, n: 95 }, 32, 36) },
    { kind: 'water', poly: [{ e: 372, n: 150 }, { e: 395, n: 160 }, { e: 400, n: 260 }, { e: 380, n: 320 }, { e: 362, n: 300 }, { e: 370, n: 220 }] },
  ];

  // Woods framing each hole, and a tree row along hole 1's right side
  const trees = {
    woods: [
      rect(-120, -20, -45, 260), // left of hole 1
      rect(40, 40, 95, 300), // between holes 1 and 2
      rect(-140, 260, -90, 420), // behind hole 1's green
      rect(205, -10, 270, 220), // between holes 2 and 3
      rect(370, -20, 440, 140), // right of hole 3's tee shot
      rect(220, 300, 270, 520), // left of hole 3's second shot
      rect(350, 340, 420, 520), // right of hole 3's green
    ],
    rows: [[{ e: 30, n: 40 }, { e: 34, n: 230 }]],
    singles: [{ e: 130, n: 60 }, { e: 196, n: 130 }, { e: -20, n: 360 }],
  };

  return {
    id: 'practice',
    name: 'Practice course (built in)',
    origin: { lat: 0, lon: 0 },
    holes: [h1, h2, h3],
    features,
    trees,
  };
}
