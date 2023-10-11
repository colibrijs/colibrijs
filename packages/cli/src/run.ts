import fs from 'node:fs/promises';
import { cwd } from 'node:process';
import { webpack, type MultiCompiler } from 'webpack';
import WebpackDevServer, { type Configuration as WDSConfiguration } from 'webpack-dev-server';

import { logger } from './console-logger';
import { readPackageJson } from './lib/read-package-json';
import type { Settings } from './types';
import { getWebpackConfig } from './webpack.config';

export async function run(mode: 'development' | 'build') {
  const root = cwd();
  const packageJson = await readPackageJson(root);
  const settings: Omit<Settings, 'platform'> = { root, mode };

  const clientConfig = getWebpackConfig(packageJson, { ...settings, platform: 'client' });
  const serverConfig = getWebpackConfig(packageJson, { ...settings, platform: 'server' });

  await fs.rm(clientConfig.output?.path as string, {
    force: true,
    recursive: true,
  });

  const compiler = webpack([clientConfig, serverConfig]);

  switch (mode) {
    case 'development':
      runDev(compiler);
      break;
    case 'build':
      build(compiler);
      break;
    default:
      throw new Error(`Unknown running mode "${mode}"`);
  }
}

/**
 * Run colibri cli in the development mode
 */
function runDev(compiler: MultiCompiler) {
  const config: WDSConfiguration = {
    allowedHosts: 'all',
    host: 'localhost',
    // TODO: User can specify the port and host where server will listening
    port: '3001',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  };

  const server = new WebpackDevServer(config, compiler);
  server.listen(config.port!, config.host!, (error) => {
    if (error) {
      logger.error(error);
    } else {
      logger.log(`components has been started on the port ${config.port}`);
    }
  });
}

/**
 * Just build the sources without watching for changes
 */
function build(compiler: MultiCompiler) {
  compiler.run((error, stats) => {
    if (error) {
      logger.error(error);
    }

    if (stats) {
      const statsStr = stats.toString({ colors: true });
      logger.log(statsStr);
    }
  });
}
