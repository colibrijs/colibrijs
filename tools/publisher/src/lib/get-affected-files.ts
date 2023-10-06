import { execSync } from 'node:child_process';
import path from 'node:path';

/**
 * Returns names of files that were changed from main branch
 * @param root - path to the workspaces root
 */
export function getAffectedFiles(root: string): string[] {
  const stdout = execSync(`git diff --name-only ${process.env.FROM} ${process.env.TO}`);

  return stdout
    .toString('utf-8')
    .split('\n')
    .map((filename) => path.join(root, path.relative(root, filename)));
}
