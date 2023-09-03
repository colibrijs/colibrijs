import { cwd } from 'node:process';
import { webpack, type MultiCompiler } from 'webpack';
import WebpackDevServer, { type Configuration as WDSConfiguration } from 'webpack-dev-server';

import { readPackageJson } from './lib/read-package-json';
import type { Settings } from './types';
import { getWebpackConfig } from './webpack.config';

export async function run(mode: 'development' | 'build') {
  const root = cwd();
  const packageJson = await readPackageJson(root);
  const settings: Omit<Settings, 'platform'> = { root, mode };

  const compiler = webpack([
    getWebpackConfig(packageJson, { ...settings, platform: 'server' }),
    getWebpackConfig(packageJson, { ...settings, platform: 'client' }),
  ]);

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
      console.error(error);
    } else {
      console.log(`components has been started on the port ${config.port}`);
    }
  });
}

/**
 * Just build the sources without watching for changes
 */
function build(compiler: MultiCompiler) {
  compiler.run((error, stats) => {
    if (error) {
      console.error(error);
    }

    if (stats) {
      const statsStr = stats.toString({ colors: true });
      console.log(statsStr);
    }
  });
}
