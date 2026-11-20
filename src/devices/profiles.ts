import type { DeviceProfile } from './frameDecoder';

/**
 * Starter profile for the Swing Caddie SC4 Pro.
 *
 * ⚠️ The byte layout below is intentionally EMPTY: the SC4 Pro protocol has not
 * been published, and we don't want to ship guesses that silently produce wrong
 * numbers. Until someone captures and verifies it (see docs/PROTOCOL.md), this
 * profile runs in "capture mode": it connects, subscribes to every notifying
 * characteristic it can see, and logs raw packets so they can be analysed.
 *
 * The name prefixes and service list are also best-effort; edit them in the
 * app's "Device profile" panel to match what a BLE scanner shows for your unit.
 */
export const SC4_PRO_PROFILE: DeviceProfile = {
  name: 'Swing Caddie SC4 Pro (capture mode – protocol unverified)',
  notes: 'Fill in services/fields once captured. See docs/PROTOCOL.md.',
  namePrefixes: ['SC4', 'SC-4', 'Swing Caddie', 'SwingCaddie', 'VoiceCaddie'],
  services: [
    // Commonly used vendor UART service on many BLE devices (Nordic UART). Harmless if absent.
    '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
    // Standard services, useful for identifying firmware/model during capture.
    'device_information',
    'battery_service',
  ],
  fields: {},
};

/** An example of a fully specified profile, used by tests and as documentation. */
export const EXAMPLE_PROFILE: DeviceProfile = {
  name: 'Example (documentation only – not a real device)',
  namePrefixes: ['EXAMPLE'],
  services: ['0000fff0-0000-1000-8000-00805f9b34fb'],
  shotCharacteristic: '0000fff1-0000-1000-8000-00805f9b34fb',
  match: { length: 14, prefix: 'A5 01' },
  fields: {
    ballSpeedMph: { offset: 2, type: 'uint16le', scale: 0.1 },
    clubSpeedMph: { offset: 4, type: 'uint16le', scale: 0.1 },
    launchAngleDeg: { offset: 6, type: 'int16le', scale: 0.1 },
    launchDirectionDeg: { offset: 8, type: 'int16le', scale: 0.1 },
    spinRpm: { offset: 10, type: 'uint16le' },
    spinAxisDeg: { offset: 12, type: 'int16le', scale: 0.1 },
  },
};
