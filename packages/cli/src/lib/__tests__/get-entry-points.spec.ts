import path from 'node:path';

import { defaultSettings, defaultPackageJson } from './testing-data';
import type { PackageJson, Settings } from '../../types';
import { getEntryPoints } from '../get-entry-points';

describe('getEntryPoints', () => {
  it('returns the main entry point with the correct path', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, main: 'index.js' };
    const settings: Settings = { ...defaultSettings, root: '/path/to/package' };
    const entryPoints = getEntryPoints(packageJson, settings);

    expect(entryPoints).toStrictEqual({
      main: path.join(settings.root, packageJson.main),
    });
  });
});
