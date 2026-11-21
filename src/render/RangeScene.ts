import * as THREE from 'three';
import type { FlightResult, TrajectoryPoint } from '../physics/ballFlight';
import { ydToM } from '../physics/units';

export type CameraMode = 'behind' | 'follow' | 'top';

/** Course coordinates in metres (east, north) */
export interface EN {
  e: number;
  n: number;
}

/** Course (east, height, north) → three.js (x = east, y = up, z = −north) */
const enToThree = (e: number, y: number, n: number) => new THREE.Vector3(e, y, -n);

interface Tracer {
  line: THREE.Line;
  marker: THREE.Mesh;
}

/**
 * 3D driving range: draws the range, animates the ball along a simulated
 * trajectory with a tracer, and keeps faded tracers of recent shots.
 */
export class RangeScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private ball: THREE.Mesh;
  private tracers: Tracer[] = [];
  private anim: { pts: TrajectoryPoint[]; start: number; duration: number; line: THREE.Line; marker: THREE.Mesh } | null = null;
  private cameraMode: CameraMode = 'behind';
  /** Range decorations (hidden on a course) */
  private rangeGroup = new THREE.Group();
  /** Course: satellite ground and flag */
  private courseGroup = new THREE.Group();
  private satellite: THREE.Mesh | null = null;
  private flag: THREE.Group;
  private mode: 'range' | 'course' = 'range';
  /** Where the next shot starts and which way it's aimed (course metres) */
  private origin: EN = { e: 0, n: 0 };
  private aim: EN = { e: 0, n: 1 };
  private target: EN | null = null;
  private onAnimDone: (() => void) | null = null;
  private disposed = false;
  private resizeObserver: ResizeObserver;
  /** Playback speed multiplier for the ball animation */
  speed = 1;

  constructor(private container: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 2000);
    this.scene.background = new THREE.Color(0x9fd3f5);
    this.scene.fog = new THREE.Fog(0x9fd3f5, 250, 700);

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x4a7a3a, 1.1));
    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
    sun.position.set(-50, 120, 40);
    this.scene.add(sun);

    this.scene.add(this.rangeGroup, this.courseGroup);
    this.buildRange();
    this.flag = makeFlag();
    const base = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000), new THREE.MeshLambertMaterial({ color: 0x2f5d2a }));
    base.rotation.x = -Math.PI / 2;
    base.position.y = -0.05;
    this.courseGroup.add(base, this.flag);
    this.courseGroup.visible = false;

    this.ball = new THREE.Mesh(
      new THREE.SphereGeometry(0.35, 16, 12),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x666666 }),
    );
    this.ball.position.set(0, 0.35, 0);
    this.scene.add(this.ball);

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    this.resize();
    this.setCameraMode('behind');
    this.loop();
  }

  private buildRange() {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(1200, 1400),
      new THREE.MeshLambertMaterial({ color: 0x3f8f3a }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.z = -500;
    this.rangeGroup.add(ground);

    // Mown stripes
    for (let i = 0; i < 28; i++) {
      const stripe = new THREE.Mesh(
        new THREE.PlaneGeometry(70, 12.5),
        new THREE.MeshLambertMaterial({ color: i % 2 ? 0x4ea548 : 0x469a40 }),
      );
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(0, 0.01, -i * 12.5 - 6);
      this.rangeGroup.add(stripe);
    }

    // Tee box
    const tee = new THREE.Mesh(new THREE.PlaneGeometry(6, 4), new THREE.MeshLambertMaterial({ color: 0x5cbf55 }));
    tee.rotation.x = -Math.PI / 2;
    tee.position.set(0, 0.02, 0);
    this.rangeGroup.add(tee);

    // Distance markers every 50 yd + target greens
    for (let yd = 50; yd <= 350; yd += 50) {
      const z = -ydToM(yd);
      const line = new THREE.Mesh(
        new THREE.PlaneGeometry(90, 0.4),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 }),
      );
      line.rotation.x = -Math.PI / 2;
      line.position.set(0, 0.03, z);
      this.rangeGroup.add(line);
      const label = makeLabel(`${yd}`);
      label.position.set(-38, 3, z);
      this.rangeGroup.add(label);
      const label2 = label.clone();
      label2.position.x = 38;
      this.rangeGroup.add(label2);
    }
    for (const [yd, x] of [[75, -12], [125, 10], [175, -6], [225, 14], [275, 0]] as const) {
      this.addGreen(-ydToM(yd), x);
    }
  }

  private addGreen(z: number, x: number) {
    const green = new THREE.Mesh(new THREE.CircleGeometry(9, 32), new THREE.MeshLambertMaterial({ color: 0x6fd36a }));
    green.rotation.x = -Math.PI / 2;
    green.position.set(x, 0.04, z);
    this.rangeGroup.add(green);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 4), new THREE.MeshLambertMaterial({ color: 0xeeeeee }));
    pole.position.set(x, 2, z);
    this.rangeGroup.add(pole);
    const flag = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 0.9),
      new THREE.MeshLambertMaterial({ color: 0xe0393e, side: THREE.DoubleSide }),
    );
    flag.position.set(x + 0.7, 3.5, z);
    this.rangeGroup.add(flag);
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
      this.ball.position.set(0, 0.35, 0);
    }
    this.placeStaticCamera();
  }

  /** Lay a north-up satellite image flat over the given east/north rectangle (metres). */
  setSatellite(canvas: HTMLCanvasElement, rect: { minE: number; maxE: number; minN: number; maxN: number }) {
    if (this.satellite) {
      this.courseGroup.remove(this.satellite);
      this.satellite.geometry.dispose();
      const m = this.satellite.material as THREE.MeshBasicMaterial;
      m.map?.dispose();
      m.dispose();
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    const w = rect.maxE - rect.minE;
    const h = rect.maxN - rect.minN;
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex }));
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.copy(enToThree(rect.minE + w / 2, 0, rect.minN + h / 2));
    this.satellite = mesh;
    this.courseGroup.add(mesh);
  }

  setPin(p: EN) {
    this.flag.position.copy(enToThree(p.e, 0, p.n));
  }

  /** Put the ball at a course position and aim (unit vector); the camera follows. */
  setBall(p: EN, aim: EN, target?: EN) {
    this.origin = { ...p };
    this.aim = { ...aim };
    this.target = target ?? null;
    this.ball.position.copy(enToThree(p.e, 0.35, p.n));
    if (!this.anim) this.placeStaticCamera();
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
    } else {
      // On a course, sit higher so the satellite ground reads clearly down the hole
      const course = this.mode === 'course';
      this.camera.position.copy(ball).addScaledVector(fwd, course ? -16 : -9).setY(course ? 9 : 2.2);
      this.camera.lookAt(ball.clone().addScaledVector(fwd, course ? 120 : 150).setY(course ? 0 : 4));
    }
  }

  /** Animate a new shot. Previous tracers fade and are kept (up to 10). */
  playShot(result: FlightResult, onDone?: () => void) {
    if (this.anim) this.finishAnim();
    for (const t of this.tracers) {
      (t.line.material as THREE.LineBasicMaterial).opacity *= 0.55;
      (t.marker.material as THREE.MeshBasicMaterial).opacity *= 0.55;
    }
    while (this.tracers.length >= 10) {
      const old = this.tracers.shift()!;
      this.scene.remove(old.line, old.marker);
      old.line.geometry.dispose();
    }

    const pts = [...result.flight, ...result.ground];
    const geom = new THREE.BufferGeometry().setFromPoints(pts.map((p) => this.toThree(p)));
    geom.setDrawRange(0, 0);
    const line = new THREE.Line(geom, new THREE.LineBasicMaterial({ color: 0xffdd33, transparent: true, opacity: 1 }));
    const marker = new THREE.Mesh(
      new THREE.RingGeometry(0.8, 1.3, 24),
      new THREE.MeshBasicMaterial({ color: 0xffdd33, transparent: true, opacity: 0, side: THREE.DoubleSide }),
    );
    marker.rotation.x = -Math.PI / 2;
    const end = this.toThree(pts[pts.length - 1]);
    marker.position.set(end.x, 0.06, end.z);
    this.scene.add(line, marker);

    const duration = pts[pts.length - 1].t - pts[0].t;
    this.anim = { pts, start: performance.now(), duration, line, marker };
    this.onAnimDone = onDone ?? null;
  }

  private finishAnim() {
    if (!this.anim) return;
    const { line, marker, pts } = this.anim;
    line.geometry.setDrawRange(0, pts.length);
    (marker.material as THREE.MeshBasicMaterial).opacity = 0.9;
    this.ball.position.copy(this.toThree(pts[pts.length - 1])).setY(0.35);
    this.tracers.push({ line, marker });
    this.anim = null;
    const done = this.onAnimDone;
    this.onAnimDone = null;
    done?.();
  }

  clearTracers() {
    for (const t of this.tracers) this.scene.remove(t.line, t.marker);
    this.tracers = [];
    this.ball.position.copy(enToThree(this.origin.e, 0.35, this.origin.n));
    this.placeStaticCamera();
  }

  private loop = () => {
    if (this.disposed) return;
    requestAnimationFrame(this.loop);
    if (this.anim) {
      const { pts, start, duration, line } = this.anim;
      const elapsed = ((performance.now() - start) / 1000) * this.speed;
      const tNow = pts[0].t + elapsed;
      let i = pts.findIndex((p) => p.t > tNow);
      if (i === -1) i = pts.length;
      line.geometry.setDrawRange(0, i);
      const p = this.toThree(pts[Math.min(i, pts.length - 1)]);
      this.ball.position.set(p.x, p.y + 0.35, p.z);
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
    this.renderer.render(this.scene, this.camera);
  };

  private resize() {
    const w = this.container.clientWidth || 1;
    const h = this.container.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  dispose() {
    this.disposed = true;
    this.resizeObserver.disconnect();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}

function makeLabel(text: string): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = 'rgba(0,0,0,0.45)';
  ctx.fillRect(0, 0, 128, 64);
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 40px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 64, 34);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas) }));
  sprite.scale.set(8, 4, 1);
  return sprite;
}

function makeFlag(): THREE.Group {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.4), new THREE.MeshLambertMaterial({ color: 0xf5f5f5 }));
  pole.position.y = 1.2;
  const cloth = new THREE.Mesh(
    new THREE.PlaneGeometry(0.9, 0.6),
    new THREE.MeshLambertMaterial({ color: 0xe0393e, side: THREE.DoubleSide }),
  );
  cloth.position.set(0.45, 2.1, 0);
  const cup = new THREE.Mesh(new THREE.CircleGeometry(0.3, 20), new THREE.MeshBasicMaterial({ color: 0x111111 }));
  cup.rotation.x = -Math.PI / 2;
  cup.position.y = 0.02;
  // A tall faint marker so the pin can be spotted from the tee
  const beacon = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25, 0.25, 30),
    new THREE.MeshBasicMaterial({ color: 0xffdd33, transparent: true, opacity: 0.25 }),
  );
  beacon.position.y = 15;
  g.add(pole, cloth, cup, beacon);
  return g;
}
