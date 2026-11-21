import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import type { FlightResult, TrajectoryPoint } from '../physics/ballFlight';
import { flagstick, golfBall, grassTexture, GOLF_BALL_RADIUS } from './assets';
import { buildRangeScenery } from './scenery';
import { GrassField } from './grass';
import { updateTrees, type Forest } from './trees';

export type CameraMode = 'behind' | 'follow' | 'top';
/** high: shadows + depth of field · medium: shadows · low: neither (for slower computers) */
export type Quality = 'high' | 'medium' | 'low';

/** Course coordinates in metres (east, north) */
export interface EN {
  e: number;
  n: number;
}

/** Course (east, height, north) → three.js (x = east, y = up, z = −north) */
const enToThree = (e: number, y: number, n: number) => new THREE.Vector3(e, y, -n);

/** Real ball radius (42.67 mm diameter) */
const BALL_R = GOLF_BALL_RADIUS;
/** Top of the hitting mat on the range (the ball sits on it at the tee) */
const MAT_TOP = 0.05;
const TRACER_COLOR = 0xffc93c;

interface Tracer {
  line: Line2;
  marker: THREE.Mesh;
}

/**
 * 3D driving range and course view.
 * Late-afternoon light: physical sky, filmic tone mapping, soft sun shadows that
 * follow the ball, and an optional depth-of-field pass focused on the ball.
 */
export class RangeScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private composer: EffectComposer;
  private bokeh: BokehPass;
  private sun: THREE.DirectionalLight;
  private sunDir = new THREE.Vector3();
  private ball: THREE.Mesh;
  private ballGlow: THREE.Sprite;
  private tracers: Tracer[] = [];
  private anim: { pts: TrajectoryPoint[]; positions: number[]; start: number; duration: number; line: Line2; marker: THREE.Mesh } | null = null;
  private cameraMode: CameraMode = 'behind';
  private quality: Quality = 'high';
  /** Range decorations (hidden on a course) */
  private rangeGroup = new THREE.Group();
  /** Course: satellite ground and flag */
  private courseGroup = new THREE.Group();
  private satellite: THREE.Mesh | null = null;
  private satelliteShadow: THREE.Mesh | null = null;
  private flag: ReturnType<typeof flagstick>;
  private rangeFlags: ReturnType<typeof flagstick>[] = [];
  private forest: Forest;
  private courseForest: Forest | null = null;
  private clouds: THREE.ShaderMaterial;
  private rangeGrass: GrassField;
  private courseGrass: GrassField;
  private mode: 'range' | 'course' = 'range';
  /** Where the next shot starts and which way it's aimed (course metres) */
  private origin: EN = { e: 0, n: 0 };
  private aim: EN = { e: 0, n: 1 };
  private target: EN | null = null;
  private onAnimDone: (() => void) | null = null;
  private disposed = false;
  private resizeObserver: ResizeObserver;
  private clock = new THREE.Clock();
  private maxAniso: number;
  /** Playback speed multiplier for the ball animation */
  speed = 1;

  constructor(private container: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.7;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);
    this.maxAniso = this.renderer.capabilities.getMaxAnisotropy();

    this.camera = new THREE.PerspectiveCamera(50, 1, 0.3, 12000);

    // ---- Sky, sun and atmosphere (late afternoon, sun behind-left of the golfer) ----
    const sky = new Sky();
    sky.scale.setScalar(10000);
    const u = sky.material.uniforms;
    u.turbidity.value = 4;
    u.rayleigh.value = 1.4;
    u.mieCoefficient.value = 0.004;
    u.mieDirectionalG.value = 0.82;
    this.sunDir.setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 24), THREE.MathUtils.degToRad(215));
    u.sunPosition.value.copy(this.sunDir);
    this.scene.add(sky);

    // Image-based lighting from the sky, so the ball's clear coat reflects it
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const envScene = new THREE.Scene();
    envScene.add(sky.clone());
    this.scene.environment = pmrem.fromScene(envScene, 0.04).texture;
    this.scene.environmentIntensity = 0.55;
    pmrem.dispose();

    this.scene.fog = new THREE.Fog(0xc9d9e2, 320, 1700);

    this.scene.add(new THREE.HemisphereLight(0xcfe3ff, 0x40603a, 0.55));
    this.sun = new THREE.DirectionalLight(0xffe7c4, 2.6);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    // Tight around the ball so even a real-size ball casts a crisp shadow
    sc.left = -22; sc.right = 22; sc.top = 22; sc.bottom = -22; sc.near = 1; sc.far = 400;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.02;
    this.scene.add(this.sun, this.sun.target);

    this.scene.add(this.rangeGroup, this.courseGroup);
    const scenery = buildRangeScenery(this.maxAniso);
    this.rangeGroup.add(scenery.group);
    this.rangeFlags = scenery.flags;
    this.forest = scenery.forest;
    this.clouds = scenery.clouds.material as THREE.ShaderMaterial;
    // Clouds belong to the sky, so they stay visible on courses too
    this.rangeGroup.remove(scenery.clouds);
    this.scene.add(scenery.clouds);

    // Real grass blades: around the tee on the range, around the ball on a course
    this.rangeGrass = new GrassField({
      radius: 32, count: 70000, minHeight: 0.035, maxHeight: 0.085, base: 0x355f22, tip: 0x9cc76a,
      keep: (x, z) => z < 0.2 && !(Math.abs(x) < 0.9 && Math.abs(z) < 0.9),
    });
    this.rangeGrass.centreOn(0, -14);
    this.rangeGroup.add(this.rangeGrass);
    // Fairway-height grass (2–4.5 cm) so a real-size ball still sits visibly on top
    this.courseGrass = new GrassField({ radius: 26, count: 50000, minHeight: 0.02, maxHeight: 0.045, base: 0x2f5a1f, tip: 0x93bf62 });
    this.courseGroup.add(this.courseGrass);

    // ---- Course mode ground ----
    this.flag = flagstick(2.4);
    const beacon = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 30, 12, 1, true),
      new THREE.MeshBasicMaterial({ color: TRACER_COLOR, transparent: true, opacity: 0.22, depthWrite: false, fog: false }),
    );
    beacon.position.y = 15;
    this.flag.add(beacon);
    const base = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000), this.grassMaterial(0xc4e0a4, 1500));
    base.rotation.x = -Math.PI / 2;
    base.position.y = -0.6; // well below the satellite photo, so distant ground never wins the depth test
    base.receiveShadow = true;
    this.courseGroup.add(base, this.flag);
    this.courseGroup.visible = false;

    // ---- Ball ----
    this.ball = golfBall(BALL_R);
    this.ball.position.set(0, MAT_TOP + BALL_R, 0);
    this.scene.add(this.ball);
    // A soft glow so the ball stays visible far away in flight
    this.ballGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xffffff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    this.ballGlow.visible = false;
    this.scene.add(this.ballGlow);

    // ---- Post-processing: depth of field focused on the ball ----
    const rt = new THREE.WebGLRenderTarget(1, 1, { samples: 4, type: THREE.HalfFloatType });
    this.composer = new EffectComposer(this.renderer, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bokeh = new BokehPass(this.scene, this.camera, { focus: 10, aperture: 0.00012, maxblur: 0.006 });
    this.composer.addPass(this.bokeh);
    this.composer.addPass(new OutputPass());

    // Developer aid: open the app with ?debug to inspect the scene from the console
    if (location.search.includes('debug')) Object.assign(window, { __opensc4: { scene: this.scene, renderer: this.renderer, camera: this.camera, view: this } });

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    this.resize();
    this.setCameraMode('behind');
    this.loop();
  }

  private grassMaterial(color: number, repeat: number) {
    const map = grassTexture(this.maxAniso);
    map.repeat.set(repeat, repeat);
    return new THREE.MeshStandardMaterial({ map, color, roughness: 0.95 });
  }

  // ---------------- Quality ----------------

  setQuality(q: Quality) {
    this.quality = q;
    const grass = q === 'high' ? 1 : q === 'medium' ? 0.35 : 0;
    this.rangeGrass.setDensity(grass);
    this.courseGrass.setDensity(grass);
    const trees = q === 'high' ? 1 : q === 'medium' ? 0.5 : 0.25;
    this.forest.setDensity(trees);
    this.courseForest?.setDensity(trees);
    this.renderer.shadowMap.enabled = q !== 'low';
    this.sun.castShadow = q !== 'low';
    this.renderer.setPixelRatio(q === 'low' ? 1 : Math.min(window.devicePixelRatio, 2));
    // Materials must recompile when shadows are switched
    this.scene.traverse((o) => {
      const m = (o as THREE.Mesh).material;
      if (m) (Array.isArray(m) ? m : [m]).forEach((x) => (x.needsUpdate = true));
    });
    this.resize();
  }

  // ---------------- Course mode ----------------

  setMode(mode: 'range' | 'course') {
    this.mode = mode;
    this.rangeGroup.visible = mode === 'range';
    this.courseGroup.visible = mode === 'course';
    this.clearTracers();
    if (mode === 'range') {
      this.origin = { e: 0, n: 0 };
      this.aim = { e: 0, n: 1 };
      this.target = null;
      this.ball.position.set(0, MAT_TOP + BALL_R, 0);
    }
    this.placeStaticCamera();
  }

  /** Lay a north-up satellite image flat over the given east/north rectangle (metres). */
  setSatellite(canvas: HTMLCanvasElement, rect: { minE: number; maxE: number; minN: number; maxN: number }) {
    for (const m of [this.satellite, this.satelliteShadow]) {
      if (!m) continue;
      this.courseGroup.remove(m);
      m.geometry.dispose();
      const mat = m.material as THREE.MeshBasicMaterial;
      mat.map?.dispose();
      mat.dispose();
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = this.maxAniso;
    const w = rect.maxE - rect.minE;
    const h = rect.maxN - rect.minN;
    const geo = new THREE.PlaneGeometry(w, h);
    // The photo already contains real sunlight, so draw it as-is (no extra lighting or tone mapping)
    const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.copy(enToThree(rect.minE + w / 2, 0, rect.minN + h / 2));
    // ...but still let the ball and flag cast soft shadows onto it
    const shadow = new THREE.Mesh(geo.clone(), new THREE.ShadowMaterial({ opacity: 0.35 }));
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.copy(mesh.position).setY(0.02);
    shadow.receiveShadow = true;
    this.satellite = mesh;
    this.satelliteShadow = shadow;
    this.courseGroup.add(mesh, shadow);
  }

  setPin(p: EN) {
    this.flag.position.copy(enToThree(p.e, 0.03, p.n));
  }

  /** Put the ball at a course position and aim (unit vector); the camera follows. */
  setBall(p: EN, aim: EN, target?: EN) {
    this.origin = { ...p };
    this.aim = { ...aim };
    this.target = target ?? null;
    this.ball.position.copy(enToThree(p.e, this.restY(p), p.n));
    const b = enToThree(p.e, 0, p.n);
    this.courseGrass.centreOn(b.x, b.z);
    if (!this.anim) this.placeStaticCamera();
  }

  private water: THREE.Mesh[] = [];

  /** Glossy water surfaces over the hole's ponds and lakes (course metres, outlines). */
  setCourseWater(polys: EN[][]) {
    for (const m of this.water) {
      this.courseGroup.remove(m);
      m.geometry.dispose();
    }
    this.water = [];
    const mat = new THREE.MeshStandardMaterial({ color: 0x1a4560, roughness: 0.22, metalness: 0, transparent: true, opacity: 0.94, envMapIntensity: 0.35 });
    for (const poly of polys) {
      if (poly.length < 3) continue;
      const shape = new THREE.Shape(poly.map((p) => new THREE.Vector2(p.e, p.n)));
      const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape), mat);
      mesh.rotation.x = -Math.PI / 2; // shape y (north) → −z
      mesh.position.y = 0.04;
      mesh.receiveShadow = true;
      this.water.push(mesh);
      this.courseGroup.add(mesh);
    }
  }

  /** Plant 3D trees on the current hole (course coordinates, metres). */
  setCourseTrees(forest: Forest | null) {
    if (this.courseForest) {
      this.courseGroup.remove(this.courseForest);
      this.courseForest.dispose();
    }
    this.courseForest = forest;
    if (forest) {
      const q = this.quality;
      forest.setDensity(q === 'high' ? 1 : q === 'medium' ? 0.5 : 0.25);
      this.courseGroup.add(forest);
    }
  }

  /** Height of the ball's centre at rest: on the mat at the range tee, else on the ground */
  private restY(p: EN) {
    const onMat = this.mode === 'range' && Math.abs(p.e) < 0.75 && Math.abs(p.n) < 0.75;
    return BALL_R + (onMat ? MAT_TOP : 0);
  }

  /** Shot frame (x downrange, z right) → three.js, using the current ball position and aim */
  private toThree(p: TrajectoryPoint) {
    const a = this.aim;
    const r = { e: a.n, n: -a.e };
    return enToThree(this.origin.e + a.e * p.x + r.e * p.z, p.y, this.origin.n + a.n * p.x + r.n * p.z);
  }

  setCameraMode(mode: CameraMode) {
    this.cameraMode = mode;
    if (!this.anim) this.placeStaticCamera();
  }

  private placeStaticCamera(target?: THREE.Vector3) {
    const ball = enToThree(this.origin.e, 0, this.origin.n);
    const fwd = new THREE.Vector3(this.aim.e, 0, -this.aim.n).normalize();
    if (this.cameraMode === 'top') {
      // Look down over the ball and where it's going
      const far = target
        ?? (this.target ? enToThree(this.target.e, 0, this.target.n) : ball.clone().addScaledVector(fwd, this.mode === 'course' ? 200 : 220));
      const mid = ball.clone().lerp(far, 0.5);
      const span = Math.max(80, ball.distanceTo(far));
      this.camera.position.copy(mid).add(new THREE.Vector3(0, span * 1.15, 0)).addScaledVector(fwd, -1);
      this.camera.lookAt(mid);
    } else if (this.mode === 'course') {
      // A little above head height behind the ball: trees and grass give depth,
      // while the ground down the hole still reads clearly
      this.camera.position.copy(ball).addScaledVector(fwd, -2.6).setY(1.4);
      this.camera.lookAt(ball.clone().addScaledVector(fwd, 32).setY(-4));
    } else {
      // Eye height, standing a few paces behind the ball
      // About 2 m behind the ball, like a golf simulator's tee camera
      this.camera.position.copy(ball).addScaledVector(fwd, -2.2).setY(1.25);
      // Tilted down so the real-size ball sits in the lower part of the view
      this.camera.lookAt(ball.clone().addScaledVector(fwd, 30).setY(-4));
    }
  }

  /** Animate a new shot. Previous tracers fade and are kept (up to 10). */
  playShot(result: FlightResult, onDone?: () => void) {
    if (this.anim) this.finishAnim();
    for (const t of this.tracers) {
      (t.line.material as LineMaterial).opacity *= 0.5;
      (t.marker.material as THREE.MeshBasicMaterial).opacity *= 0.5;
    }
    while (this.tracers.length >= 10) {
      const old = this.tracers.shift()!;
      this.scene.remove(old.line, old.marker);
      old.line.geometry.dispose();
    }

    const pts = [...result.flight, ...result.ground];
    const positions: number[] = [];
    for (const p of pts) {
      const v = this.toThree(p);
      positions.push(v.x, v.y + 0.02, v.z);
    }
    if (positions.length < 6) positions.push(...positions.slice(0, 3)); // Line2 needs 2+ points
    const geom = new LineGeometry();
    geom.setPositions(positions);
    geom.instanceCount = 0;
    const material = new LineMaterial({ color: TRACER_COLOR, linewidth: 3.5, transparent: true, opacity: 1, worldUnits: false });
    material.resolution.set(this.container.clientWidth, this.container.clientHeight);
    const line = new Line2(geom, material);
    line.frustumCulled = false;
    const marker = new THREE.Mesh(
      new THREE.RingGeometry(0.7, 1.1, 32),
      new THREE.MeshBasicMaterial({ color: TRACER_COLOR, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }),
    );
    marker.rotation.x = -Math.PI / 2;
    const end = this.toThree(pts[pts.length - 1]);
    marker.position.set(end.x, 0.07, end.z);
    this.scene.add(line, marker);

    const duration = pts[pts.length - 1].t - pts[0].t;
    this.anim = { pts, positions, start: performance.now(), duration, line, marker };
    this.onAnimDone = onDone ?? null;
  }

  private finishAnim() {
    if (!this.anim) return;
    const { line, marker, pts } = this.anim;
    line.geometry.instanceCount = Infinity;
    (marker.material as THREE.MeshBasicMaterial).opacity = 0.9;
    this.ball.position.copy(this.toThree(pts[pts.length - 1])).setY(BALL_R);
    this.ballGlow.visible = false;
    this.tracers.push({ line, marker });
    this.anim = null;
    const done = this.onAnimDone;
    this.onAnimDone = null;
    done?.();
  }

  clearTracers() {
    for (const t of this.tracers) this.scene.remove(t.line, t.marker);
    this.tracers = [];
    this.ball.position.copy(enToThree(this.origin.e, this.restY(this.origin), this.origin.n));
    this.placeStaticCamera();
  }

  private loop = () => {
    if (this.disposed) return;
    requestAnimationFrame(this.loop);
    const t = this.clock.getElapsedTime();
    if (this.anim) {
      const { pts, start, duration, line } = this.anim;
      const elapsed = ((performance.now() - start) / 1000) * this.speed;
      const tNow = pts[0].t + elapsed;
      let i = pts.findIndex((p) => p.t > tNow);
      if (i === -1) i = pts.length;
      line.geometry.instanceCount = Math.max(0, i - 1);
      const p = this.toThree(pts[Math.min(i, pts.length - 1)]);
      this.ball.position.set(p.x, p.y + this.restY(this.origin), p.z);
      this.ball.rotation.x -= 0.6; // backspin
      // Glow grows with distance so the ball never shrinks to nothing
      const d = this.camera.position.distanceTo(this.ball.position);
      this.ballGlow.visible = d > 10;
      this.ballGlow.position.copy(this.ball.position);
      this.ballGlow.scale.setScalar(Math.min(5, d * 0.011));
      if (this.cameraMode === 'follow') {
        const fwd = new THREE.Vector3(this.aim.e, 0, -this.aim.n).normalize();
        const want = p.clone().addScaledVector(fwd, -35).setY(p.y + 8);
        this.camera.position.lerp(want, 0.08);
        this.camera.lookAt(p.clone().addScaledVector(fwd, 20));
      } else if (this.cameraMode === 'top') {
        this.placeStaticCamera(this.toThree(pts[pts.length - 1]));
      }
      if (elapsed >= duration) {
        this.finishAnim();
        if (this.cameraMode !== 'follow') this.placeStaticCamera(p);
      }
    }

    for (const f of this.rangeFlags) f.wave(t);
    this.flag.wave(t);
    updateTrees(t);
    this.clouds.uniforms.uTime.value = t;
    this.rangeGrass.update(t);
    this.courseGrass.update(t);

    // Keep the shadow camera centred on the ball so shadows stay sharp where you look
    const focusPt = this.ball.position;
    this.sun.target.position.copy(focusPt);
    this.sun.position.copy(focusPt).addScaledVector(this.sunDir, 200);

    if (this.quality === 'high' && this.cameraMode !== 'top') {
      // Focus on the ball; nearby ground and the far distance soften like a camera lens
      const u = this.bokeh.uniforms as Record<string, THREE.IUniform>;
      // Never focus closer than 25 m: with a real-size ball a few metres away the
      // whole range would otherwise blur
      const want = Math.max(25, this.camera.position.distanceTo(focusPt));
      u.focus.value += (want - u.focus.value) * 0.15;
      // Gentler on a course: the satellite detail down the hole matters for aiming
      u.aperture.value = this.mode === 'course' ? 0.00003 : 0.00007;
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  };

  private resize() {
    const w = this.container.clientWidth || 1;
    const h = this.container.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
    this.composer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    for (const t of this.tracers) (t.line.material as LineMaterial).resolution.set(w, h);
    if (this.anim) (this.anim.line.material as LineMaterial).resolution.set(w, h);
  }

  dispose() {
    this.disposed = true;
    this.resizeObserver.disconnect();
    this.composer.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}


function glowTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.25, 'rgba(255,240,200,0.6)');
  grd.addColorStop(1, 'rgba(255,220,150,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
