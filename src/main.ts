import { RangeScene, type CameraMode, type Quality } from './render/RangeScene';
import { SimulatedDevice } from './devices/SimulatedDevice';
import { BluetoothDevice } from './devices/BluetoothDevice';
import type { DeviceAdapter, DeviceStatus } from './devices/DeviceAdapter';
import { validateProfile, type DeviceProfile } from './devices/frameDecoder';
import { SC4_PRO_PROFILE } from './devices/profiles';
import { flightForShot, processShot } from './session/processShot';
import { statsByClub } from './session/stats';
import { csvToMeasurements, shotsToCsv } from './session/csv';
import { loadJson, loadShots, saveJson, saveShots } from './session/store';
import { DEFAULT_ENVIRONMENT, type Environment } from './physics/ballFlight';
import { CLUBS, type ClubId, type Shot, type ShotMeasurement } from './types';
import { CameraTracker, DEFAULT_CAMERA_SETTINGS, type CameraSettings } from './camera/CameraTracker';
import { REPLAY_QUALITIES, ReplayRecorder, releaseClip, type ReplayClip } from './camera/ReplayRecorder';
import { ReplayPlayer } from './camera/ReplayPlayer';
import { Round, LIE_EFFECT, scoreName } from './course/round';
import { findCourses, loadCourse, searchPlaces, type Course, type CourseSummary } from './course/osm';
import { buildFeatureImagery, buildImagery, type HoleImagery } from './course/satellite';
import { practiceCourse } from './course/practiceCourse';
import { Minimap } from './course/Minimap';
import { msToMph } from './physics/units';

const $ = <T extends HTMLElement = HTMLElement>(sel: string) => document.querySelector(sel) as T;

// ---------- State ----------
let shots: Shot[] = loadShots();
let club: ClubId = loadJson<ClubId>('open-sc4.club', 'DR');
let env: Environment = { ...DEFAULT_ENVIRONMENT };
let gimmeM = 0;
let mode: 'range' | 'course' = 'range';
let round: Round | null = null;
const PROFILE_KEY = 'open-sc4.profile.v1';
const savedProfile = loadJson<DeviceProfile | null>(PROFILE_KEY, null);
// Use the built-in SC4 Pro profile unless the user has customised the decoding,
// so improvements to the default reach people who saved an older copy.
let profile: DeviceProfile = savedProfile && Object.keys(savedProfile.fields ?? {}).length ? savedProfile : SC4_PRO_PROFILE;

const sim = new SimulatedDevice();
const ble = new BluetoothDevice(profile);
const devices: DeviceAdapter[] = [sim, ble];
let active: DeviceAdapter = sim;
let status: DeviceStatus = 'disconnected';

const scene = new RangeScene($('#range'));

// ---------- Device wiring ----------
for (const d of devices) {
  d.on('shot', (m) => {
    if (d === active) addShot(m, d.name);
  });
  d.on('status', (s, detail) => {
    if (d !== active) return;
    status = s;
    renderStatus(detail);
  });
  d.on('log', (line) => appendLog(line));
  d.on('readiness', (state) => {
    if (d !== active) return;
    readiness = state;
    renderLamp();
  });
  d.on('packet', () => {
    if (d !== active) return;
    packetCount++;
    lastPacketAt = Date.now();
    const el = $('#activity');
    el.classList.add('live');
    setTimeout(() => el.classList.remove('live'), 150);
    renderActivity();
  });
}

// ---------- Ready lamp ----------
// States: off (not connected) → waiting (connected, no ready signal known/seen)
//         → ready / not-ready (device status packets) ; "shot" flashes briefly after each shot.
let readiness: 'ready' | 'not-ready' | null = null;
let shotFlashUntil = 0;
let flashTitle = 'Shot recorded';
function renderLamp() {
  const lamp = $('#ready-lamp');
  let state: string;
  let title: string;
  let detail: string;
  if (Date.now() < shotFlashUntil) {
    state = 'shot'; title = flashTitle; detail = 'Get ready for the next one';
  } else if (camera?.running) {
    const radarOk = status === 'connected';
    const cam = camera.state;
    if (readiness === 'not-ready') {
      state = 'not-ready'; title = 'Not ready'; detail = 'Radar is busy or not armed – wait';
    } else if (cam === 'ready' && radarOk) {
      state = 'ready'; title = 'Ready – hit away'; detail = `Ball set · ${active === sim ? 'Simulator' : 'radar connected'}`;
    } else if (cam === 'ready') {
      state = 'waiting'; title = 'Ball set'; detail = 'Connect the radar to start tracking';
    } else if (cam === 'settling') {
      state = 'waiting'; title = 'Hold still…'; detail = 'Ball found – checking it’s settled';
    } else {
      state = 'waiting'; title = 'Place ball in the box'; detail = radarOk ? 'Camera is watching the hitting spot' : 'Radar not connected yet';
    }
  } else if (status === 'connecting') {
    state = 'waiting'; title = 'Connecting…'; detail = 'Pick the device in the browser window';
  } else if (status !== 'connected') {
    state = 'off'; title = 'Not connected'; detail = status === 'error' ? 'Connection failed – see Device tab' : 'Connect a device to start';
  } else if (readiness === 'ready') {
    state = 'ready'; title = 'Ready – hit away'; detail = active === sim ? 'Simulator: press Space or Hit' : 'Device is armed';
  } else if (readiness === 'not-ready') {
    state = 'not-ready'; title = 'Not ready'; detail = 'Device is busy or not armed – wait';
  } else {
    const hasReadySignal = !!profile.status?.ready?.prefix || profile.status?.ready?.length !== undefined;
    state = 'waiting';
    title = 'Connected';
    detail = hasReadySignal
      ? 'Waiting for the device to arm…'
      : 'Ready signal not decoded yet – watch the device screen';
  }
  lamp.dataset.state = state;
  $('#ready-title').textContent = title;
  $('#ready-detail').textContent = detail;
}
function flashShot(title = 'Shot recorded') {
  flashTitle = title;
  shotFlashUntil = Date.now() + 1800;
  renderLamp();
  setTimeout(renderLamp, 1850);
}

// ---------- Data activity indicator (shows the device is sending something) ----------
let packetCount = 0;
let lastPacketAt = 0;
function renderActivity() {
  const el = $('#activity');
  el.hidden = active === sim || status !== 'connected';
  if (el.hidden) return;
  const ago = lastPacketAt ? Math.round((Date.now() - lastPacketAt) / 1000) : -1;
  $('#activity-text').textContent = packetCount === 0
    ? 'Waiting for data…'
    : `${packetCount} packet${packetCount === 1 ? '' : 's'} · last ${ago < 1 ? 'just now' : `${ago}s ago`}`;
}
setInterval(renderActivity, 1000);

function addShot(m: ShotMeasurement, source: string) {
  const { shot, flight } = processShot(m, club, source, env);
  shots.push(shot);
  saveShots(shots);
  if (mode === 'course' && round && !round.holed) {
    playCourseShot(m);
  } else if (mode === 'course' && round?.holed) {
    $('#hole-msg').textContent = 'Hole finished – press Next hole ▶';
  } else {
    scene.playShot(flight);
  }
  flashShot();
  attachReplayToShot(shot);
  renderTiles(shot);
  renderHistory();
  renderStats();
}

// ---------- Top bar ----------
const deviceSelect = $<HTMLSelectElement>('#device-select');
deviceSelect.innerHTML = devices
  .map((d) => `<option value="${d.id}" ${d.isSupported() ? '' : 'disabled'}>${d.name}${d.isSupported() ? '' : ' (unsupported in this browser)'}</option>`)
  .join('');
deviceSelect.addEventListener('change', async () => {
  if (status === 'connected') await active.disconnect();
  active = devices.find((d) => d.id === deviceSelect.value)!;
  status = 'disconnected';
  renderStatus();
});

$('#connect-btn').addEventListener('click', async () => {
  try {
    if (status === 'connected') await active.disconnect();
    else await active.connect();
  } catch (e) {
    appendLog(`Error: ${(e as Error).message}`);
  }
});

const clubSelect = $<HTMLSelectElement>('#club-select');
clubSelect.innerHTML = CLUBS.map((c) => `<option ${c === club ? 'selected' : ''}>${c}</option>`).join('');
clubSelect.addEventListener('change', () => {
  setClub(clubSelect.value as ClubId);
});
function setClub(c: ClubId) {
  club = c;
  clubSelect.value = c;
  sim.club = c;
  saveJson('open-sc4.club', c);
  camera.setFast(c === 'PT' && camera.settings.putt.enabled);
  if (mode === 'course' && round && !round.holed) {
    round.autoAim(c);
    syncCourseView();
  }
}
sim.club = club;

const hitBtn = $<HTMLButtonElement>('#hit-btn');
hitBtn.addEventListener('click', async () => {
  if (active !== sim) return;
  if (status !== 'connected') await sim.connect();
  sim.hit();
});
document.addEventListener('keydown', (e) => {
  const tag = (e.target as HTMLElement).tagName;
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;
  if (e.code === 'Space' && tag !== 'BUTTON') {
    e.preventDefault();
    hitBtn.click();
  } else if (mode === 'course' && (e.code === 'ArrowLeft' || e.code === 'KeyA')) {
    e.preventDefault();
    nudgeAim(-1);
  } else if (mode === 'course' && (e.code === 'ArrowRight' || e.code === 'KeyD')) {
    e.preventDefault();
    nudgeAim(1);
  }
});

function renderStatus(detail?: string) {
  const el = $('#status');
  const labels: Record<DeviceStatus, string> = {
    disconnected: 'Disconnected', connecting: 'Connecting…', connected: 'Connected', error: 'Error',
  };
  el.textContent = detail ? `${labels[status]} · ${detail}` : labels[status];
  el.className = `status status-${status}`;
  $('#connect-btn').textContent = status === 'connected' ? 'Disconnect' : 'Connect';
  hitBtn.style.display = active === sim ? '' : 'none';
  if (status === 'connecting' || status === 'disconnected') {
    packetCount = 0;
    lastPacketAt = 0;
    readiness = null;
  }
  renderActivity();
  renderLamp();
}

// ---------- Range toolbar ----------
$<HTMLSelectElement>('#camera-select').addEventListener('change', (e) => {
  scene.setCameraMode((e.target as HTMLSelectElement).value as CameraMode);
});
$('#clear-tracers').addEventListener('click', () => scene.clearTracers());
const qualitySelect = $<HTMLSelectElement>('#quality-select');
qualitySelect.value = loadJson<Quality>('open-sc4.quality', 'high');
scene.setQuality(qualitySelect.value as Quality);
qualitySelect.addEventListener('change', () => {
  scene.setQuality(qualitySelect.value as Quality);
  saveJson('open-sc4.quality', qualitySelect.value);
});

// ---------- Shot tiles ----------
function renderTiles(s?: Shot) {
  $('#last-club').textContent = s ? `${s.club} · ${s.source.replace(/ \(.*\)$/, '')}` : '';
  const v = (x: number | undefined, dp = 1) => (x === undefined ? '–' : x.toFixed(dp));
  const lr = (x: number | undefined, dp = 1) => (x === undefined ? '–' : `${Math.abs(x).toFixed(dp)}${x > 0 ? 'R' : x < 0 ? 'L' : ''}`);
  const est = (k: keyof ShotMeasurement) => (s?.estimated?.includes(k) ? 'est' : '');
  const tiles: [string, string, string, string?][] = [
    ['Carry', v(s?.carryYd), 'yd', 'hero'],
    ['Total', v(s?.totalYd), 'yd'],
    ['Offline', lr(s?.offlineYd), 'yd'],
    ['Ball speed', v(s?.ballSpeedMph), 'mph'],
    ['Club speed', v(s?.clubSpeedMph), 'mph'],
    ['Smash', v(s?.smashFactor, 2), ''],
    ['Launch', v(s?.launchAngleDeg), '°', est('launchAngleDeg')],
    ['Direction', lr(s?.launchDirectionDeg), '°', est('launchDirectionDeg')],
    ['Spin', v(s?.spinRpm, 0), 'rpm', est('spinRpm')],
    ['Spin axis', lr(s?.spinAxisDeg), '°', est('spinAxisDeg')],
    ['Apex', v(s?.apexFt, 0), 'ft'],
    ['Land angle', v(s?.landingAngleDeg), '°'],
  ];
  $('#tiles').innerHTML = tiles
    .map(([k, val, u, cls]) => `<div class="tile ${cls ?? ''}"><div class="k">${k}</div><div class="v">${val}<span class="u">${u}</span></div></div>`)
    .join('');
}

// ---------- History & stats ----------
function renderHistory() {
  const cols: [string, (s: Shot) => string][] = [
    ['#', (s) => String(shots.indexOf(s) + 1)],
    ['Club', (s) => s.club],
    ['Carry', (s) => s.carryYd.toFixed(1)],
    ['Total', (s) => s.totalYd.toFixed(1)],
    ['Offline', (s) => s.offlineYd.toFixed(1)],
    ['Ball', (s) => s.ballSpeedMph.toFixed(1)],
    ['Club spd', (s) => s.clubSpeedMph?.toFixed(1) ?? '–'],
    ['Smash', (s) => s.smashFactor?.toFixed(2) ?? '–'],
    ['Launch', (s) => s.launchAngleDeg?.toFixed(1) ?? '–'],
    ['Dir', (s) => s.launchDirectionDeg?.toFixed(1) ?? '–'],
    ['Spin', (s) => s.spinRpm?.toFixed(0) ?? '–'],
    ['Axis', (s) => s.spinAxisDeg?.toFixed(1) ?? '–'],
    ['Apex ft', (s) => String(s.apexFt)],
    ['Dev. carry', (s) => s.deviceCarryYd?.toFixed(1) ?? '–'],
    ['Time', (s) => new Date(s.timestamp).toLocaleTimeString()],
  ];
  const rows = [...shots].reverse().slice(0, 300);
  $('#history-table').innerHTML =
    `<thead><tr>${cols.map(([h]) => `<th>${h}</th>`).join('')}</tr></thead>` +
    `<tbody>${rows.map((s) => `<tr data-id="${s.id}">${cols.map(([, f]) => `<td>${f(s)}</td>`).join('')}</tr>`).join('')}</tbody>`;
}

$('#history-table').addEventListener('click', (e) => {
  const tr = (e.target as HTMLElement).closest('tr[data-id]');
  const s = tr && shots.find((x) => x.id === tr.getAttribute('data-id'));
  if (!s) return;
  scene.playShot(flightForShot(s, env));
  renderTiles(s);
  const clip = clipsByShot.get(s.id);
  if (clip) player.load(clip, `Replay · ${s.club}`);
});

function renderStats() {
  const stats = statsByClub(shots).sort((a, b) => CLUBS.indexOf(a.club) - CLUBS.indexOf(b.club));
  const head = ['Club', 'Shots', 'Avg carry', 'Avg total', 'Carry ±', 'Offline ±', 'Ball spd', 'Club spd', 'Launch', 'Spin'];
  $('#stats-table').innerHTML =
    `<thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>` +
    stats.map((s) => `<tr><td>${s.club}</td><td>${s.count}</td><td>${s.avgCarry}</td><td>${s.avgTotal}</td><td>${s.carryStdDev}</td><td>${s.offlineStdDev}</td><td>${s.avgBallSpeed}</td><td>${s.avgClubSpeed ?? '–'}</td><td>${s.avgLaunch}</td><td>${s.avgSpin}</td></tr>`).join('') +
    `</tbody>`;
}

$('#export-csv').addEventListener('click', () => download(`opensc4-shots-${dateStamp()}.csv`, shotsToCsv(shots), 'text/csv'));
$<HTMLInputElement>('#import-csv').addEventListener('change', async (e) => {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;
  try {
    const rows = csvToMeasurements(await file.text());
    for (const { club: c, m } of rows) shots.push(processShot(m, c, 'CSV import', env).shot);
    saveShots(shots);
    renderHistory();
    renderStats();
    historyMsg(`Imported ${rows.length} shots`);
  } catch (err) {
    historyMsg(`Import failed: ${(err as Error).message}`);
  }
  input.value = '';
});
// Two-step confirm in the page itself (no browser dialogs, which some embeds block)
const clearBtn = $<HTMLButtonElement>('#clear-history');
let clearTimer: ReturnType<typeof setTimeout> | undefined;
clearBtn.addEventListener('click', () => {
  if (!clearBtn.classList.contains('armed')) {
    clearBtn.classList.add('armed');
    clearBtn.textContent = `Delete ${shots.length} shots?`;
    clearTimer = setTimeout(disarmClear, 4000);
    return;
  }
  disarmClear();
  shots = [];
  saveShots(shots);
  renderHistory();
  renderStats();
  renderTiles();
  historyMsg('History cleared');
});
function disarmClear() {
  clearTimeout(clearTimer);
  clearBtn.classList.remove('armed');
  clearBtn.textContent = 'Clear history';
}
$('#copy-csv').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(shotsToCsv(shots));
    historyMsg(`Copied ${shots.length} shots as CSV`);
  } catch {
    historyMsg('Copy was blocked by the browser – use Export CSV instead');
  }
});
let msgTimer: ReturnType<typeof setTimeout> | undefined;
function historyMsg(text: string) {
  const el = $('#history-msg');
  el.textContent = text;
  clearTimeout(msgTimer);
  msgTimer = setTimeout(() => (el.textContent = ''), 5000);
}

// ---------- Manual entry ----------
$<HTMLFormElement>('#manual-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const data = new FormData(form);
  const m: Record<string, number> = {};
  for (const [k, v] of data.entries()) {
    const n = parseFloat(String(v));
    if (Number.isFinite(n)) m[k] = n;
  }
  if (!m.ballSpeedMph) return;
  addShot(m as unknown as ShotMeasurement, 'Manual');
  form.reset();
});

// ---------- Camera (ball-set detection) ----------
const CAMERA_KEY = 'open-sc4.camera.v1';
const savedCam = loadJson<Partial<CameraSettings>>(CAMERA_KEY, {});
const camSettings: CameraSettings = {
  ...DEFAULT_CAMERA_SETTINGS,
  ...savedCam,
  // merge nested settings so older saved settings pick up new fields
  pixels: { ...DEFAULT_CAMERA_SETTINGS.pixels, ...(savedCam.pixels ?? {}) },
  putt: { ...DEFAULT_CAMERA_SETTINGS.putt, ...(savedCam.putt ?? {}) },
};
const camera = new CameraTracker(camSettings, $<HTMLCanvasElement>('#camera-canvas'));
const camToggle = $<HTMLButtonElement>('#camera-toggle');
const camSelect = $<HTMLSelectElement>('#webcam-select');
const camMin = $<HTMLInputElement>('#cam-min');
const camBright = $<HTMLInputElement>('#cam-bright');
const saveCam = () => saveJson(CAMERA_KEY, camera.settings);
const camMsg = (t: string) => ($('#cam-msg').textContent = t);
camMin.value = String(camSettings.minPixels);
camBright.value = String(camSettings.pixels.brightness);
$('#cam-need').textContent = String(camSettings.minPixels);

async function fillCameraList() {
  const cams = await CameraTracker.listCameras();
  camSelect.innerHTML = '<option value="">Default camera</option>' + cams
    .map((c, i) => `<option value="${c.deviceId}" ${c.deviceId === camSettings.deviceId ? 'selected' : ''}>${c.label || `Camera ${i + 1}`}</option>`)
    .join('');
}
camSelect.addEventListener('change', async () => {
  camera.settings.deviceId = camSelect.value || undefined;
  saveCam();
  if (camera.running) await startCamera();
});
async function startCamera() {
  try {
    await camera.start();
    if (replayOn.checked) recorder.start(camera.video);
    camToggle.textContent = 'Stop camera';
    camMsg('');
    await fillCameraList(); // labels are only available after permission is granted
  } catch (e) {
    camMsg(`Camera didn’t start: ${(e as Error).message}. Allow camera access in the browser’s address bar and try again.`);
  }
  renderLamp();
}
camToggle.addEventListener('click', async () => {
  if (camera.running) {
    recorder.stop();
    camera.stop();
    camToggle.textContent = 'Start camera';
    $('#cam-state').textContent = 'Camera off';
    renderLamp();
  } else {
    await startCamera();
  }
});
camMin.addEventListener('input', () => {
  camera.setMinPixels(Number(camMin.value));
  $('#cam-need').textContent = camMin.value;
  saveCam();
});
camBright.addEventListener('input', () => {
  camera.settings.pixels.brightness = Number(camBright.value);
  saveCam();
});
const camTol = $<HTMLInputElement>('#cam-tol');
function renderBallLook() {
  const p = camera.settings.pixels;
  const colour = p.mode === 'color' && p.color;
  $('#ball-kind').textContent = colour ? 'Coloured ball' : 'White ball';
  $('#ball-swatch').style.background = colour ? `rgb(${p.color!.rgb.join(',')})` : '#f4f4f4';
  $('#bright-row').hidden = !!colour;
  $('#tol-row').hidden = !colour;
  camTol.value = String(Math.round(p.tolerance * 1000));
  camBright.value = String(p.brightness);
}
renderBallLook();
camTol.addEventListener('input', () => {
  camera.settings.pixels.tolerance = Number(camTol.value) / 1000;
  saveCam();
});
$('#cam-calibrate').addEventListener('click', () => {
  if (!camera.running) return camMsg('Start the camera first.');
  const res = camera.learnBall();
  if (!res) {
    return camMsg('Couldn’t pick out a ball in the box. Draw the box a little bigger than the ball, check the ball is inside it, and that its colour differs from the floor.');
  }
  camMin.value = String(camera.settings.minPixels);
  $('#cam-need').textContent = String(camera.settings.minPixels);
  saveCam();
  renderBallLook();
  camMsg(`${res.label}: found ${res.count} ball pixels, so ${camera.settings.minPixels} or more counts as “ball in box”.`);
});
const camStateLabels = { empty: 'No ball in box', settling: 'Ball found – settling', ready: 'Ball set ✓', cooldown: 'Hit detected' };
camera.onFrame = () => {
  $('#cam-count').textContent = String(camera.last.count);
  $('#cam-state').textContent = camStateLabels[camera.state];
};
camera.onEvent = (ev) => {
  if (ev === 'hit') {
    appendLog('📷 Camera: ball left the box – hit detected');
    lastCameraHitAt = Date.now();
    // Impact happened just after the ball was last seen, not when we noticed it was gone.
    const impactT = camera.lastBallSeenAt ? camera.lastBallSeenAt + 40 : performance.now();
    if (recorder.running) recorder.capture(impactT).then((clip) => clip && onClip(clip));
    flashShot('Swing detected');
    const cameraPutts = club === 'PT' && camera.settings.putt.enabled;
    if (!cameraPutts && active === sim && status === 'connected' && $<HTMLInputElement>('#cam-sim').checked) sim.hit();
  } else if (ev === 'removed') {
    appendLog('📷 Camera: ball removed from the box');
  } else if (ev === 'ready') {
    appendLog('📷 Camera: ball set');
  }
  renderLamp();
};
camera.enableZoneDrawing(() => saveCam());

// ---------- Camera putting ----------
const puttOn = $<HTMLInputElement>('#putt-on');
const puttDir = $<HTMLSelectElement>('#putt-dir');
const puttFlip = $<HTMLInputElement>('#putt-flip');
const puttCal = $<HTMLInputElement>('#putt-cal');
puttOn.checked = camSettings.putt.enabled;
puttDir.value = camSettings.putt.direction;
puttFlip.checked = camSettings.putt.flip;
puttCal.value = String(Math.round(camSettings.putt.calibration * 100));
$('#putt-cal-out').textContent = `${puttCal.value}%`;
const savePutt = () => {
  camera.settings.putt = {
    enabled: puttOn.checked,
    direction: puttDir.value as CameraSettings['putt']['direction'],
    flip: puttFlip.checked,
    calibration: Number(puttCal.value) / 100,
  };
  $('#putt-cal-out').textContent = `${puttCal.value}%`;
  camera.setFast(club === 'PT' && puttOn.checked);
  saveCam();
};
[puttOn, puttDir, puttFlip, puttCal].forEach((el) => el.addEventListener('input', savePutt));
camera.setFast(club === 'PT' && camSettings.putt.enabled);
camera.onPutt = (pm) => {
  if (club !== 'PT') return;
  const mph = msToMph(pm.speedMs);
  appendLog(`📷 Camera putt: ${mph.toFixed(1)} mph, ${pm.directionDeg >= 0 ? 'R' : 'L'}${Math.abs(pm.directionDeg).toFixed(1)}° (${pm.samplesUsed} frames)`);
  addShot({ ballSpeedMph: Math.round(mph * 10) / 10, launchDirectionDeg: Math.round(pm.directionDeg * 10) / 10, launchAngleDeg: 0, spinRpm: 0 }, 'Camera putt');
};
setInterval(() => {
  const d = camera.restDiameterPx;
  $('#putt-readout').textContent = d
    ? `Ball size: ${d.toFixed(1)} px across. Bigger is more accurate; 12+ px is good. Move the camera closer if it's small.`
    : 'Ball size: – (put a ball in the box and wait for the green light)';
}, 1000);

// ---------- Impact replay ----------
const REPLAY_KEY = 'open-sc4.replay.v1';
const replaySaved = loadJson<{ on: boolean; quality: string }>(REPLAY_KEY, { on: true, quality: 'balanced' });
const recorder = new ReplayRecorder();
recorder.quality = REPLAY_QUALITIES.find((q) => q.id === replaySaved.quality) ?? REPLAY_QUALITIES[1];
const player = new ReplayPlayer($('#replay'), $<HTMLCanvasElement>('#replay-canvas'), $<HTMLInputElement>('#replay-scrub'), $('#replay-label'));
const replayOn = $<HTMLInputElement>('#replay-on');
const replayQuality = $<HTMLSelectElement>('#replay-quality');
replayOn.checked = replaySaved.on;
replayQuality.innerHTML = REPLAY_QUALITIES.map((q) => `<option value="${q.id}" ${q === recorder.quality ? 'selected' : ''}>${q.label}</option>`).join('');
const saveReplay = () => saveJson(REPLAY_KEY, { on: replayOn.checked, quality: recorder.quality.id });
replayOn.addEventListener('change', () => {
  if (replayOn.checked && camera.running) recorder.start(camera.video);
  else recorder.stop();
  saveReplay();
});
replayQuality.addEventListener('change', () => {
  recorder.setQuality(REPLAY_QUALITIES.find((q) => q.id === replayQuality.value)!);
  saveReplay();
});
$('#replay-play').addEventListener('click', () => player.play(1));
$('#replay-close').addEventListener('click', () => player.hide());
$('#replay-speed').addEventListener('click', (e) => {
  const speeds = [0.5, 0.25, 1];
  player.speed = speeds[(speeds.indexOf(player.speed) + 1) % speeds.length];
  (e.target as HTMLElement).textContent = player.speed === 1 ? '1×' : player.speed === 0.5 ? '½×' : '¼×';
});

/** Clips are kept in memory only, for the most recent shots. */
const MAX_CLIPS = 6;
const clipsByShot = new Map<string, ReplayClip>();
const clipOrder: ReplayClip[] = [];
let pendingClip: { clip: ReplayClip; at: number } | null = null;
let lastCameraHitAt = 0;

function keepClip(clip: ReplayClip) {
  clipOrder.push(clip);
  while (clipOrder.length > MAX_CLIPS) {
    const old = clipOrder.shift()!;
    for (const [id, c] of clipsByShot) if (c === old) clipsByShot.delete(id);
    if (pendingClip?.clip === old) pendingClip = null;
    releaseClip(old);
  }
}

function onClip(clip: ReplayClip) {
  keepClip(clip);
  // Pair with a shot that already arrived (e.g. simulator), otherwise wait for the radar's shot.
  const recent = [...shots].reverse().find((s) => Date.now() - s.timestamp < 4000 && !clipsByShot.has(s.id));
  if (recent) clipsByShot.set(recent.id, clip);
  else pendingClip = { clip, at: Date.now() };
  player.load(clip, recent ? `Impact replay · ${recent.club}` : 'Impact replay');
}

function attachReplayToShot(shot: Shot) {
  if (pendingClip && Date.now() - pendingClip.at < 6000) {
    clipsByShot.set(shot.id, pendingClip.clip);
    pendingClip = null;
    return;
  }
  // Radar shot without a camera-detected hit: grab what the buffer has from just before now.
  if (recorder.running && Date.now() - lastCameraHitAt > 4000) {
    recorder.capture(performance.now() - 300, 2500, 300).then((clip) => {
      if (!clip) return;
      keepClip(clip);
      clipsByShot.set(shot.id, clip);
      player.load(clip, `Replay · ${shot.club}`);
    });
  }
}
camera.draw();
fillCameraList();

// ---------- Course play ----------
const minimap = new Minimap($<HTMLCanvasElement>('#minimap'));
const imageryCache = new Map<number, HoleImagery | null>();
let imageryForHole: HoleImagery | null = null;
const courseStatus = (t: string) => ($('#course-status').textContent = t);
const yd = (m: number) => Math.round(m * 1.0936);

document.querySelectorAll<HTMLButtonElement>('.mode-toggle button').forEach((b) => {
  b.addEventListener('click', () => setMode(b.dataset.mode as 'range' | 'course'));
});

function setMode(m: 'range' | 'course') {
  if (m === 'course' && !round) {
    openTab('course');
    courseStatus('Find and load a course first.');
    $<HTMLInputElement>('#course-q').focus();
    return;
  }
  mode = m;
  document.querySelectorAll<HTMLButtonElement>('.mode-toggle button').forEach((b) => {
    b.classList.toggle('active', b.dataset.mode === m);
    b.setAttribute('aria-pressed', String(b.dataset.mode === m));
  });
  $('#hole-card').hidden = m !== 'course';
  scene.setMode(m);
  if (m === 'course') loadHoleView();
}

$<HTMLFormElement>('#course-search').addEventListener('submit', async (e) => {
  e.preventDefault();
  const q = $<HTMLInputElement>('#course-q').value.trim();
  if (!q) return;
  const box = $('#course-results');
  box.innerHTML = '';
  courseStatus('Searching for the place…');
  let places;
  try {
    places = await searchPlaces(q.toLowerCase().includes('golf') ? q : `${q} golf`);
  } catch (err) {
    return courseStatus(`Place search didn't work: ${(err as Error).message}. Check your internet connection.`);
  }
  if (!places.length) return courseStatus('No places found. Try the course name plus the town or state, e.g. "Torrey Pines San Diego".');

  // Golf courses the place search found directly can be loaded straight away
  const found = new Map<string, CourseSummary>();
  for (const p of places) if (p.course) found.set(p.course.id, p.course);
  const best = places.find((p) => p.isGolfCourse) ?? places[0];
  showCourses(found, `Looking for more courses near ${best.name}…`);

  try {
    const nearby = await findCourses(best.lat, best.lon, 4000, (host) => courseStatus(`Looking for courses near ${best.name} (asking ${host})…`));
    for (const c of nearby) if (!found.has(c.id)) found.set(c.id, c);
    if (!found.size) return courseStatus(`No golf courses are mapped near ${best.label}. Try another name, or play the practice course.`);
    showCourses(found, `${found.size} course${found.size > 1 ? 's' : ''} found. Pick one to load its holes.`);
  } catch (err) {
    if (found.size) showCourses(found, `Found ${found.size} course${found.size > 1 ? 's' : ''} by name (couldn't search nearby: ${(err as Error).message}). Pick one to load its holes.`);
    else courseStatus(`Couldn't search for courses: ${(err as Error).message}`);
  }
});

function showCourses(found: Map<string, CourseSummary>, status: string) {
  courseStatus(status);
  const box = $('#course-results');
  box.innerHTML = '';
  for (const c of [...found.values()].slice(0, 10)) {
    const btn = document.createElement('button');
    btn.innerHTML = `<strong></strong><small></small>`;
    btn.querySelector('strong')!.textContent = c.name;
    btn.querySelector('small')!.textContent = `${c.center.lat.toFixed(4)}, ${c.center.lon.toFixed(4)}`;
    btn.addEventListener('click', () => startCourse(c));
    box.appendChild(btn);
  }
}

$('#practice-course').addEventListener('click', () => {
  beginRound(practiceCourse());
  courseStatus('Practice course loaded: 3 holes.');
  $('#course-results').innerHTML = '';
});

async function startCourse(summary: CourseSummary) {
  courseStatus(`Loading ${summary.name}…`);
  try {
    let note = '';
    const course = await loadCourse(summary, (host) => courseStatus(`Loading ${summary.name} (asking ${host})…`), (n) => (note = n));
    if (!course.holes.length) {
      return courseStatus(`${summary.name} is on the map, but its holes haven't been mapped in OpenStreetMap yet. Try another course, or play the practice course.`);
    }
    beginRound(course);
    courseStatus(`${course.name}: ${course.holes.length} holes loaded.${note ? ' ' + note : ''}`);
    $('#course-results').innerHTML = '';
  } catch (err) {
    courseStatus(`Couldn't load the course: ${(err as Error).message}`);
  }
}

function beginRound(course: Course) {
  round = new Round(course, { gimmeM });
  imageryCache.clear();
  setMode('course');
  setClub('DR');
  renderScorecard();
}

/** Fetch (or reuse) satellite imagery for the current hole and update the 3D view. */
async function loadHoleView() {
  if (!round) return;
  const idx = round.holeIndex;
  const h = round.hole;
  syncCourseView();
  if (!imageryCache.has(idx)) {
    $('#hole-msg').textContent = round.course.id === 'practice' ? '' : 'Loading satellite view…';
    const pts = [...h.path, h.pin];
    const m = 80;
    const rect = {
      minE: Math.min(...pts.map((p) => p.e)) - m, maxE: Math.max(...pts.map((p) => p.e)) + m,
      minN: Math.min(...pts.map((p) => p.n)) - m, maxN: Math.max(...pts.map((p) => p.n)) + m,
    };
    const drawn = () => buildFeatureImagery(round!.course.features, rect);
    if (round.course.id === 'practice') {
      imageryCache.set(idx, drawn());
    } else {
      try {
        const sat = await buildImagery(round.course.origin, rect);
        // If most tiles failed (offline or blocked), show the drawn course map instead
        imageryCache.set(idx, sat.total && sat.failed / sat.total > 0.5 ? drawn() : sat);
      } catch {
        imageryCache.set(idx, drawn());
      }
    }
    $('#hole-msg').textContent = '';
  }
  if (!round || round.holeIndex !== idx) return; // moved on while loading
  imageryForHole = imageryCache.get(idx) ?? null;
  if (imageryForHole) {
    scene.setSatellite(imageryForHole.canvas, imageryForHole.rect);
    if (imageryForHole.failed) $('#hole-msg').textContent = `${imageryForHole.failed} map tiles didn't load.`;
  }
  syncCourseView();
}

function syncCourseView() {
  if (!round) return;
  const h = round.hole;
  scene.setPin(h.pin);
  const target = { e: round.ball.e + round.aim.e * 200, n: round.ball.n + round.aim.n * 200 };
  scene.setBall(round.ball, round.aim, club === 'PT' ? h.pin : target);
  minimap.draw(round, imageryForHole, club);
  renderHoleCard();
}

function renderHoleCard() {
  if (!round) return;
  const h = round.hole;
  const t = round.totals();
  $('#hole-title').textContent = `Hole ${h.number}`;
  $('#hole-meta').textContent = `Par ${h.par} · ${yd(h.lengthM)} yd · ${round.course.name}`;
  $('#to-pin').textContent = round.holed ? 'In' : `${yd(round.distanceToPin)} yd`;
  $('#lie').textContent = LIE_EFFECT[round.lie].label;
  $('#stroke-no').textContent = String(round.holed ? round.strokesThisHole : round.strokesThisHole + 1);
  $('#round-score').textContent = t.strokes ? (t.toPar === 0 ? 'E' : t.toPar > 0 ? `+${t.toPar}` : String(t.toPar)) : 'E';
  $<HTMLButtonElement>('#next-hole').disabled = round.holeIndex >= round.course.holes.length - 1;
  $<HTMLButtonElement>('#prev-hole').disabled = round.holeIndex === 0;
}

function playCourseShot(m: ShotMeasurement) {
  if (!round) return;
  const out = round.play(m, club, env);
  scene.setBall(out.start, out.aim);
  scene.playShot(out.flight, () => {
    if (!round) return;
    $('#hole-msg').textContent = out.message;
    if (!round.holed && round.lie === 'green' && club !== 'PT') setClub('PT');
    else if (!round.holed) round.autoAim(club);
    syncCourseView();
    renderScorecard();
  });
  minimap.draw(round, imageryForHole, club);
}

function nudgeAim(deg: number) {
  if (!round || round.holed) return;
  round.adjustAim(deg);
  syncCourseView();
}
minimap.onAim = (p) => {
  if (!round || round.holed) return;
  round.aimAt(p);
  syncCourseView();
};
$('#aim-left').addEventListener('click', () => nudgeAim(-1));
$('#aim-right').addEventListener('click', () => nudgeAim(1));
function goHole(i: number) {
  if (!round) return;
  round.startHole(i);
  scene.clearTracers();
  setClub(round.hole.par === 3 ? '7i' : 'DR');
  $('#hole-msg').textContent = '';
  loadHoleView();
  renderScorecard();
}
$('#next-hole').addEventListener('click', () => round && goHole(round.holeIndex + 1));
$('#prev-hole').addEventListener('click', () => round && goHole(round.holeIndex - 1));
$('#restart-hole').addEventListener('click', () => round && goHole(round.holeIndex));

function renderScorecard() {
  if (!round) return;
  $('#scorecard-wrap').hidden = false;
  $('#scorecard-title').textContent = round.course.name;
  const holes = round.course.holes;
  const t = round.totals();
  const cell = (s: number | undefined, par: number) => {
    if (!s) return '<td>–</td>';
    const cls = s < par ? 'under' : s > par ? 'over' : '';
    return `<td class="${cls}" title="${scoreName(s, par)}">${s}</td>`;
  };
  $('#scorecard').innerHTML =
    `<thead><tr><th>Hole</th><th>Par</th><th>Yards</th><th>Score</th></tr></thead><tbody>` +
    holes.map((h, i) => `<tr class="${i === round!.holeIndex ? 'current' : ''}"><td>${h.number}</td><td>${h.par}</td><td>${yd(h.lengthM)}</td>${cell(round!.strokes[i], h.par)}</tr>`).join('') +
    `<tr><td><strong>Total</strong></td><td>${holes.reduce((a, h) => a + h.par, 0)}</td><td>${yd(holes.reduce((a, h) => a + h.lengthM, 0))}</td><td><strong>${t.strokes || '–'}${t.strokes ? ` (${t.toPar === 0 ? 'E' : t.toPar > 0 ? '+' + t.toPar : t.toPar})` : ''}</strong></td></tr></tbody>`;
}

window.addEventListener('resize', () => round && mode === 'course' && minimap.draw(round, imageryForHole, club));

// ---------- Device / protocol tab ----------
const profileJson = $<HTMLTextAreaElement>('#profile-json');
const showProfile = () => (profileJson.value = JSON.stringify(profile, null, 2));
showProfile();
$('#profile-save').addEventListener('click', () => {
  try {
    profile = validateProfile(JSON.parse(profileJson.value));
    ble.profile = profile;
    saveJson(PROFILE_KEY, profile);
    $('#profile-msg').textContent = 'Saved ✓ (reconnect to apply)';
  } catch (e) {
    $('#profile-msg').textContent = `Invalid: ${(e as Error).message}`;
  }
});
$('#profile-reset').addEventListener('click', () => {
  profile = SC4_PRO_PROFILE;
  ble.profile = profile;
  saveJson(PROFILE_KEY, profile);
  showProfile();
  $('#profile-msg').textContent = 'Reset to default';
});
$<HTMLInputElement>('#accept-all').addEventListener('change', (e) => {
  ble.acceptAllDevices = (e.target as HTMLInputElement).checked;
});
const logEl = $('#log');
function appendLog(line: string) {
  const ts = new Date().toLocaleTimeString();
  logEl.textContent += `[${ts}] ${line}\n`;
  if (logEl.textContent!.length > 200_000) logEl.textContent = logEl.textContent!.slice(-150_000);
  logEl.scrollTop = logEl.scrollHeight;
}
$('#log-clear').addEventListener('click', () => (logEl.textContent = ''));
$<HTMLFormElement>('#label-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const screen: Record<string, number> = {};
  for (const [k, v] of new FormData(form).entries()) {
    const n = parseFloat(String(v));
    if (Number.isFinite(n)) screen[k] = n;
  }
  if (!Object.keys(screen).length) return ($('#label-msg').textContent = 'Type at least one number from the SC4 Pro screen.');
  const p = ble.labelLatest(screen);
  if (!p) return ($('#label-msg').textContent = 'No SC4 Pro message yet. Hit a shot first, then save.');
  appendLog(`✎ Screen for message at ${new Date(p.t).toLocaleTimeString()}: ${Object.entries(screen).map(([k, v]) => `${k}=${v}`).join(', ')}`);
  $('#label-msg').textContent = 'Saved.';
  form.reset();
});
$('#log-copy').addEventListener('click', async () => {
  const text = ble.exportCapture() + '\n\n' + (logEl.textContent ?? '');
  try {
    await navigator.clipboard.writeText(text);
    $('#label-msg').textContent = 'Copied. Paste it into a message to share it.';
  } catch {
    // Clipboard blocked: show the text selected so it can be copied by hand
    logEl.textContent = text;
    const r = document.createRange();
    r.selectNodeContents(logEl);
    getSelection()?.removeAllRanges();
    getSelection()?.addRange(r);
    $('#label-msg').textContent = 'Copy was blocked. The log is selected; use your browser’s Copy.';
  }
});
$<HTMLFormElement>('#send-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = $<HTMLInputElement>('#send-hex');
  try {
    await ble.sendHex(input.value);
  } catch (err) {
    appendLog(`Couldn't send: ${(err as Error).message}`);
  }
});
$('#log-export').addEventListener('click', () => download(`opensc4-capture-${dateStamp()}.json`, ble.exportCapture(), 'application/json'));
if (!ble.isSupported()) appendLog('Web Bluetooth not available in this browser – use Chrome or Edge (desktop or Android) on https:// or localhost.');

// ---------- Conditions ----------
const envForm = $<HTMLFormElement>('#env-form');
function readEnv() {
  const d = new FormData(envForm);
  const num = (k: string) => parseFloat(String(d.get(k)));
  const altM = num('altitudeFt') * 0.3048;
  const tempK = (num('tempF') - 32) * (5 / 9) + 273.15;
  const pressure = 101325 * Math.pow(1 - 2.25577e-5 * altM, 5.25588);
  env = {
    airDensity: pressure / (287.05 * tempK),
    windSpeed: num('windMph') * 0.44704,
    windDirectionDeg: num('windDir'),
    firmness: num('firmness'),
    stimp: Number.isFinite(num('stimp')) ? num('stimp') : 10,
  };
  gimmeM = Number.isFinite(num('gimme')) ? num('gimme') : 0;
  if (round) round.opts.gimmeM = gimmeM;
  $('#env-summary').textContent = `Air density ${env.airDensity.toFixed(3)} kg/m³ (sea level standard is 1.225). Applies to new shots.`;
  saveJson('open-sc4.env', Object.fromEntries(d.entries()));
}
const savedEnv = loadJson<Record<string, string>>('open-sc4.env', {});
for (const [k, v] of Object.entries(savedEnv)) {
  const el = envForm.elements.namedItem(k) as HTMLInputElement | null;
  if (el) el.value = v;
}
envForm.addEventListener('input', readEnv);
readEnv();

// ---------- Tabs ----------
function openTab(name: string) {
  document.querySelectorAll<HTMLButtonElement>('.tab-bar button').forEach((b) => b.classList.toggle('active', b.dataset.tab === name));
  document.querySelectorAll('.tab-panel').forEach((p) => p.classList.toggle('active', p.getAttribute('data-panel') === name));
}
document.querySelectorAll<HTMLButtonElement>('.tab-bar button').forEach((btn) => {
  btn.addEventListener('click', () => openTab(btn.dataset.tab!));
});

// ---------- Helpers ----------
function download(name: string, content: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = Object.assign(document.createElement('a'), { href: url, download: name });
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function dateStamp() {
  return new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
}

// ---------- Offline support (only when served from a website, not a local file) ----------
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  navigator.serviceWorker.register('./sw.js').catch(() => {
    /* offline support is optional */
  });
}

// ---------- Initial render ----------
renderStatus();
renderTiles(shots[shots.length - 1]);
renderHistory();
renderStats();
sim.connect();
