# OpenSC4 Range

An **open-source launch monitor dashboard and golf simulator** for the Swing Caddie **SC4 Pro** – runs in your browser, no install, no subscription.

> ⚠️ Unofficial community project. Not affiliated with or endorsed by Swing Caddie / Voice Caddie. "Swing Caddie" and "SC4 Pro" are trademarks of their respective owners.

## Features

- **3D driving range** (Three.js) with animated ball flight, tracers, distance markers, target greens and three camera modes (behind, follow, top-down).
- **Physics-based ball flight**: gravity, drag, Magnus lift, spin decay, wind, altitude/temperature (air density), bounce and roll. It is calibrated against published tour-average carry, apex and landing-angle data; see `tests/ballFlight.test.ts`.
- **Shot dashboard** with carry, total, offline, ball/club speed, smash, launch, direction, spin, spin axis, apex and landing angle. Values the device didn't report are estimated per club and marked *(est.)*.
- **History and per-club stats**, including averages and consistency (carry/offline standard deviation). Shots are saved in your browser.
- **CSV export/import.** Import understands common column names (`Ball Speed`, `Launch Angle`, `Back Spin`, …).
- **Ready light + webcam ball detection**: a big status light on the range, readable from the hitting position. Point any webcam at the hitting spot and draw a box around the ball. The light turns green when a ball is sitting still in the box and the radar is connected, and a hit is detected when the ball leaves. Radar can't see a ball at rest, so the camera handles setup while the radar handles the numbers.
- **Impact replay**: while the webcam is on, a small rolling buffer of low-resolution frames is kept in memory. Each hit saves about 1.5 s before and 0.7 s after impact and plays it in slow motion in a corner of the range, with the impact frame marked and a slider to step through frames. Three quality levels (10/15/30 fps). Clips for the last 6 shots stay in memory; click a shot in History to replay it.
- **Device layer** with three inputs:
  - **Simulator**, so you can use everything with no hardware (press **Space**).
  - **Manual entry** for numbers read off the SC4 Pro display or app.
  - **Bluetooth (Web Bluetooth)**, which connects using an editable JSON *device profile*, logs every raw packet, and decodes shots once the byte layout is known.

## Status of SC4 Pro Bluetooth support

The SC4 Pro's Bluetooth protocol is **not publicly documented**. This project deliberately **does not ship guessed byte layouts**, because guesses would silently produce wrong numbers. The default SC4 Pro profile runs in **capture mode**: it connects, subscribes to every notifying characteristic, and logs packets that you can download as JSON.

**This is where you can help.** [docs/PROTOCOL.md](docs/PROTOCOL.md) walks through capturing packets, correlating them with the numbers on the device's screen, and turning the result into a profile. When a profile works, open a PR and every SC4 Pro owner gets live data.

Until then you can still use the app with manual entry or CSV import.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # unit tests (physics, decoder, session)
npm run build      # static site in dist/ – host anywhere (GitHub Pages, Netlify, …)
npm run build:single  # one self-contained dist/opensc4-range.html you can open from disk
```

Web Bluetooth needs **Chrome or Edge on desktop or Android**, served over `https://` or `localhost`. Safari/iOS and Firefox don't support it, but they can still use the simulator, manual entry and CSV.

## Project layout

```
src/
  physics/ballFlight.ts   Ball-flight model (RK4, drag/lift/Magnus, wind, bounce/roll)
  devices/
    DeviceAdapter.ts      Interface every launch monitor implements
    SimulatedDevice.ts    Fake launch monitor
    BluetoothDevice.ts    Web Bluetooth adapter + packet capture
    frameDecoder.ts       JSON-profile-driven binary decoder
    profiles.ts           SC4 Pro (capture-mode) and example profiles
  session/                Shot processing, stats, CSV, local storage
  render/RangeScene.ts    Three.js driving range
  main.ts                 UI wiring
scripts/calibrate.ts      Re-fit aero coefficients against reference data
docs/PROTOCOL.md          How to reverse-engineer / contribute a device profile
```

## Roadmap ideas

- Verified SC4 Pro profile (needs community packet captures)
- Course play mode (holes, hazards, scoring)
- Native companion (Android/desktop) for platforms without Web Bluetooth
- Open connector output for other sim software (e.g. GSPro's open API)
- Putting green and short-game practice games

Contributions welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
