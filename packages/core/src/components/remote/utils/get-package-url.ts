/**
 * Returns url to remote component. @colibrijs/cli can place packages where it want. All that you
 * must know is url where build placed and package name. Function returns url to package
 * @param buildSrc
 * @param packageName
 */
export function getPackageUrl(buildSrc: string, packageName: string): string {
  const buildSrcWithTrailingSlash = buildSrc.endsWith('/') ? buildSrc : `${buildSrc}/`;

  return `${buildSrcWithTrailingSlash}${packageName}`;
}
