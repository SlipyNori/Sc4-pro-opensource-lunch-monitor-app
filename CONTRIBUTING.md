# Contributing

Thanks for helping! Useful areas:

- **SC4 Pro protocol**: see [docs/PROTOCOL.md](docs/PROTOCOL.md). This is the most impactful contribution.
- **Physics**: better aero models or reference data. Run `npm run calibrate` after changing the model, and keep `npm test` green.
- **New devices**: implement `DeviceAdapter` (`src/devices/DeviceAdapter.ts`) and add it to the list in `src/main.ts`.
- **Simulator features**: course mode, games, UI and accessibility improvements.

## Development

```bash
npm install
npm run dev
npm test
npm run typecheck
```

Keep PRs focused, add tests for logic changes, and don't commit captured data that contains personal information.
