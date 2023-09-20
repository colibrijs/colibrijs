export type VersionType = 'patch' | 'minor' | 'major';

/**
 * Detect next version of package
 * patch - if there are fixes
 * minor - if there are new features (feats), increment
 * major - if there are BREAKING CHANGES, increment the version by major
 */
export function resolveVersionType(commits: string[]): VersionType | null {
  const types = new Set(commits.map(getCommitType));

  if (types.has('BREAKING CHANGE')) return 'major';
  if (types.has('feat') || types.has('feature')) return 'minor';
  if (types.has('fix') || types.has('HOTFIX') || types.has('docs')) return 'patch';

  return null;
}

/**
 * Returns commit type (feat, fix, chore, etc from commit message)
 */
function getCommitType(commitMessage: string): string {
  const regexp = /(?<type>.*?)\s?(?<scope>\(.+?\))?:/;
  const match = regexp.exec(commitMessage);

  return match === null || !match.groups?.type ? '' : match.groups.type;
}
