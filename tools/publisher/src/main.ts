import { cwd } from 'node:process';

import { createDependenciesTree } from './lib/create-dependencies-tree';
import { filterAffectedPackages } from './lib/filter-affected-packages';
import { filterPublic } from './lib/filter-public';
import { getAffectedFiles } from './lib/get-affected-files';
import { getCommits } from './lib/get-commits';
import { getPackages } from './lib/get-packages';
import { publishPackage } from './lib/publish-package';
import { resolveVersionType } from './lib/resolve-version-type';

main();

async function main() {
  const allPackages = await getPackages(cwd());
  const publicPackages = filterPublic(allPackages);
  const dependenciesTree = createDependenciesTree(publicPackages, allPackages);
  const affectedFiles = getAffectedFiles();
  const affectedPackages = filterAffectedPackages(dependenciesTree, affectedFiles);

  if (!affectedPackages.size) {
    console.log('There are no changes in affected packages');
    return;
  }

  const commits = getCommits();
  const versionType = resolveVersionType(commits);

  if (!versionType) {
    console.log("Commits haven't no one with semver tags");
    return;
  }

  for (const packageData of affectedPackages.keys()) {
    publishPackage(packageData, versionType);
  }

  console.log(versionType);

  // TODO:
  //   + Retrieve the root package.json.
  //   + Retrieve all package.json files listed in package.workspaces.
  //   + Filter to keep only those without "private: true" and save them in the "public" list.
  //   + Filter the original array to keep only those workspaces that are either in the "public" list or are dependencies of packages in the "public" list. This should result in a tree structure where "public" dependencies are the roots and others are the leaves.
  //   + Get the git diff.
  //   + Determine if there are changes in public packages or their dependencies.
  //     Note: If the root package.json is modified, it means all public packages have changed.
  //   + If there are no changes, terminate the algorithm.
  //   + Obtain a list of commits.
  //   + For each modified public package, determine a new version:
  //      - If there are fixes among them, increment the version by patch.
  //      - If there are new features (feats), increment the version by minor.
  //      - If there are BREAKING CHANGES, increment the version by major.
  //   + get current packages version
  //   + update package.json - set new version
  //   + publish new versions

  // TODO:
  // - support deep dependencies. Imagine that package A is public and it depends from package B,
  //   that depends from package C. If we have some changes in package C, package A must be published.
  // - detect changes in the root package.json
  // - resolve version for each package diferrently
}
