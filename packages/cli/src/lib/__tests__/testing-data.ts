import type { PackageJson, Settings } from '../../types';

export const defaultPackageJson: PackageJson = {
  name: '@colibrijs/example',
  main: './entrypoint.js',
};

export const defaultSettings: Settings = {
  mode: 'build',
  platform: 'client',
  root: '/path/to/package/',
};
