import type { PackageData } from './get-packages';

export type DependenciesTree = Map<PackageData, PackageData[]>;

/**
 * Creates a map where every package data relates to its dependencies. But we are interesting only
 * for dependencies from current workspace, so in the value will be these dependencies.
 * @param publicPackages - dependencies tree will be created only for public packages from workspace
 * @param allPackages - private dependencies can be used as values
 * @returns
 */
export function createDependenciesTree(
  publicPackages: PackageData[],
  allPackages: PackageData[]
): DependenciesTree {
  return new Map(publicPackages.map((pack) => [pack, getPackageDependencies(pack, allPackages)]));
}

function getPackageDependencies(pack: PackageData, allPackages: PackageData[]): PackageData[] {
  const { packageJson } = pack;

  if (
    !('dependencies' in packageJson) ||
    packageJson.dependencies === null ||
    typeof packageJson.dependencies !== 'object'
  ) {
    return [];
  }

  const names = Object.keys(packageJson.dependencies);

  return allPackages.filter(
    ({ packageJson }) => typeof packageJson.name === 'string' && names.includes(packageJson.name)
  );
}
