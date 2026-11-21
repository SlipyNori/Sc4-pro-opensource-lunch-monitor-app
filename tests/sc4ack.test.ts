import { afterEach, describe, expect, it, vi } from 'vitest';
import { BluetoothDevice } from '../src/devices/BluetoothDevice';
import { SC4_PRO_PROFILE } from '../src/devices/profiles';
import { hexToBytes } from '../src/devices/frameDecoder';

// Real frames from the device: part 1 (header) and part 2 (released by echoing part 1 back)
const P1 = '53 73 00 00 01 1A 0B 14 17 04 15 00 14 00 00 60 42 00 45 D5';
const P2 = '53 73 00 00 02 52 F8 77 44 00 00 00 42 93 B9 4C 41 00 45 D3';
const DATA = '50340003-2065-6964-6461-63676e697773';

function setup() {
  const dev = new BluetoothDevice(SC4_PRO_PROFILE);
  const sent: string[] = [];
  const logs: string[] = [];
  const events: string[] = [];
  // Stand in for the radio: record what would be written to the command channel
  (dev as unknown as { sendHex: (h: string) => Promise<void> }).sendHex = async (h: string) => { sent.push(h); };
  dev.on('log', (l) => logs.push(l));
  dev.on('shotEvent', (s) => events.push(s));
  const feed = (hex: string) => {
    const b = hexToBytes(hex);
    (dev as unknown as { onPacket: (u: string, v: DataView, s: null) => void }).onPacket(DATA, new DataView(b.buffer), null);
  };
  return { dev, sent, logs, events, feed };
}

describe('SC4 Pro acknowledge flow', () => {
  afterEach(() => vi.useRealTimers());

  it('echoes each part back, so the device sends the next one', () => {
    vi.useFakeTimers();
    const { sent, events, feed } = setup();
    feed(P1);
    vi.advanceTimersByTime(50);
    expect(sent).toEqual([P1]);
    expect(events[0]).toContain('registered a shot');
    feed(P2);
    vi.advanceTimersByTime(50);
    expect(sent).toEqual([P1, P2]);
  });

  it('never acknowledges the same frame twice in a row (no loops)', () => {
    vi.useFakeTimers();
    const { sent, feed } = setup();
    feed(P1); vi.advanceTimersByTime(50);
    feed(P1); vi.advanceTimersByTime(50);
    expect(sent).toEqual([P1]);
  });

  it('logs the whole shot once the parts stop', () => {
    vi.useFakeTimers();
    const { logs, feed } = setup();
    feed(P1); vi.advanceTimersByTime(50);
    feed(P2); vi.advanceTimersByTime(2000);
    expect(logs.some((l) => l.startsWith('★ Shot complete · 2 parts · club 20 · loft 56°'))).toBe(true);
    expect(logs.some((l) => l.includes('p2: 991.88, 32, 12.795'))).toBe(true);
  });

  it('sends a shot to the app with the real ball speed and club', () => {
    vi.useFakeTimers();
    const { dev, feed } = setup();
    const shots: { ballSpeedMph: number; clubHint?: string }[] = [];
    dev.on('shot', (s) => shots.push(s));
    feed(P1); vi.advanceTimersByTime(50);
    feed(P2); vi.advanceTimersByTime(2000);
    expect(shots).toHaveLength(1);
    expect(shots[0]).toMatchObject({ ballSpeedMph: 28.6, clubHint: 'SW' });
  });

  it('does nothing when automatic acknowledge is off', () => {
    vi.useFakeTimers();
    const { dev, sent, feed } = setup();
    dev.autoAck = false;
    feed(P1); vi.advanceTimersByTime(50);
    expect(sent).toEqual([]);
  });
});
