import { RangeScene, type CameraMode } from './render/RangeScene';
import { SimulatedDevice } from './devices/SimulatedDevice';
import { BluetoothDevice } from './devices/BluetoothDevice';
import type { DeviceAdapter, DeviceStatus } from './devices/DeviceAdapter';
import { validateProfile, type DeviceProfile } from './devices/frameDecoder';
import { SC4_PRO_PROFILE } from './devices/profiles';
import { completeMeasurement, processShot } from './session/processShot';
import { statsByClub } from './session/stats';
import { csvToMeasurements, shotsToCsv } from './session/csv';
import { loadJson, loadShots, saveJson, saveShots } from './session/store';
import { DEFAULT_ENVIRONMENT, simulateShot, type Environment } from './physics/ballFlight';
import { CLUBS, type ClubId, type Shot, type ShotMeasurement } from './types';

const $ = <T extends HTMLElement = HTMLElement>(sel: string) => document.querySelector(sel) as T;

// ---------- State ----------
let shots: Shot[] = loadShots();
let club: ClubId = loadJson<ClubId>('open-sc4.club', 'DR');
let env: Environment = { ...DEFAULT_ENVIRONMENT };
const PROFILE_KEY = 'open-sc4.profile.v1';
let profile: DeviceProfile = loadJson<DeviceProfile>(PROFILE_KEY, SC4_PRO_PROFILE);

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
  scene.playShot(flight);
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
  club = clubSelect.value as ClubId;
  sim.club = club;
  saveJson('open-sc4.club', club);
});
sim.club = club;

const hitBtn = $<HTMLButtonElement>('#hit-btn');
hitBtn.addEventListener('click', async () => {
  if (active !== sim) return;
  if (status !== 'connected') await sim.connect();
  sim.hit();
});
document.addEventListener('keydown', (e) => {
  const tag = (e.target as HTMLElement).tagName;
  if (e.code === 'Space' && !['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(tag)) {
    e.preventDefault();
    hitBtn.click();
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
  if (status === 'connecting') packetCount = 0, lastPacketAt = 0;
  renderActivity();
}

// ---------- Range toolbar ----------
$<HTMLSelectElement>('#camera-select').addEventListener('change', (e) => {
  scene.setCameraMode((e.target as HTMLSelectElement).value as CameraMode);
});
$('#clear-tracers').addEventListener('click', () => scene.clearTracers());

// ---------- Shot tiles ----------
function renderTiles(s?: Shot) {
  $('#last-club').textContent = s ? s.club : '';
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
  scene.playShot(simulateShot(completeMeasurement(s, s.club), env));
  renderTiles(s);
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
  };
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
document.querySelectorAll<HTMLButtonElement>('.tab-bar button').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-bar button').forEach((b) => b.classList.toggle('active', b === btn));
    document.querySelectorAll('.tab-panel').forEach((p) => p.classList.toggle('active', p.getAttribute('data-panel') === btn.dataset.tab));
  });
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

// ---------- Initial render ----------
renderStatus();
renderTiles(shots[shots.length - 1]);
renderHistory();
renderStats();
sim.connect();
