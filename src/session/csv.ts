import { CLUBS, type ClubId, type Shot, type ShotMeasurement } from '../types';

const COLUMNS: (keyof Shot)[] = [
  'timestamp', 'club', 'source', 'clubSpeedMph', 'ballSpeedMph', 'smashFactor', 'launchAngleDeg',
  'launchDirectionDeg', 'spinRpm', 'spinAxisDeg', 'carryYd', 'totalYd', 'offlineYd', 'apexFt',
  'landingAngleDeg', 'flightTimeS', 'deviceCarryYd', 'deviceTotalYd',
];

export function shotsToCsv(shots: Shot[]): string {
  const rows = shots.map((s) =>
    COLUMNS.map((c) => {
      const v = s[c];
      if (v === undefined) return '';
      if (c === 'timestamp') return new Date(v as number).toISOString();
      return csvCell(String(v));
    }).join(','),
  );
  return [COLUMNS.join(','), ...rows].join('\n');
}

function csvCell(s: string) {
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/**
 * Import shots from a CSV with a header row. Recognises this app's own export
 * and common column names (e.g. "Ball Speed", "Launch Angle", "Back Spin").
 */
export function csvToMeasurements(text: string): { club: ClubId; m: ShotMeasurement }[] {
  const lines = text.split(/\r?\n/).filter((l) => l.trim());
  if (lines.length < 2) return [];
  const header = parseLine(lines[0]).map(normaliseHeader);
  const find = (...names: string[]) => header.findIndex((h) => names.includes(h));
  const idx = {
    club: find('club'),
    ball: find('ballspeedmph', 'ballspeed', 'ballspd'),
    clubSpeed: find('clubspeedmph', 'clubspeed', 'clubheadspeed', 'clubspd'),
    launch: find('launchangledeg', 'launchangle', 'launch', 'vla'),
    dir: find('launchdirectiondeg', 'launchdirection', 'direction', 'hla'),
    spin: find('spinrpm', 'spin', 'spinrate', 'backspin', 'totalspin'),
    axis: find('spinaxisdeg', 'spinaxis', 'axis'),
    carry: find('carryyd', 'carry', 'carrydistance'),
    total: find('totalyd', 'total', 'totaldistance'),
  };
  if (idx.ball < 0) throw new Error('CSV needs a ball speed column');
  const num = (cells: string[], i: number) => {
    if (i < 0) return undefined;
    const v = parseFloat(cells[i]);
    return Number.isFinite(v) ? v : undefined;
  };
  const out: { club: ClubId; m: ShotMeasurement }[] = [];
  for (const line of lines.slice(1)) {
    const c = parseLine(line);
    const ball = num(c, idx.ball);
    if (!ball) continue;
    const clubRaw = idx.club >= 0 ? c[idx.club]?.trim().toUpperCase() : '';
    const club = (CLUBS as readonly string[]).includes(clubRaw) ? (clubRaw as ClubId) : '7i';
    out.push({
      club,
      m: {
        ballSpeedMph: ball,
        clubSpeedMph: num(c, idx.clubSpeed),
        launchAngleDeg: num(c, idx.launch),
        launchDirectionDeg: num(c, idx.dir),
        spinRpm: num(c, idx.spin),
        spinAxisDeg: num(c, idx.axis),
        deviceCarryYd: num(c, idx.carry),
        deviceTotalYd: num(c, idx.total),
      },
    });
  }
  return out;
}

const normaliseHeader = (h: string) => h.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z]/g, '');

function parseLine(line: string): string[] {
  const out: string[] = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (q) {
      if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (ch === '"') q = false;
      else cur += ch;
    } else if (ch === '"') q = true;
    else if (ch === ',') { out.push(cur); cur = ''; }
    else cur += ch;
  }
  out.push(cur);
  return out;
}
