/**
 * Field of individual grass blades around a point (the tee, or the ball on a
 * course). One instanced mesh; blades sway in the wind and fade out with
 * distance so there's no visible edge. `setDensity` trims it for lower settings.
 */
import * as THREE from 'three';
import { seededRandom } from './trees';

export interface GrassOptions {
  /** Half-size of the square patch (m) */
  radius: number;
  count: number;
  /** Blade height range (m) */
  minHeight: number;
  maxHeight: number;
  /** Tint at the base and tip */
  base: THREE.ColorRepresentation;
  tip: THREE.ColorRepresentation;
  /** Optional: return false to leave a spot bare (e.g. the hitting mat) */
  keep?: (x: number, z: number) => boolean;
}

function bladeGeometry(): THREE.BufferGeometry {
  // A slightly curved, tapered blade: 4 segments, 8 triangles
  const segs = 4;
  const pos: number[] = [];
  const uv: number[] = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const w = 0.012 * (1 - t * 0.92);
    const bend = t * t * 0.18;
    pos.push(-w, t, bend, w, t, bend);
    uv.push(0, t, 1, t);
  }
  const idx: number[] = [];
  for (let i = 0; i < segs; i++) {
    const a = i * 2;
    idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

export class GrassField extends THREE.InstancedMesh {
  private total: number;
  private uniforms = { uTime: { value: 0 }, uRadius: { value: 1 } };

  constructor(o: GrassOptions) {
    const mat = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, roughness: 0.85, vertexColors: false });
    super(bladeGeometry(), mat, o.count);
    this.total = o.count;
    this.uniforms.uRadius.value = o.radius;
    const base = new THREE.Color(o.base);
    const tip = new THREE.Color(o.tip);
    const u = this.uniforms;
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, u, { uBase: { value: base }, uTip: { value: tip } });
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', `#include <common>
          uniform float uTime; uniform float uRadius;
          varying float vH; varying float vShade;`)
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          vH = uv.y;
          vec4 wp = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          // Wind: gusts travel across the field; tips move most
          float gust = sin(uTime * 1.7 + wp.x * 0.35 + wp.z * 0.21) * 0.5 + sin(uTime * 3.1 + wp.x * 1.3) * 0.15;
          transformed.z += gust * 0.22 * uv.y * uv.y;
          transformed.x += gust * 0.08 * uv.y * uv.y;
          // Fade out toward the patch edge by shrinking blades
          float d = length(wp.xz) / uRadius; // blade offset from the patch centre
          transformed.y *= 1.0 - smoothstep(0.65, 1.0, d);
          vShade = fract(sin(dot(wp.xz, vec2(12.9898, 78.233))) * 43758.5453);`);
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', `#include <common>
          uniform vec3 uBase; uniform vec3 uTip; varying float vH; varying float vShade;`)
        .replace('vec4 diffuseColor = vec4( diffuse, opacity );', `
          vec3 g = mix(uBase, uTip, vH) * (0.82 + 0.36 * vShade);
          vec4 diffuseColor = vec4(g, opacity);`);
    };
    const rnd = seededRandom(97);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    let n = 0;
    let guard = 0;
    while (n < o.count && guard++ < o.count * 4) {
      const x = (rnd() * 2 - 1) * o.radius;
      const z = (rnd() * 2 - 1) * o.radius;
      if (Math.hypot(x, z) > o.radius) continue;
      if (o.keep && !o.keep(x, z)) continue;
      const h = o.minHeight + rnd() * (o.maxHeight - o.minHeight);
      q.setFromAxisAngle(up, rnd() * Math.PI * 2);
      m.compose(new THREE.Vector3(x, 0, z), q, new THREE.Vector3(1 + rnd() * 0.6, h, 1));
      this.setMatrixAt(n++, m);
    }
    this.count = n;
    this.total = n;
    this.instanceMatrix.needsUpdate = true;
    this.frustumCulled = false;
    this.receiveShadow = true;
  }

  /** Centre the field on a world point (local blade positions are relative). */
  centreOn(x: number, z: number) {
    this.position.set(x, 0.005, z);
  }

  update(t: number) {
    this.uniforms.uTime.value = t;
  }

  setDensity(f: number) {
    this.count = Math.round(this.total * f);
    this.visible = this.count > 0;
  }
}
