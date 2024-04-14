import { cwd } from 'node:process';
import { webpack } from 'webpack';
import type { Compiler, Stats } from 'webpack';

import { readPackageJson } from './lib/read-package-json';
import type { Logger, RunnerOptions, Settings } from './types';
import { createConfiguration } from './webpack.config';

export async function run(options: RunnerOptions): Promise<void> {
  const logger: Logger = console;
  const root = cwd();
  const packageJson = await readPackageJson(root);
  const settings: Omit<Settings, 'platform'> = { packageJson, root, regime: options.regime };

  const config = createConfiguration({ ...settings, platform: 'client' });
  const compiler = webpack(config);
  const stats = await runCompiler(compiler);

  logger.log(stats.toString({ colors: true }));
}

function runCompiler(compiler: Compiler): Promise<Stats> {
  return new Promise((resolve, reject) => {
    compiler.run((error, stats) => {
      if (error) {
        reject(error);
      } else {
        resolve(stats as Stats);
      }
    });
  });
}
