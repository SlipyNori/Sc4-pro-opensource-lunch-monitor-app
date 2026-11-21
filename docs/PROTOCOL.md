# Reverse-engineering the SC4 Pro Bluetooth protocol

The goal is a verified **device profile** (JSON) that tells the app how to turn the SC4 Pro's Bluetooth packets into shot data. Nothing here requires modifying the device or its firmware: we only observe the data it already sends.

> Please only analyse a device you own, and don't publish anything that isn't needed for interoperability (no app binaries, keys, or account data).

## What we know so far

| Item | Value | Source |
|---|---|---|
| Advertised name | `SC4PRO <4 digits>` (e.g. `SC4PRO 0514`) | Chrome `bluetooth-internals` scan |
| Device information | model `904`, firmware `200`, hardware `200`, manufacturer `VC Inc` | `0x180A` reads |
| Battery | `0x2A19` read/notify (one byte, percent) | `0x180F` |
| Vendor service | `50340001-2065-6964-6461-63676e697773` | same |
| Command channel | `50340002-…` write / write-without-response | OpenSC4 Device log |
| Data channel | `50340003-…` notify | OpenSC4 Device log |
| Start command | *unknown: the device may stay silent until the official app sends one* | |
| Shot frame layout | *not yet decoded* | |

**On Windows:** Chrome's `bluetooth-internals` page showed no characteristics at all, but OpenSC4's own connection (Web Bluetooth with the vendor service requested) lists and subscribes to them fine.

**Waking the device:** the SC4 Pro doesn't advertise on its own. Open the Swing Caddie app so it connects, then turn the phone's Bluetooth **off in Settings**. The SC4 Pro then stays discoverable for a while, long enough to scan and connect from a computer.

**No phone app needed for discovery:** in Chrome or Edge on a computer, open `chrome://bluetooth-internals` (or `edge://bluetooth-internals`), go to **Devices**, click **Start scan**, then **Inspect** the `SC4PRO` entry. It lists services, characteristics and their properties, and can subscribe to notifications.

## 1. Find the services and characteristics

Web Bluetooth can only open GATT services that are listed **up front**, so we first need the UUIDs.

1. Install a BLE scanner such as **nRF Connect** (Android/iOS).
2. Turn on the SC4 Pro and make sure the official app is **not** connected (most BLE devices accept only one connection at a time).
3. Scan, note the **advertised name**, connect, and write down every **service UUID** and each characteristic's UUID and properties (`READ`, `WRITE`, `NOTIFY`, `INDICATE`).

## 2. Capture packets with OpenSC4

1. Open the app in Chrome/Edge → **Device / protocol** tab.
2. Edit the profile: put the advertised name prefix in `namePrefixes` and the service UUIDs in `services`. Click **Apply profile**. (If the device doesn't appear in the chooser, tick *Show all nearby Bluetooth devices*.)
3. Pick **Bluetooth** in the device menu and click **Connect**. The log lists every service and characteristic and subscribes to anything that notifies.
4. Hit shots. For **each** shot, write down what the SC4 Pro shows (ball speed, club speed, launch angle, spin, carry, …).
5. Click **Download capture (JSON)**.

**If no packets arrive,** the device may need a command written to a characteristic before it streams data, e.g. to enter a "simulator/connect" mode. Capturing what the official app sends (Android: *Developer options → Enable Bluetooth HCI snoop log*, then open the log in Wireshark) shows that handshake. Please document it in an issue; adding "write on connect" support to the adapter is a small change.

## 3. Correlate bytes with values

Line packets up with the numbers you wrote down:

- Look for a packet that arrives once per shot, with a fixed length and a constant first byte or two (a header/message type). That goes in `match`.
- For a known value, e.g. ball speed 145.2 mph, look for `1452` (0x05AC → `AC 05` little-endian or `05 AC` big-endian), `145`, or the km/h or m/s equivalents.
- Signed values such as launch direction and spin axis are usually `int16`, so check negatives (left shots).
- Hitting deliberately different shots (short chip vs. full driver) makes the changing bytes stand out.

## 4. Write the profile

```json
{
  "name": "Swing Caddie SC4 Pro (firmware x.y)",
  "namePrefixes": ["<advertised name prefix>"],
  "services": ["<service uuid>"],
  "shotCharacteristic": "<notify characteristic uuid>",
  "match": { "length": 20, "prefix": "AA 01" },
  "fields": {
    "ballSpeedMph":       { "offset": 2,  "type": "uint16le", "scale": 0.1 },
    "clubSpeedMph":       { "offset": 4,  "type": "uint16le", "scale": 0.1 },
    "launchAngleDeg":     { "offset": 6,  "type": "int16le",  "scale": 0.1 },
    "launchDirectionDeg": { "offset": 8,  "type": "int16le",  "scale": 0.1 },
    "spinRpm":            { "offset": 10, "type": "uint16le" },
    "spinAxisDeg":        { "offset": 12, "type": "int16le",  "scale": 0.1 }
  }
}
```

*(The offsets above are an illustration, not the real layout.)*

- Supported types: `uint8 int8 uint16le uint16be int16le int16be uint32le uint32be int32le int32be float32le float32be`.
- `scale` and `add` convert units: km/h → mph is `"scale": 0.621371`, m/s → mph is `"scale": 2.23694`.
- Decodable fields: `ballSpeedMph clubSpeedMph launchAngleDeg launchDirectionDeg spinRpm spinAxisDeg deviceCarryYd deviceTotalYd`.

Paste it into the app, click **Apply profile**, reconnect, and hit shots. The numbers should match the device's screen.

## 5. Contribute it

Open a PR that:

1. Updates `SC4_PRO_PROFILE` in `src/devices/profiles.ts` and notes the firmware version.
2. Adds a test in `tests/frameDecoder.test.ts` using a few real captured frames and the values the device displayed for them.
3. Updates this document with what you learned (handshakes, units, quirks).
