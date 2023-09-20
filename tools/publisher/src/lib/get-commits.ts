import { execSync } from 'node:child_process';

/**
 * Returns commits list from current position to origin/main
 */
export function getCommits() {
  return execSync('git log main..HEAD --pretty="format:%s"')
    .toString('utf-8')
    .split('\n')
    .filter(Boolean); // last line is empty
}
