/**
 * Procedural textures and models for the range. Everything is generated in code
 * (no image files), so the app stays a single self-contained page.
 */
import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

function canvas(w: number, h: number) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return { c, g: c.getContext('2d')! };
}

/** Seeded random so textures look the same on every load */
function rng(seed: number) {
  return () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
}

/** Tileable grass: a mid-green base with thousands of short blade strokes. */
export function grassTexture(maxAniso: number): THREE.CanvasTexture {
  const { c, g } = canvas(512, 512);
  const r = rng(11);
  g.fillStyle = '#4a7f3c';
  g.fillRect(0, 0, 512, 512);
  // soft blotches for large-scale variation
  for (let i = 0; i < 60; i++) {
    const x = r() * 512, y = r() * 512, rad = 20 + r() * 60;
    const grd = g.createRadialGradient(x, y, 0, x, y, rad);
    const light = r() > 0.5;
    grd.addColorStop(0, light ? 'rgba(120,170,80,0.18)' : 'rgba(30,70,30,0.18)');
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd;
    for (const dx of [-512, 0, 512]) for (const dy of [-512, 0, 512]) {
      g.save(); g.translate(dx, dy); g.fillRect(x - rad, y - rad, rad * 2, rad * 2); g.restore();
    }
  }
  // blades
  g.lineCap = 'round';
  for (let i = 0; i < 9000; i++) {
    const x = r() * 512, y = r() * 512;
    const len = 2 + r() * 5;
    const a = -Math.PI / 2 + (r() - 0.5) * 0.9;
    const l = 30 + r() * 30;
    g.strokeStyle = `hsl(${95 + r() * 25}, ${35 + r() * 25}%, ${l}%)`;
    g.lineWidth = 0.6 + r() * 0.8;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = maxAniso;
  return t;
}

/** Real golf ball diameter: 42.67 mm */
export const GOLF_BALL_RADIUS = 0.042672 / 2;

/**
 * Dimple centres spread evenly over the sphere (Fibonacci spiral), as unit vectors.
 * 352 dimples, close to a typical tour ball.
 */
function dimpleCentres(count = 352): THREE.Vector3[] {
  const out: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - ((i + 0.5) / count) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = i * golden;
    out.push(new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r));
  }
  return out;
}

/**
 * Golf ball with real, modelled dimples: each one is a shallow spherical bowl
 * pressed into the surface, so light and reflections pool in them like on a real
 * ball. Built once and shared.
 */
let ballGeometry: THREE.BufferGeometry | null = null;
export function dimpledBallGeometry(radius = GOLF_BALL_RADIUS): THREE.BufferGeometry {
  if (ballGeometry) return ballGeometry;
  // Fine, evenly spaced mesh (~131k triangles) so the bowls are smooth
  let geo: THREE.BufferGeometry = new THREE.IcosahedronGeometry(1, 80);
  geo.deleteAttribute('normal');
  geo.deleteAttribute('uv');
  geo = mergeVertices(geo);
  const centres = dimpleCentres();
  const dimpleR = 0.079; // dimple radius, as an angle in radians (≈ 3.4 mm across), leaving thin lands between
  const depth = 0.021; // ≈ 0.45 mm: a little deeper than real so the dimples read on screen
  const cosLimit = Math.cos(dimpleR);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    let best = -1;
    for (const c of centres) {
      const d = v.dot(c);
      if (d > best) best = d;
    }
    let r = 1;
    if (best > cosLimit) {
      const a = Math.acos(Math.min(1, best)) / dimpleR; // 0 at the centre, 1 at the rim
      r -= depth * (1 - a * a); // spherical-cap bowl
    }
    v.multiplyScalar(r * radius);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  ballGeometry = geo;
  return geo;
}

export function golfBall(radius = GOLF_BALL_RADIUS): THREE.Mesh {
  // Glossy urethane cover: white base under a clear coat that mirrors the sky
  const mat = new THREE.MeshPhysicalMaterial({
    color: 0xf3f3f1,
    roughness: 0.28,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
    envMapIntensity: 1.1,
  });
  const m = new THREE.Mesh(dimpledBallGeometry(radius), mat);
  m.castShadow = true;
  return m;
}

/** A tree line: instanced trunks and layered conifer/broadleaf canopies with varied colour and size. */
export function treeLine(positions: { x: number; z: number; s: number }[]): THREE.Group {
  const group = new THREE.Group();
  const r = rng(5);
  const trunkGeo = new THREE.CylinderGeometry(0.25, 0.4, 1, 6);
  trunkGeo.translate(0, 0.5, 0);
  const coneGeo = new THREE.ConeGeometry(1, 1, 7);
  coneGeo.translate(0, 0.5, 0);
  const blobGeo = new THREE.IcosahedronGeometry(1, 1);

  const trunks = new THREE.InstancedMesh(trunkGeo, new THREE.MeshStandardMaterial({ color: 0x5a4330, roughness: 1 }), positions.length);
  const cones = new THREE.InstancedMesh(coneGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, flatShading: true }), positions.length * 2);
  const blobs = new THREE.InstancedMesh(blobGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, flatShading: true }), positions.length * 3);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const col = new THREE.Color();
  let ci = 0, bi = 0;
  positions.forEach((p, i) => {
    const h = 9 * p.s;
    m.compose(new THREE.Vector3(p.x, 0, p.z), q, new THREE.Vector3(p.s, h * 0.35, p.s));
    trunks.setMatrixAt(i, m);
    if (r() < 0.55) {
      // conifer: two stacked cones
      for (let k = 0; k < 2; k++) {
        const w = (3.2 - k * 1.1) * p.s;
        m.compose(new THREE.Vector3(p.x, h * (0.22 + k * 0.28), p.z), q, new THREE.Vector3(w, h * (0.62 - k * 0.12), w));
        cones.setMatrixAt(ci, m);
        cones.setColorAt(ci++, col.setHSL(0.3 + r() * 0.05, 0.38 + r() * 0.15, 0.18 + r() * 0.08));
      }
    } else {
      // broadleaf: three overlapping blobs
      for (let k = 0; k < 3; k++) {
        const w = (2.4 + r() * 1.2) * p.s;
        const off = new THREE.Vector3((r() - 0.5) * 2.4 * p.s, h * (0.55 + r() * 0.25), (r() - 0.5) * 2.4 * p.s);
        m.compose(new THREE.Vector3(p.x + off.x, off.y, p.z + off.z), q, new THREE.Vector3(w, w * 0.85, w));
        blobs.setMatrixAt(bi, m);
        blobs.setColorAt(bi++, col.setHSL(0.22 + r() * 0.08, 0.35 + r() * 0.2, 0.22 + r() * 0.1));
      }
    }
  });
  cones.count = ci;
  blobs.count = bi;
  for (const im of [trunks, cones, blobs]) {
    im.castShadow = true;
    im.instanceMatrix.needsUpdate = true;
    if (im.instanceColor) im.instanceColor.needsUpdate = true;
  }
  group.add(trunks, cones, blobs);
  return group;
}

/** A yardage sign on two posts, facing the golfer. */
export function yardageSign(text: string): THREE.Group {
  const { c, g } = canvas(256, 128);
  g.fillStyle = '#f6f3ea';
  g.fillRect(0, 0, 256, 128);
  g.fillStyle = '#1f4d2b';
  g.fillRect(8, 8, 240, 112);
  g.fillStyle = '#f6f3ea';
  g.font = 'bold 76px "Arial Narrow", Arial, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(text, 128, 70);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const board = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.1, 0.12), [
    ...Array(4).fill(new THREE.MeshStandardMaterial({ color: 0xf6f3ea })),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7 }),
    new THREE.MeshStandardMaterial({ color: 0xf6f3ea }),
  ]);
  board.position.y = 2.6;
  board.castShadow = true;
  const postMat = new THREE.MeshStandardMaterial({ color: 0x6b5138, roughness: 1 });
  const g2 = new THREE.Group();
  for (const x of [-1.5, 1.5]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.15, 2.6, 0.15), postMat);
    post.position.set(x, 1.3, -0.1);
    post.castShadow = true;
    g2.add(post);
  }
  g2.add(board);
  return g2;
}

/** A flagstick whose cloth waves (call `wave(t)` each frame). */
export function flagstick(height = 2.4): THREE.Group & { wave: (t: number) => void } {
  const g = new THREE.Group() as THREE.Group & { wave: (t: number) => void };
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, height, 8), new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.4 }));
  pole.position.y = height / 2;
  pole.castShadow = true;
  const clothGeo = new THREE.PlaneGeometry(0.9, 0.6, 10, 4);
  clothGeo.translate(0.45, 0, 0);
  const base = Float32Array.from(clothGeo.attributes.position.array as Float32Array);
  const cloth = new THREE.Mesh(clothGeo, new THREE.MeshStandardMaterial({ color: 0xd7263d, side: THREE.DoubleSide, roughness: 0.8 }));
  cloth.position.y = height - 0.32;
  cloth.castShadow = true;
  const cup = new THREE.Mesh(new THREE.CircleGeometry(0.11, 20), new THREE.MeshBasicMaterial({ color: 0x0d0d0d }));
  cup.rotation.x = -Math.PI / 2;
  cup.position.y = 0.012;
  g.add(pole, cloth, cup);
  const phase = Math.random() * 10;
  g.wave = (t: number) => {
    const pos = clothGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = base[i * 3];
      pos.setZ(i, Math.sin(x * 6 - (t + phase) * 4) * 0.08 * x);
    }
    pos.needsUpdate = true;
    clothGeo.computeVertexNormals();
  };
  return g;
}
