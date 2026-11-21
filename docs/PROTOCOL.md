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
| Start command | **none needed**: the data channel sends a frame after a hit without any command | first capture, 2026-11-20 |
| Serial number | `0x2A25` reads `SC40B25000514` | iOS / Bluefy |
| Hit frame (`"Ss"`, 20 bytes) | see below | first capture |

### First captured frame

`53 73 00 00 01 1A 0B 14 16 27 0C 00 14 00 00 60 42 00 45 BC`, received at 22:39:14 right after a shot.
The device screen for that shot: Practice · **SW/56.0°** · shot **1** · carry 31.1 yd · swing 40.8 mph · ball 45.3 mph · smash 1.11 · launch angle 16.3° · launch direction −0.7° · apex 6.8 ft · spin (blank).

| Bytes | Value | Meaning |
|---|---|---|
| 0–1 | `53 73` = "Ss" | message type: shot header |
| 2–4 | `00 00 01` | shot number (matches the screen's counter) |
| 5–10 | `1A 0B 14 16 27 0C` | device clock: 2026-11-20 22:39:12 (YY MM DD hh mm ss) |
| 11–12 | `00 14` | club code, 20 = SW (to confirm with other clubs) |
| 13–16 | `00 00 60 42` | float32 little-endian = 56.0 = **club loft** (SW/56.0° on screen) |
| 17–18 | `00 45` | unknown |
| 19 | `BC` | checksum: all 20 bytes sum to 0 (mod 256), confirmed |

None of the shot's measurements appear in this first frame. **The device sends a shot in parts and waits for each part to be acknowledged:** writing the same 20 bytes back to the command channel (`50340002`) makes it send the next part straight away. Bytes 2–4 are therefore the **part number**, not a shot number. OpenSC4 now acknowledges automatically (Device tab checkbox).

### Part 2 (released by acknowledging part 1)

`53 73 00 00 02 52 F8 77 44 00 00 00 42 93 B9 4C 41 00 45 D3`: three float32 little-endian values, **991.88 · 32.0 · 12.795**.

The device screen for this shot (counter 3): carry 17.0 yd · swing 30.5 mph · ball 28.6 mph · launch direction 6.8° right · apex 9.8 ft · smash, launch angle and spin shown as "--".

| Part 2 value | Meaning |
|---|---|
| 1: 991.88 | unknown (spin in rpm? shown as "--" on screen) |
| 2: 32.0 | unknown (launch angle in degrees? shown as "--") |
| 3: 12.795 | **ball speed in m/s, confirmed** (12.795 m/s = 28.6 mph) |

So values are sent in **SI units** (m/s, probably metres) and converted for the screen. Expected in later parts for this shot: swing ≈ 13.63 m/s, carry ≈ 15.5 m, apex ≈ 3.0 m, launch direction ≈ 6.8°.

Confirmed again on a second shot (screen: ball 28.5 mph → app 28.5 mph).

### Full shot (6 parts), decoded

Shot at 23:14:27. Screen: carry 16.9 yd · swing 30.6 mph · ball 28.5 mph · launch direction 4.9° R · apex 9.6 ft (smash, launch angle, spin: "--").
Parts after acknowledging each one:

```
p2: 991.76, 33.8, 12.719 | p3: 13.698, 136, 15.44 | p4: 16.344, 2.936, 4066 | p5: 4.945, 20.113, 0 | p6: 0, 0, 0
```

| Part · value | Data | Meaning | Check |
|---|---|---|---|
| p2 · 1 | 991.76 | unknown, nearly constant (991.88 on another shot): air pressure in hPa? | |
| p2 · 2 | 33.8 | **launch angle, °** | 32.0 on the previous SW shot; reproduces carry/apex in the flight model (16° or 45° don't) |
| p2 · 3 | 12.719 | **ball speed, m/s** | = 28.5 mph ✓ (and 12.795 = 28.6 mph on the previous shot ✓) |
| p3 · 1 | 13.698 | **club speed, m/s** | = 30.6 mph ✓ |
| p3 · 2 | 136 | unknown | |
| p3 · 3 | 15.44 | **carry, m** | = 16.9 yd ✓ |
| p4 · 1 | 16.344 | **total, m** (device estimate) | = 17.9 yd, a little past carry |
| p4 · 2 | 2.936 | **apex, m** | = 9.6 ft ✓ |
| p4 · 3 | 4066 | **spin, rpm** | plausible for a wedge; screen showed "--" |
| p5 · 1 | 4.945 | **launch direction, °** (+ = right) | = 4.9° R ✓ (sign for left shots still to confirm) |
| p5 · 2 | 20.113 | unknown: air temperature in °C? | |
| p5 · 3, p6 | 0 | unused / not measured | |

### "Sx" frames

`53 78 0F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 45 E1`: no measurements; arrives after a swing that didn't produce a reading and repeats until acknowledged (echo, like `Ss`). Byte 2 (`0x0F`) is probably a reason code. Bytes 17–18 are `00 45` in every frame type seen so far.

OpenSC4 already turns a shot into a real shot in the app using the confirmed values (ball speed, and the club named from the loft); the rest is estimated until mapped. See `SC4_VALUE_MAP` in `src/devices/sc4.ts`.

The device clock runs about 24 s behind the phone's clock in these captures, so the timestamp in part 1 isn't a delivery delay.

20 bytes is the payload limit of one default BLE notification, so a full shot may span several frames. Next step: more frames, each paired with the numbers the device's screen showed (the Device tab now has a form for that).

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
