import { execSync } from 'node:child_process';

import type { PackageData } from './get-packages';

/** Returns package version on npm */
export function getPackageVersion(packageData: PackageData): string {
  const packageName = packageData.packageJson.name;

  if (typeof packageName !== 'string') {
    throw new Error(`Can't recognize the version of package located at ${packageData.dirname}`);
  }

  try {
    const rawInfo = execSync(`npm info ${packageName} --json`, { encoding: 'utf-8' });

    const info = JSON.parse(rawInfo);
    return info['dist-tags'].latest;
  } catch (error) {
    if (
      error !== null &&
      typeof error === 'object' &&
      'stderr' in error &&
      error.stderr?.toString().includes('npm ERR! code E404')
    ) {
      console.warn(
        `Can't find the package with name ${packageName}. By default it will be available by version 1.0.0`
      );

      return '1.0.0';
    }

    throw error;
  }
}
