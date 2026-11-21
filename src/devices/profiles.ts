import type { DeviceProfile } from './frameDecoder';

/**
 * Profile for the Swing Caddie SC4 Pro.
 *
 * Confirmed from a real unit (advertised name "SC4PRO 0514"):
 *   - Advertised name starts with "SC4PRO"
 *   - Vendor GATT service 50340001-2065-6964-6461-63676e697773
 *     (the trailing bytes are "swingcaddie" in reverse ASCII)
 *   - Standard Device Information (0x180A) and Battery (0x180F) services
 *   - The unit only advertises after the official app wakes its Bluetooth;
 *     disconnect the phone and it stays discoverable for a while.
 *
 * ⚠️ The shot frame layout (`fields`) is still EMPTY: it hasn't been captured
 * and verified yet. Until it is, this profile runs in "capture mode": it
 * connects, subscribes to every notifying characteristic and logs raw packets.
 * See docs/PROTOCOL.md.
 */
export const SC4_PRO_PROFILE: DeviceProfile = {
  name: 'Swing Caddie SC4 Pro (capture mode – shot format not yet decoded)',
  notes: 'Service UUID confirmed. Characteristics and frame layout still to be captured. See docs/PROTOCOL.md.',
  namePrefixes: ['SC4PRO', 'SC4'],
  services: [
    '50340001-2065-6964-6461-63676e697773',
    'device_information',
    'battery_service',
  ],
  fields: {},
  // Ready / not-ready status packets: unknown until captured. Example shape:
  // status: { ready: { prefix: "XX YY" }, notReady: { prefix: "XX ZZ" } }
  status: {},
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
