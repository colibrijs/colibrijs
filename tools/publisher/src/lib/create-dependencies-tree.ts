import type { PackageData } from './get-packages';

type DependenciesTree = Map<PackageData, PackageData[]>;

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
