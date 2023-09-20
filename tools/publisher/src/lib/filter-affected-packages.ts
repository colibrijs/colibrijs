import type { DependenciesTree } from './create-dependencies-tree';
import type { PackageData } from './get-packages';

/** Entry of dependencies tree */
type Dependency = [PackageData, PackageData[]];

/**
 * Filter dependencies tree. The result of function is filtered tree
 * where will be only affected packages.
 */
export function filterAffectedPackages(
  dependenciesTree: DependenciesTree,
  affectedFiles: string[]
): DependenciesTree {
  const entries = Array.from(dependenciesTree.entries());
  const filtered = entries.filter((dependency) => dependencyIsAffected(dependency, affectedFiles));

  return new Map(filtered);
}

/** Returns true if dependency affected */
function dependencyIsAffected(dependency: Dependency, affectedFiles: string[]): boolean {
  const [rootDependency, subDependencies] = dependency;
  const packages = [rootDependency, ...subDependencies];

  return packages.some((pack) => affectedFiles.some((file) => file.startsWith(pack.dirname)));
}
