import { execSync } from 'node:child_process';
import path from 'node:path';
import { cwd } from 'node:process';

/**
 * Returns names of files that were changed from main branch
 */
export function getAffectedFiles(): string[] {
  const stdout = execSync(`git diff --name-only ${process.env.FROM} ${process.env.TO}`);
  const root = cwd();

  return stdout
    .toString('utf-8')
    .split('\n')
    .map((filename) => path.join(root, '../../', path.relative(root, filename)));
}
