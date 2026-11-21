import type { Shot } from '../types';

const KEY = 'open-sc4.shots.v1';

/** Shots are kept in this browser only (localStorage). Export CSV to keep them elsewhere. */
export function loadShots(): Shot[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Shot[]) : [];
  } catch {
    return [];
  }
}

export function saveShots(shots: Shot[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(shots.slice(-2000)));
  } catch {
    /* storage unavailable (private mode, quota) – keep in memory only */
  }
}

export function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function saveJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch { /* ignore */ }
}
