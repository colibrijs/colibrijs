import path from 'node:path';
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
  const root = path.resolve(cwd(), '../../');
  console.log('packages root:', root);

  const allPackages = await getPackages(root);
  console.log(
    'Received all packages in workspaces:\n',
    allPackages.map((pack) => pack.packageJson.name)
  );

  const publicPackages = filterPublic(allPackages);
  console.log(
    'Filtered only public packages:\n',
    publicPackages.map((pack) => pack.packageJson.name)
  );

  const dependenciesTree = createDependenciesTree(publicPackages, allPackages);
  console.log('Created dependencies tree');

  const affectedFiles = getAffectedFiles(root);
  console.log('Affected files from the main branch:\n', affectedFiles);

  const affectedPackages = filterAffectedPackages(dependenciesTree, affectedFiles);
  console.log('Filter only affected packages');

  if (!affectedPackages.size) {
    console.log('There are no changes in affected packages');
    return;
  }

  const commits = getCommits();
  console.log('Recieved commits:\n', commits);

  const versionType = resolveVersionType(commits);
  console.log('New version resolved:', versionType);

  if (!versionType) {
    console.log("Commits haven't no one with semver tags");
    return;
  }

  for (const packageData of affectedPackages.keys()) {
    publishPackage(packageData, versionType);
    console.log(`Package ${packageData.packageJson.name} published`);
  }
}
