# OpenSC4 Connector: play GSPro, Infinite Tees and other simulators with an SC4 Pro

The OpenSC4 app reads the Swing Caddie SC4 Pro over Bluetooth and decodes every shot. The **OpenSC4 Connector** is a small program that runs on the same Windows PC as your simulator and passes those shots on.

```
SC4 Pro ──Bluetooth──► OpenSC4 app (Chrome/Edge) ──localhost──► OpenSC4 Connector ──► GSPro (port 921)
                                                                                    └─► Infinite Tees / others
```

## Set up

1. **Get the connector.** Download `opensc4-connector.exe` from the [Releases page](https://github.com/SlipyNori/Sc4-pro-opensource-lunch-monitor-app/releases) and run it. Windows may warn that it's from an unknown publisher (it isn't code-signed); choose *More info → Run anyway*. Keep its window open while you play.
   - Prefer running from source? With Node.js 22: `npm ci` then `npm run connector`.
2. **Start your simulator.**
   - **GSPro:** in GSPro's settings, pick the Open API / *GSPro Connect* option. It listens on port 921.
   - **Infinite Tees:** it accepts third-party connectors through its open API; the details are shared on the Infinite Tees Discord. If it takes the GSPro Open Connect format, enter the port it listens on in the app (below). If it uses a different format, open an issue with its API details and we'll add it.
3. **In the OpenSC4 app** (in Chrome or Edge on that PC): open the **Simulators** tab, tick **Send my shots to golf simulators**, and check the simulators listed. If Chrome asks to *allow access to devices on your local network*, choose **Allow**; that's how the page reaches the connector on your own PC.
4. **Connect the SC4 Pro** (Device → Bluetooth → Connect) and hit. Each shot that registers on the SC4 Pro is sent to every simulator switched on, and the club you pick in GSPro is mirrored in the app.

Use **Send a test shot** in the Simulators tab to check the link without hitting.

## What gets sent

GSPro Open Connect v1 JSON over TCP:

| Field | From the SC4 Pro |
|---|---|
| `BallData.Speed` (mph) | ball speed |
| `BallData.VLA` (°) | launch angle |
| `BallData.HLA` (°, + right) | launch direction |
| `BallData.TotalSpin` / `BackSpin` / `SideSpin` (rpm) | spin (split by spin axis) |
| `BallData.SpinAxis` (°) | not sent by the SC4 Pro, so 0 (no curve) |
| `BallData.CarryDistance` (yd) | carry measured by the SC4 Pro |
| `ClubData.Speed` (mph) | club speed |

Heartbeats every 5 seconds report *launch monitor ready* (SC4 Pro connected) and *ball detected* (from the webcam ready light if the camera is on).

## Security

- The connector only listens on `127.0.0.1` (this PC); other devices on your network can't reach it.
- It only accepts the OpenSC4 app (its GitHub Pages address, `localhost`, or the app opened as a local file), so other websites can't send fake shots. Add another app address with `--allow-origin https://example.org`.

## Options

```
opensc4-connector.exe [--port 8765] [--allow-origin https://example.org]
```

Simulator addresses and ports are set from the app's Simulators tab.
