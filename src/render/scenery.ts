/**
 * The driving range's surroundings: rolling terrain, distant hills, clouds,
 * covered hitting bays, safety nets, scattered range balls, target greens with
 * bunkers, and tree lines. Everything is generated in code (no image files).
 */
import * as THREE from 'three';
import { ydToM } from '../physics/units';
import { flagstick, grassTexture, yardageSign } from './assets';
import { Forest, seededRandom, type TreeSpot } from './trees';

// ---------------- noise ----------------
function hash(x: number, z: number) {
  const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
  return s - Math.floor(s);
}
function vnoise(x: number, z: number) {
  const xi = Math.floor(x), zi = Math.floor(z);
  const xf = x - xi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  const a = hash(xi, zi), b = hash(xi + 1, zi), c = hash(xi, zi + 1), d = hash(xi + 1, zi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x: number, z: number) {
  let f = 0, amp = 0.5, fr = 1;
  for (let i = 0; i < 4; i++) { f += amp * vnoise(x * fr, z * fr); fr *= 2.03; amp *= 0.5; }
  return f;
}
const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/** Ground height of the range: flat fairway corridor, mounds outside, a hill at the back. */
export function rangeHeight(x: number, z: number): number {
  const side = smooth(44, 80, Math.abs(x));
  const back = smooth(-420, -520, z);
  const mounds = (fbm(x * 0.018, z * 0.018) - 0.35) * 9;
  return Math.max(0, side * (2 + mounds) + back * (28 + mounds * 1.5) + side * Math.max(0, Math.abs(x) - 80) * 0.12);
}

function sandTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d')!;
  const img = g.createImageData(256, 256);
  const r = seededRandom(5);
  for (let i = 0; i < 256 * 256; i++) {
    const n = (r() - 0.5) * 26 + (vnoise((i % 256) * 0.08, Math.floor(i / 256) * 0.08) - 0.5) * 30;
    img.data[i * 4] = 226 + n; img.data[i * 4 + 1] = 210 + n; img.data[i * 4 + 2] = 168 + n * 0.8; img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function netTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  g.strokeStyle = 'rgba(30,30,30,0.85)';
  g.lineWidth = 2;
  g.strokeRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

/** Irregular kidney-shaped outline (for greens and bunkers) */
function blobShape(rx: number, rz: number, seed: number, wobble = 0.18): THREE.Shape {
  const r = seededRandom(seed);
  const k1 = r() * 6, k2 = r() * 6;
  const shape = new THREE.Shape();
  const N = 40;
  for (let i = 0; i <= N; i++) {
    const a = (i / N) * Math.PI * 2;
    const w = 1 + wobble * Math.sin(a * 2 + k1) + wobble * 0.5 * Math.sin(a * 3 + k2);
    const x = Math.cos(a) * rx * w, y = Math.sin(a) * rz * w;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  return shape;
}

export interface RangeScenery {
  group: THREE.Group;
  forest: Forest;
  flags: ReturnType<typeof flagstick>[];
  clouds: THREE.Mesh;
}

export function buildRangeScenery(maxAniso: number): RangeScenery {
  const group = new THREE.Group();
  const grass = grassTexture(maxAniso);

  // ---- Terrain ----
  const W = 1500, D = 1700, SX = 150, SZ = 170;
  const geo = new THREE.PlaneGeometry(W, D, SX, SZ);
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, 0, -D / 2 + 150);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const colors: number[] = [];
  const cRough = new THREE.Color(0x93b472), cDeep = new THREE.Color(0x6c8f50), cDry = new THREE.Color(0xb4b67a);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = rangeHeight(x, z);
    pos.setY(i, h - 0.03);
    const n = fbm(x * 0.05, z * 0.05);
    const c = cRough.clone().lerp(cDeep, smooth(0.35, 0.75, n)).lerp(cDry, smooth(0.62, 0.9, fbm(x * 0.011 + 7, z * 0.011)) * 0.45);
    colors.push(c.r, c.g, c.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const roughMap = grass.clone();
  roughMap.repeat.set(W / 5, D / 5);
  const terrain = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: roughMap, vertexColors: true, roughness: 1 }));
  terrain.receiveShadow = true;
  group.add(terrain);

  // ---- Mown fairway: light/dark bands ----
  const bandLen = 12.5;
  for (let i = -1; i < 34; i++) {
    const map = grass.clone();
    map.repeat.set(16, 3);
    const stripe = new THREE.Mesh(
      new THREE.PlaneGeometry(84, bandLen),
      new THREE.MeshStandardMaterial({ map, color: i % 2 ? 0xd8efb8 : 0xa4c985, roughness: 0.92 }),
    );
    stripe.rotation.x = -Math.PI / 2;
    stripe.position.set(0, 0.01, -i * bandLen - bandLen / 2 + 2);
    stripe.receiveShadow = true;
    group.add(stripe);
  }

  // ---- Distant hills on the horizon (hazed by fog) ----
  const hills = new THREE.Group();
  const hillMat = new THREE.MeshStandardMaterial({ color: 0x5f7a5a, roughness: 1, flatShading: true });
  const rh = seededRandom(13);
  for (let i = 0; i < 18; i++) {
    const a = -Math.PI * 0.95 + (i / 17) * Math.PI * 0.9 + (rh() - 0.5) * 0.1;
    const dist = 950 + rh() * 350;
    const hill = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), hillMat);
    hill.scale.set(220 + rh() * 260, 60 + rh() * 110, 160 + rh() * 140);
    hill.position.set(Math.sin(a) * dist, -5, Math.cos(a) * dist - 200);
    hills.add(hill);
  }
  group.add(hills);

  // ---- Covered hitting bays (you stand in the middle one) ----
  const bays = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: 0xa8855c, roughness: 0.8 });
  const steel = new THREE.MeshStandardMaterial({ color: 0x2c3a33, roughness: 0.5, metalness: 0.6 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x8a8f86, roughness: 0.7, side: THREE.DoubleSide });
  const bayW = 4.4;
  const basketBalls: THREE.Vector3[] = [];
  const roof = new THREE.Mesh(new THREE.BoxGeometry(bayW * 15, 0.18, 9.5), roofMat);
  roof.position.set(0, 3.45, 5.4);
  roof.castShadow = true;
  bays.add(roof);
  const fascia = new THREE.Mesh(new THREE.BoxGeometry(bayW * 15, 0.45, 0.12), new THREE.MeshStandardMaterial({ color: 0x1f4d2b, roughness: 0.6 }));
  fascia.position.set(0, 3.3, 0.65);
  bays.add(fascia);
  const matMat = new THREE.MeshStandardMaterial({ color: 0x2f6e3a, roughness: 1 });
  const basketMat = new THREE.MeshStandardMaterial({ color: 0x1b4f9c, roughness: 0.6 });
  const ballMat = new THREE.MeshStandardMaterial({ color: 0xf6f6f0, roughness: 0.45 });
  const ballGeo = new THREE.IcosahedronGeometry(0.021, 1);
  for (let b = -7; b <= 7; b++) {
    const x = b * bayW;
    // posts at each bay edge, along the front
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.14, 3.4, 0.14), steel);
    post.position.set(x - bayW / 2, 1.7, 0.75);
    post.castShadow = true;
    bays.add(post);
    const mat = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.03, 1.5), matMat);
    mat.position.set(x, 0.035, 0);
    mat.receiveShadow = true;
    bays.add(mat);
    // low divider between bays, set back beside the golfer
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.7, 1.6), wood);
    panel.position.set(x - bayW / 2, 0.35, 5.0);
    panel.castShadow = true;
    bays.add(panel);
    // ball basket with a heap of balls
    const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 0.22, 16, 1, true), basketMat);
    basket.position.set(x + 1.15, 0.11, 0.9);
    bays.add(basket);
    for (let k = 0; k < 14; k++) {
      const a = k * 2.4, rr = 0.05 + (k % 5) * 0.025;
      basketBalls.push(new THREE.Vector3(x + 1.15 + Math.cos(a) * rr, 0.2 + (k > 8 ? 0.035 : 0), 0.9 + Math.sin(a) * rr));
    }
  }
  // all basket balls in one draw call
  const bb = new THREE.InstancedMesh(ballGeo, ballMat, basketBalls.length);
  basketBalls.forEach((v, i) => bb.setMatrixAt(i, new THREE.Matrix4().makeTranslation(v.x, v.y, v.z)));
  bb.instanceMatrix.needsUpdate = true;
  bays.add(bb);
  // concrete floor of the bays
  const slab = new THREE.Mesh(new THREE.BoxGeometry(bayW * 15, 0.06, 9.6), new THREE.MeshStandardMaterial({ color: 0x9c9a92, roughness: 0.95 }));
  slab.position.set(0, 0.0, 5.4);
  slab.receiveShadow = true;
  bays.add(slab);
  // back wall behind the bays
  const back = new THREE.Mesh(new THREE.BoxGeometry(bayW * 15, 3.4, 0.2), new THREE.MeshStandardMaterial({ color: 0xbfb7a6, roughness: 0.9 }));
  back.position.set(0, 1.7, 10.1);
  bays.add(back);
  group.add(bays);

  // ---- Safety nets along both sides near the bays ----
  const net = netTexture();
  for (const side of [-1, 1]) {
    const len = 170, h = 18;
    const tex = net.clone();
    tex.repeat.set(len / 0.6, h / 0.6);
    tex.needsUpdate = true;
    const netMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(len, h),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false }),
    );
    netMesh.rotation.y = Math.PI / 2;
    netMesh.position.set(side * 52, h / 2, -len / 2 + 10);
    group.add(netMesh);
    for (let z = 10; z >= -160; z -= 28) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, h + 1, 8), steel);
      pole.position.set(side * 52, (h + 1) / 2, z);
      pole.castShadow = true;
      group.add(pole);
    }
  }

  // ---- Range balls scattered across the landing areas ----
  const rb = seededRandom(21);
  const N = 1600;
  const balls = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.045, 0), new THREE.MeshStandardMaterial({ color: 0xf4f2e6, roughness: 0.5 }), N);
  const m = new THREE.Matrix4();
  for (let i = 0; i < N; i++) {
    const d = 25 + Math.pow(rb(), 0.8) * 230; // metres downrange
    const spread = 4 + d * 0.16;
    const x = (rb() + rb() + rb() - 1.5) * spread;
    m.makeTranslation(x, 0.045, -d);
    balls.setMatrixAt(i, m);
  }
  balls.instanceMatrix.needsUpdate = true;
  balls.frustumCulled = false;
  group.add(balls);

  // ---- Yardage signs ----
  for (let yd = 50; yd <= 350; yd += 50) {
    const z = -ydToM(yd);
    for (const x of [-46, 46]) {
      const sign = yardageSign(String(yd));
      sign.position.set(x, rangeHeight(x, z), z);
      sign.lookAt(0, 0, 30);
      group.add(sign);
    }
  }

  // ---- Target greens: shaped green, fringe, bunkers and a flag ----
  const sand = sandTexture();
  const flags: ReturnType<typeof flagstick>[] = [];
  const targets: [number, number][] = [[75, -12], [125, 10], [175, -6], [225, 14], [275, 0]];
  targets.forEach(([yd, x], i) => {
    const z = -ydToM(yd);
    const size = 8 + yd / 40;
    const fringe = new THREE.Mesh(new THREE.ShapeGeometry(blobShape(size + 2, size * 0.8 + 2, 100 + i, 0.15), 48), new THREE.MeshStandardMaterial({ color: 0x5e9a45, roughness: 0.9 }));
    fringe.rotation.x = -Math.PI / 2;
    fringe.position.set(x, 0.035, z);
    fringe.receiveShadow = true;
    const greenMap = grass.clone();
    greenMap.repeat.set(5, 5);
    const green = new THREE.Mesh(new THREE.ShapeGeometry(blobShape(size, size * 0.8, 100 + i, 0.15), 48), new THREE.MeshStandardMaterial({ map: greenMap, color: 0xd8f5bc, roughness: 0.55 }));
    green.rotation.x = -Math.PI / 2;
    green.position.set(x, 0.045, z);
    green.receiveShadow = true;
    group.add(fringe, green);
    // two bunkers hugging the green
    for (const [ox, oz, s] of [[size + 3.5, -size * 0.3, 1], [-(size + 2.5), size * 0.4, 0.8]] as const) {
      const b = new THREE.Mesh(new THREE.ShapeGeometry(blobShape(3.8 * s, 2.4 * s, 300 + i * 7 + s * 3, 0.25), 32), new THREE.MeshStandardMaterial({ map: sand, roughness: 1 }));
      b.rotation.x = -Math.PI / 2;
      b.position.set(x + ox, 0.05, z + oz);
      b.receiveShadow = true;
      group.add(b);
    }
    const flag = flagstick(3);
    flag.position.set(x, 0.05, z);
    flags.push(flag);
    group.add(flag);
  });

  // ---- Trees: down both sides, and across the hill at the back ----
  const rt = seededRandom(7);
  const spots: TreeSpot[] = [];
  const add = (x: number, z: number, hMin: number, hMax: number) =>
    spots.push({ x, z, y: rangeHeight(x, z), height: hMin + rt() * (hMax - hMin), pick: rt(), rot: rt() * Math.PI * 2 });
  for (let z = -30; z > -470; z -= 7 + rt() * 7) {
    for (const side of [-1, 1]) {
      add(side * (64 + rt() * 22), z + rt() * 4, 9, 17);
      if (rt() < 0.6) add(side * (90 + rt() * 40), z + rt() * 6, 10, 19);
    }
  }
  for (let x = -150; x <= 150; x += 6 + rt() * 7) {
    add(x, -470 - rt() * 30, 11, 20);
    if (rt() < 0.7) add(x + rt() * 5, -505 - rt() * 40, 12, 22);
  }
  // shuffle so lower graphics settings thin the forest evenly
  for (let i = spots.length - 1; i > 0; i--) {
    const j = Math.floor(rt() * (i + 1));
    [spots[i], spots[j]] = [spots[j], spots[i]];
  }
  const forest = new Forest(spots);
  group.add(forest);

  // ---- Clouds: a slowly drifting layer on a dome above the sky ----
  const clouds = cloudDome();
  group.add(clouds);

  return { group, forest, flags, clouds };
}

/** Soft procedural cumulus clouds painted on a large dome; call `material.uniforms.uTime` to drift. */
export function cloudDome(): THREE.Mesh {
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.BackSide,
    fog: false,
    uniforms: { uTime: { value: 0 } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      uniform float uTime; varying vec3 vDir;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float s=0.0, a=0.5; for(int i=0;i<5;i++){ s+=a*n(p); p*=2.02; a*=0.5; } return s; }
      void main(){
        if (vDir.y < 0.0) discard;
        // project onto a cloud plane so clouds flatten toward the horizon
        vec2 p = vDir.xz / (vDir.y + 0.12) * 1.4 + vec2(uTime * 0.004, uTime * 0.0015);
        float c = fbm(p);
        float cover = smoothstep(0.52, 0.78, c);
        float shade = mix(0.78, 1.0, smoothstep(0.5, 0.9, fbm(p * 1.7 + 3.0)));
        float horizon = smoothstep(0.0, 0.18, vDir.y);
        gl_FragColor = vec4(vec3(shade) * vec3(1.0, 0.98, 0.95), cover * 0.85 * horizon);
      }`,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(4500, 48, 24), mat);
  dome.renderOrder = -1;
  dome.frustumCulled = false;
  return dome;
}
