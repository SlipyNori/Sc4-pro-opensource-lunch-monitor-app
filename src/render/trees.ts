/**
 * Realistic trees from ez-tree (procedural branches, bark and leaf textures,
 * wind sway; MIT licence). A handful of variants are grown once, then planted
 * many times with instancing, so a whole tree line costs a few draw calls.
 */
import * as THREE from 'three';
import { Tree } from '@dgreenheck/ez-tree';

export interface TreeSpot {
  x: number;
  /** Ground height at the spot (default 0) */
  y?: number;
  z: number;
  /** Target height in metres */
  height: number;
  /** 0–1, picks the variant deterministically */
  pick: number;
  rot: number;
}

interface Variant {
  tree: Tree;
  /** Native height of the generated tree (ez-tree units) */
  height: number;
  /** Suits a pine-type spot (rows of conifers) or broadleaf */
  conifer: boolean;
}

const PRESETS: { preset: string; seed: number; conifer: boolean; leafScale: number }[] = [
  { preset: 'Oak Medium', seed: 11, conifer: false, leafScale: 1 },
  { preset: 'Oak Large', seed: 23, conifer: false, leafScale: 1 },
  { preset: 'Ash Medium', seed: 31, conifer: false, leafScale: 1 },
  { preset: 'Pine Medium', seed: 59, conifer: true, leafScale: 1 },
  { preset: 'Pine Large', seed: 67, conifer: true, leafScale: 1 },
];

let variants: Variant[] | null = null;

/**
 * ez-tree's leaf shader replaces three.js's vertex projection to add wind, which
 * drops the per-instance transform, so instanced leaves would float at the
 * original size. Re-apply instanceMatrix, and scale the wind for trees in metres.
 */
function patchLeavesForInstancing(mat: THREE.Material) {
  const original = mat.onBeforeCompile.bind(mat);
  mat.onBeforeCompile = (shader, renderer) => {
    original(shader, renderer);
    shader.vertexShader = shader.vertexShader.replace(
      'vec4 mvPosition = vec4(transformed, 1.0);',
      `vec4 mvPosition = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          mvPosition = instanceMatrix * mvPosition;
        #endif`,
    );
    const u = shader.uniforms as Record<string, THREE.IUniform>;
    (u.uWindStrength.value as THREE.Vector3).set(0.12, 0, 0.12);
    u.uWindScale.value = 14;
  };
  mat.customProgramCacheKey = () => 'ez-tree-leaves-instanced';
  // Far away, mipmapped leaf textures average their cut-out alpha below the
  // alpha-test threshold and whole canopies vanish. Alpha-to-coverage (with
  // MSAA) keeps partial leaves, and a lower threshold keeps distant foliage.
  const m = mat as THREE.MeshPhongMaterial;
  m.alphaToCoverage = true;
  m.alphaTest = 0.12;
  // Leaves let sunlight through: a soft green self-light keeps backlit canopies
  // from turning black (this material can't use the sky's image lighting)
  m.emissive = new THREE.Color(0x3a5a22);
  m.emissiveIntensity = 0.55;
  m.needsUpdate = true;
}

/** Grow the variants once (≈50 ms each). */
function getVariants(): Variant[] {
  if (variants) return variants;
  variants = PRESETS.map(({ preset, seed, conifer }) => {
    const tree = new Tree();
    tree.loadPreset(preset);
    tree.options.seed = seed;
    // Trees are seen from tens of metres away: fewer, larger leaf cards keep the
    // same look at a fraction of the cost
    tree.options.leaves.count = Math.max(4, Math.round(tree.options.leaves.count * 0.55));
    tree.options.leaves.size *= 1.25;
    // Coarser bark tubes: fewer sides and sections per branch level
    const br = tree.options.branch as unknown as { segments: Record<string, number>; sections: Record<string, number> };
    for (const k of Object.keys(br.segments)) br.segments[k] = Math.max(3, Math.round(br.segments[k] * 0.6));
    for (const k of Object.keys(br.sections)) br.sections[k] = Math.max(2, Math.round(br.sections[k] * 0.65));
    tree.generate();
    const box = new THREE.Box3().setFromObject(tree);
    for (const m of [tree.branchesMesh, tree.leavesMesh]) {
      const mats = Array.isArray(m.material) ? m.material : [m.material];
      for (const mat of mats) (mat as THREE.MeshStandardMaterial).fog = true;
    }
    patchLeavesForInstancing(tree.leavesMesh.material as THREE.Material);
    // Bark can't use the sky's image lighting either; a little warmth stops black trunks
    const bark = tree.branchesMesh.material as THREE.MeshPhongMaterial;
    bark.emissive = new THREE.Color(0x3b2d20);
    bark.emissiveIntensity = 0.5;
    return { tree, height: box.max.y - box.min.y, conifer };
  });
  return variants;
}

/**
 * A planted group of trees. `setDensity(f)` shows only a fraction (0–1) of them,
 * for lower graphics settings, without rebuilding anything.
 */
export class Forest extends THREE.Group {
  private meshes: { mesh: THREE.InstancedMesh; total: number }[] = [];

  constructor(spots: TreeSpot[], opts: { castShadow?: boolean; conifersOnly?: boolean } = {}) {
    super();
    const vs = getVariants();
    const pool = opts.conifersOnly ? vs.filter((v) => v.conifer) : vs;
    // Bucket spots by variant
    const buckets = pool.map(() => [] as TreeSpot[]);
    for (const s of spots) buckets[Math.min(pool.length - 1, Math.floor(s.pick * pool.length))].push(s);

    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    pool.forEach((v, i) => {
      const list = buckets[i];
      if (!list.length) return;
      for (const src of [v.tree.branchesMesh, v.tree.leavesMesh]) {
        const mesh = new THREE.InstancedMesh(src.geometry, src.material, list.length);
        list.forEach((s, k) => {
          const sc = s.height / v.height;
          q.setFromAxisAngle(up, s.rot);
          m.compose(new THREE.Vector3(s.x, (s.y ?? 0) - 0.3, s.z), q, new THREE.Vector3(sc, sc, sc));
          mesh.setMatrixAt(k, m);
        });
        mesh.instanceMatrix.needsUpdate = true;
        mesh.castShadow = !!opts.castShadow;
        mesh.receiveShadow = false;
        mesh.frustumCulled = false; // instances span a wide area
        this.meshes.push({ mesh, total: list.length });
        this.add(mesh);
      }
    });
  }

  /** Show a fraction of the trees (instances were planted in random order). */
  setDensity(f: number) {
    for (const { mesh, total } of this.meshes) mesh.count = Math.max(0, Math.round(total * f));
  }

  dispose() {
    for (const { mesh } of this.meshes) mesh.dispose();
  }
}

/** Animate wind sway for every planted tree (shared materials). */
export function updateTrees(t: number) {
  if (!variants) return;
  for (const v of variants) v.tree.update(t);
}

/** Deterministic random for repeatable layouts */
export function seededRandom(seed: number) {
  return () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
}
