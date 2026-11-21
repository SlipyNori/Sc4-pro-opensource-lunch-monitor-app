export const MPH_TO_MS = 0.44704;
export const MS_TO_MPH = 1 / MPH_TO_MS;
export const M_TO_YD = 1.0936133;
export const YD_TO_M = 1 / M_TO_YD;
export const M_TO_FT = 3.2808399;
export const RPM_TO_RADS = (2 * Math.PI) / 60;
export const DEG = Math.PI / 180;

export const mphToMs = (mph: number) => mph * MPH_TO_MS;
export const msToMph = (ms: number) => ms * MS_TO_MPH;
export const mToYd = (m: number) => m * M_TO_YD;
export const ydToM = (yd: number) => yd * YD_TO_M;
export const mToFt = (m: number) => m * M_TO_FT;
