import { execSync } from 'node:child_process';

import { getPackageVersion } from './get-package-version';
import type { PackageData } from './get-packages';
import type { VersionType } from './resolve-version-type';

export function publishPackage(packageData: PackageData, versionType: VersionType) {
  const currentVersion = getPackageVersion(packageData);
  const newVersion = increaseVersion(currentVersion, versionType);
  // get package version checks package name and throws error if it not specified
  const name = packageData.packageJson.name as string;

  const stdout = execSync(
    `yarn workspace ${name} publish --new-version ${newVersion} --no-commit-hooks --no-git-tag-version`,
    { encoding: 'utf-8' }
  );

  console.log(stdout);
}

/** Increase semver version */
function increaseVersion(version: string, versionType: VersionType): string {
  const [majorStr, minorStr, patchStr] = version.split('.');

  const versions: Record<VersionType, number> = {
    patch: parseInt(patchStr, 10),
    minor: parseInt(minorStr, 10),
    major: parseInt(majorStr, 10),
  };

  const newVersions: Record<VersionType, number> = {
    ...versions,
    [versionType]: versions[versionType] + 1,
  };

  return `${newVersions.major}.${newVersions.minor}.${newVersions.patch}`;
}
