import { execSync } from 'node:child_process';

/**
 * Returns commits list
 */
export function getCommits() {
  return execSync(`git log ${process.env.FROM}..${process.env.TO} --pretty="format:%s"`)
    .toString('utf-8')
    .split('\n')
    .filter(Boolean); // last line is empty
}
