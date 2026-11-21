import { BaseAdapter } from './DeviceAdapter';
import { bytesToHex, decodeFrame, matchStatus, type DeviceProfile } from './frameDecoder';

/**
 * Web Bluetooth launch-monitor adapter.
 *
 * Works in Chrome/Edge on desktop & Android (Web Bluetooth is not available in
 * Safari/iOS or Firefox). Connects using a DeviceProfile, subscribes to every
 * notifying characteristic in the profile's services, logs all packets as hex,
 * and decodes shots when the profile describes the frame layout.
 */
export class BluetoothDevice extends BaseAdapter {
  readonly id = 'bluetooth';
  readonly name = 'Bluetooth (Web Bluetooth)';
  readonly description = 'Connect to a BLE launch monitor such as the SC4 Pro using a device profile.';

  /** If true, show every nearby BLE device in the chooser instead of filtering by name. */
  acceptAllDevices = false;
  private device: BluetoothDevice_ | null = null;
  private chars: BluetoothRemoteGATTCharacteristic[] = [];
  /** Captured packets (for export / protocol research) */
  readonly capture: { t: number; char: string; hex: string }[] = [];

  constructor(public profile: DeviceProfile) {
    super();
  }

  isSupported() {
    return typeof navigator !== 'undefined' && 'bluetooth' in navigator;
  }

  async connect() {
    if (!this.isSupported()) {
      throw new Error('Web Bluetooth is not available. Use Chrome or Edge on desktop/Android over HTTPS or localhost.');
    }
    this.emit('status', 'connecting');
    const services = this.profile.services.map(normaliseUuid);
    const options: RequestDeviceOptions = this.acceptAllDevices || !this.profile.namePrefixes.length
      ? { acceptAllDevices: true, optionalServices: services }
      : { filters: this.profile.namePrefixes.map((namePrefix) => ({ namePrefix })), optionalServices: services };

    try {
      const device = await navigator.bluetooth.requestDevice(options);
      this.device = device;
      device.addEventListener('gattserverdisconnected', () => {
        this.emit('status', 'disconnected', 'Device disconnected');
      });
      this.emit('log', `Selected "${device.name ?? 'unnamed'}" (${device.id})`);
      const server = await device.gatt!.connect();
      await this.subscribeAll(server);
      this.emit('status', 'connected', device.name ?? 'Connected');
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      this.emit('status', 'error', msg);
      throw err;
    }
  }

  private async subscribeAll(server: BluetoothRemoteGATTServer) {
    let primary: BluetoothRemoteGATTService[] = [];
    try {
      primary = await server.getPrimaryServices();
    } catch (e) {
      this.emit('log', `Could not list services: ${(e as Error).message}`);
    }
    if (!primary.length) {
      this.emit('log', 'No accessible services. Add the device\'s service UUIDs to the profile (find them with a BLE scanner app such as nRF Connect).');
    }
    const shotChar = this.profile.shotCharacteristic
      ? BluetoothUUID.getCharacteristic(normaliseUuid(this.profile.shotCharacteristic))
      : null;

    for (const svc of primary) {
      this.emit('log', `Service ${svc.uuid}`);
      let chars: BluetoothRemoteGATTCharacteristic[] = [];
      try {
        chars = await svc.getCharacteristics();
      } catch (e) {
        this.emit('log', `  (cannot read characteristics: ${(e as Error).message})`);
        continue;
      }
      for (const ch of chars) {
        const p = ch.properties;
        const props = [p.read && 'read', p.write && 'write', p.writeWithoutResponse && 'writeNR', p.notify && 'notify', p.indicate && 'indicate']
          .filter(Boolean).join(',');
        this.emit('log', `  Characteristic ${ch.uuid} [${props}]`);
        if (p.read) {
          try {
            const v = await ch.readValue();
            this.emit('log', `    read: ${bytesToHex(v)}  "${printable(v)}"`);
          } catch { /* not readable without auth etc. */ }
        }
        if (p.notify || p.indicate) {
          try {
            await ch.startNotifications();
            ch.addEventListener('characteristicvaluechanged', (ev) => {
              const value = (ev.target as BluetoothRemoteGATTCharacteristic).value!;
              this.onPacket(ch.uuid, value, shotChar);
            });
            this.chars.push(ch);
          } catch (e) {
            this.emit('log', `    (subscribe failed: ${(e as Error).message})`);
          }
        }
      }
    }
  }

  private onPacket(charUuid: string, value: DataView, shotChar: string | null) {
    const bytes = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    const hex = bytesToHex(bytes);
    this.capture.push({ t: Date.now(), char: charUuid, hex });
    this.emit('log', `◀ ${charUuid.slice(4, 8)} ${hex}`);
    this.emit('packet', charUuid, hex);
    const readiness = matchStatus(bytes, this.profile);
    if (readiness) {
      this.emit('readiness', readiness);
      return;
    }
    if (shotChar && charUuid !== shotChar) return;
    if (!Object.keys(this.profile.fields).length) return;
    const shot = decodeFrame(bytes, this.profile);
    if (shot) this.emit('shot', shot);
  }

  async disconnect() {
    for (const ch of this.chars) {
      try { await ch.stopNotifications(); } catch { /* ignore */ }
    }
    this.chars = [];
    this.device?.gatt?.disconnect();
    this.device = null;
    this.emit('status', 'disconnected');
  }

  exportCapture(): string {
    return JSON.stringify({ profile: this.profile.name, packets: this.capture }, null, 2);
  }
}

type BluetoothDevice_ = globalThis.BluetoothDevice;

function normaliseUuid(u: string): BluetoothServiceUUID {
  const s = u.trim().toLowerCase();
  if (/^0x[0-9a-f]{4}$/.test(s)) return parseInt(s, 16);
  if (/^[0-9a-f]{4}$/.test(s)) return parseInt(s, 16);
  return s;
}

function printable(v: DataView): string {
  let s = '';
  for (let i = 0; i < v.byteLength; i++) {
    const c = v.getUint8(i);
    s += c >= 32 && c < 127 ? String.fromCharCode(c) : '.';
  }
  return s;
}
