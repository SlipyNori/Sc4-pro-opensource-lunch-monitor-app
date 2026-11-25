/**
 * Messages between the OpenSC4 web app and the connector (over a localhost
 * WebSocket). Kept tiny and versioned so either side can evolve.
 */
export const CONNECTOR_PORT = 8765;
export const CONNECTOR_VERSION = '1.0.0';

/** One shot, in the units golf simulators use (mph, degrees, rpm, yards). */
export interface ConnectorShot {
  ballSpeedMph: number;
  clubSpeedMph?: number;
  /** Vertical launch angle, degrees */
  launchAngleDeg?: number;
  /** Horizontal launch direction, degrees (+ = right) */
  launchDirectionDeg?: number;
  spinRpm?: number;
  /** Spin axis, degrees (+ = right / fade for a right-hander) */
  spinAxisDeg?: number;
  carryYd?: number;
  /** Our club id, e.g. "7i" */
  club?: string;
}

/** A simulator to send shots to, using the GSPro Open Connect format */
export interface TargetConfig {
  name: string;
  host: string;
  port: number;
  enabled: boolean;
}

export type AppToConnector =
  | { type: 'hello'; app: string; version: string }
  | { type: 'configure'; targets: TargetConfig[] }
  | { type: 'shot'; id: string; shot: ConnectorShot }
  | { type: 'status'; ready: boolean; ballDetected: boolean };

export interface OutputStatus {
  name: string;
  target: string;
  connected: boolean;
  error?: string;
  shotsSent: number;
}

export type ConnectorToApp =
  | { type: 'hello'; version: string; outputs: OutputStatus[] }
  | { type: 'outputs'; outputs: OutputStatus[] }
  | { type: 'club'; club: string; source: string }
  | { type: 'shotResult'; id: string; output: string; ok: boolean; message?: string };
