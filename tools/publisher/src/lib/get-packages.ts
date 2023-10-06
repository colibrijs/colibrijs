import { glob } from 'glob';
import { readFileSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

export interface PackageData {
  /** Path to dirname of the package */
  dirname: string;

  /** Parsed package.json */
  packageJson: Record<string, unknown>;
}

/**
 * Returns array with information about packages
 * @param root - path to the workspaces root
 */
export async function getPackages(root: string): Promise<PackageData[]> {
  const patterns = await getPackagesGlobPatterns(root);

  const paths = await glob(patterns, {
    ignore: 'node_modules/**',
    withFileTypes: true,
    cwd: root,
  });

  return paths.map((filename) => ({
    dirname: path.dirname(filename.fullpath()),
    packageJson: JSON.parse(readFileSync(filename.fullpath(), 'utf-8')),
  }));
}

/**
 * Returns array of glob patterns to all package.json files
 * @param root - path to the workspaces root
 */
async function getPackagesGlobPatterns(root: string): Promise<string[]> {
  interface PackageJson {
    workspaces?: string[] | Record<'packages', string[]>;
  }

  const filename = path.resolve(root, './package.json');
  const packageJson: PackageJson = JSON.parse(await fs.readFile(filename, 'utf-8'));

  if (!packageJson.workspaces) {
    return ['./package.json'];
  }

  const packages = Array.isArray(packageJson.workspaces)
    ? packageJson.workspaces
    : packageJson.workspaces.packages;

  return packages.map((globPath) => `${globPath}/package.json`);
}
