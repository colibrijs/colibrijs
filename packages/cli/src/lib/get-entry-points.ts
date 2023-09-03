import path from 'node:path';
import type { EntryObject } from 'webpack';

import type { PackageJson, Settings } from '../types';

/** Returns webpack entry points. Property "main" from package.json must be an entry point */
export function getEntryPoints(packageJson: PackageJson, settings: Settings): EntryObject {
  return {
    main: path.join(settings.root, packageJson.main),
  };
}
