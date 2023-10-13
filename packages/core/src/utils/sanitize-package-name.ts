/**
 * Returns the name of library. Name specified in the package.json may contains some symbols that
 * can't be used in variable name. Function adds underscore before the package name and replace
 * slashes to two underscores.
 */
export function sanitizePackageName(name: string): string {
  return name.replace(/@/g, '_').replace(/\//g, '__');
}
