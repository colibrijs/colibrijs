export interface Settings {
  /**
   * build - just build sources to the output
   * development - build sources and watching for changes
   */
  mode: 'build' | 'development';

  /** Build platform */
  platform: 'client' | 'server';

  /** Absolute path to the package */
  root: string;
}

export interface PackageJson {
  name: string;
  main: string;
}
