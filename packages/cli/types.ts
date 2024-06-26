/** Режим в котором может запускаться сборщик. Пока что поддерживается только production */
export type Regime = 'production';

export type Platform = 'client' | 'server';

export interface RunnerOptions {
  regime: Regime;
}

export interface PackageJson {
  name: string;
  exports: Record<string, string>;
}

export interface Settings {
  packageJson: PackageJson;
  packageJsonPath: string;
  platform: Platform;
  regime: Regime;
  root: string;
}

export interface Logger {
  log: (message: string) => void;
  error: (errorMessage: string) => void;
}
