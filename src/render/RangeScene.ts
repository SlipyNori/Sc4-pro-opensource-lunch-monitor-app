import * as THREE from 'three';
import type { FlightResult, TrajectoryPoint } from '../physics/ballFlight';
import { ydToM } from '../physics/units';

export type CameraMode = 'behind' | 'follow' | 'top';

/** Physics (x downrange, y up, z right) → three.js (x right, y up, -z downrange) */
const toThree = (p: TrajectoryPoint) => new THREE.Vector3(p.z, p.y, -p.x);

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

    this.buildRange();

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
    this.scene.add(ground);

    // Mown stripes
    for (let i = 0; i < 28; i++) {
      const stripe = new THREE.Mesh(
        new THREE.PlaneGeometry(70, 12.5),
        new THREE.MeshLambertMaterial({ color: i % 2 ? 0x4ea548 : 0x469a40 }),
      );
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(0, 0.01, -i * 12.5 - 6);
      this.scene.add(stripe);
    }

    // Tee box
    const tee = new THREE.Mesh(new THREE.PlaneGeometry(6, 4), new THREE.MeshLambertMaterial({ color: 0x5cbf55 }));
    tee.rotation.x = -Math.PI / 2;
    tee.position.set(0, 0.02, 0);
    this.scene.add(tee);

    // Distance markers every 50 yd + target greens
    for (let yd = 50; yd <= 350; yd += 50) {
      const z = -ydToM(yd);
      const line = new THREE.Mesh(
        new THREE.PlaneGeometry(90, 0.4),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 }),
      );
      line.rotation.x = -Math.PI / 2;
      line.position.set(0, 0.03, z);
      this.scene.add(line);
      const label = makeLabel(`${yd}`);
      label.position.set(-38, 3, z);
      this.scene.add(label);
      const label2 = label.clone();
      label2.position.x = 38;
      this.scene.add(label2);
    }
    for (const [yd, x] of [[75, -12], [125, 10], [175, -6], [225, 14], [275, 0]] as const) {
      this.addGreen(-ydToM(yd), x);
    }
  }

  private addGreen(z: number, x: number) {
    const green = new THREE.Mesh(new THREE.CircleGeometry(9, 32), new THREE.MeshLambertMaterial({ color: 0x6fd36a }));
    green.rotation.x = -Math.PI / 2;
    green.position.set(x, 0.04, z);
    this.scene.add(green);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 4), new THREE.MeshLambertMaterial({ color: 0xeeeeee }));
    pole.position.set(x, 2, z);
    this.scene.add(pole);
    const flag = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 0.9),
      new THREE.MeshLambertMaterial({ color: 0xe0393e, side: THREE.DoubleSide }),
    );
    flag.position.set(x + 0.7, 3.5, z);
    this.scene.add(flag);
  }

  setCameraMode(mode: CameraMode) {
    this.cameraMode = mode;
    if (!this.anim) this.placeStaticCamera();
  }

  private placeStaticCamera(target?: THREE.Vector3) {
    if (this.cameraMode === 'top') {
      const cz = target ? target.z / 2 : -110;
      this.camera.position.set(0, 260, cz + 1);
      this.camera.lookAt(0, 0, cz);
    } else {
      this.camera.position.set(0, 2.2, 9);
      this.camera.lookAt(0, 4, -150);
    }
  }

  /** Animate a new shot. Previous tracers fade and are kept (up to 10). */
  playShot(result: FlightResult) {
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
    const geom = new THREE.BufferGeometry().setFromPoints(pts.map(toThree));
    geom.setDrawRange(0, 0);
    const line = new THREE.Line(geom, new THREE.LineBasicMaterial({ color: 0xffdd33, transparent: true, opacity: 1 }));
    const marker = new THREE.Mesh(
      new THREE.RingGeometry(0.8, 1.3, 24),
      new THREE.MeshBasicMaterial({ color: 0xffdd33, transparent: true, opacity: 0, side: THREE.DoubleSide }),
    );
    marker.rotation.x = -Math.PI / 2;
    const end = toThree(pts[pts.length - 1]);
    marker.position.set(end.x, 0.06, end.z);
    this.scene.add(line, marker);

    const duration = pts[pts.length - 1].t - pts[0].t;
    this.anim = { pts, start: performance.now(), duration, line, marker };
  }

  private finishAnim() {
    if (!this.anim) return;
    const { line, marker, pts } = this.anim;
    line.geometry.setDrawRange(0, pts.length);
    (marker.material as THREE.MeshBasicMaterial).opacity = 0.9;
    this.ball.position.copy(toThree(pts[pts.length - 1])).setY(0.35);
    this.tracers.push({ line, marker });
    this.anim = null;
  }

  clearTracers() {
    for (const t of this.tracers) this.scene.remove(t.line, t.marker);
    this.tracers = [];
    this.ball.position.set(0, 0.35, 0);
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
      const p = toThree(pts[Math.min(i, pts.length - 1)]);
      this.ball.position.set(p.x, p.y + 0.35, p.z);
      if (this.cameraMode === 'follow') {
        this.camera.position.lerp(new THREE.Vector3(p.x * 0.6, p.y + 8, p.z + 35), 0.08);
        this.camera.lookAt(p.x, p.y, p.z - 20);
      } else if (this.cameraMode === 'top') {
        this.placeStaticCamera(toThree(pts[pts.length - 1]));
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
