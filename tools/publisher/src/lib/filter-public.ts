import type { PackageData } from './get-packages';

/**
 * Returns only public packages
 */
export function filterPublic(packages: PackageData[]): PackageData[] {
  return packages.filter((item) => isPublic(item.packageJson));
}

/**
 * Package is public when it hasn't field private, or if this field has value false
 * @param packageJson - parsed package.json
 */
function isPublic(packageJson: PackageData['packageJson']): boolean {
  return 'private' in packageJson && typeof packageJson.private === 'boolean'
    ? !packageJson.private
    : true;
}
