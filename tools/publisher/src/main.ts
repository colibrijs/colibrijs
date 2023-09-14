import { cwd } from 'node:process';

import { createDependenciesTree } from './lib/create-dependencies-tree';
import { filterPublic } from './lib/filter-public';
import { getAffectedFiles } from './lib/get-affected-files';
import { getPackages } from './lib/get-packages';

main();

async function main() {
  const allPackages = await getPackages(cwd());
  const publicPackages = filterPublic(allPackages);
  const dependenciesTree = createDependenciesTree(publicPackages, allPackages);
  const affectedFiles = getAffectedFiles();

  console.log(dependenciesTree);
  console.log(affectedFiles);

  // TODO:
  //   + Retrieve the root package.json.
  //   + Retrieve all package.json files listed in package.workspaces.
  //   + Filter to keep only those without "private: true" and save them in the "public" list.
  //   + Filter the original array to keep only those workspaces that are either in the "public" list or are dependencies of packages in the "public" list. This should result in a tree structure where "public" dependencies are the roots and others are the leaves.
  //   + Get the git diff.
  //   - Determine if there are changes in public packages or their dependencies.
  //     Note: If the root package.json is modified, it means all public packages have changed.
  //   - If there are no changes, terminate the algorithm.
  //   - Obtain a list of commits.
  //   - For each modified public package, determine a new version:
  //      - If there are fixes among them, increment the version by patch.
  //      - If there are new features (feats), increment the version by minor.
  //      - If there are BREAKING CHANGES, increment the version by major.
}
