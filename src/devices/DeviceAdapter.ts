import type { ShotMeasurement } from '../types';
import type { DeviceReadiness } from './frameDecoder';

export type DeviceStatus = 'disconnected' | 'connecting' | 'connected' | 'error';

export interface DeviceEvents {
  shot: (shot: ShotMeasurement) => void;
  status: (status: DeviceStatus, detail?: string) => void;
  log: (line: string) => void;
  /** Raw data received from the device (for activity indicators / capture) */
  packet: (source: string, hex: string) => void;
  /** The device reported that it is (or isn't) armed and ready to measure */
  readiness: (state: DeviceReadiness) => void;
  /** The device registered a shot (e.g. an SC4 Pro "Ss" header), before any numbers are decoded */
  shotEvent: (summary: string) => void;
}

/**
 * Every launch monitor integration implements this interface.
 * To add a new device, implement it and register it in src/devices/index.ts.
 */
export interface DeviceAdapter {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  /** Whether this adapter can run in the current browser */
  isSupported(): boolean;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  on<K extends keyof DeviceEvents>(event: K, cb: DeviceEvents[K]): () => void;
}

/** Small typed event emitter shared by adapters. */
export abstract class BaseAdapter implements DeviceAdapter {
  abstract readonly id: string;
  abstract readonly name: string;
  abstract readonly description: string;
  abstract isSupported(): boolean;
  abstract connect(): Promise<void>;
  abstract disconnect(): Promise<void>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private listeners = new Map<keyof DeviceEvents, Set<(...args: any[]) => void>>();

  on<K extends keyof DeviceEvents>(event: K, cb: DeviceEvents[K]): () => void {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set());
    const set = this.listeners.get(event)!;
    set.add(cb);
    return () => set.delete(cb);
  }

  protected emit<K extends keyof DeviceEvents>(event: K, ...args: Parameters<DeviceEvents[K]>): void {
    this.listeners.get(event)?.forEach((cb) => cb(...args));
  }
}
