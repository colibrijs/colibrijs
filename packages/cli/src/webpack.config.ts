import path from 'node:path';
import type { Configuration } from 'webpack';

import { createModuleFederationPlugin } from './lib/create-federation-plugin';
import { getEntryPoints } from './lib/get-entry-points';
import { sanitizePackageName } from './lib/sanitize-package-name';
import type { PackageJson, Settings } from './types';

/**
 * Returns a webpack configuration for specified package
 */
export function getWebpackConfig(packageJson: PackageJson, settings: Settings): Configuration {
  return {
    name: settings.platform,
    mode: settings.mode === 'build' ? 'production' : 'development',
    entry: getEntryPoints(packageJson, settings),
    plugins: [createModuleFederationPlugin(packageJson, settings)],
    target: false,

    module: {
      rules: [
        {
          test: /\.(?:js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }], ['@babel/preset-react']],
            },
          },
        },
      ],
    },

    output: {
      chunkFormat: 'commonjs',
      clean: false,
      filename: '[name].js',
      // TODO: User can specify the name of output dir
      path: path.resolve(settings.root, './dist/'),
      library: {
        name: sanitizePackageName(packageJson.name),
        type: 'commonjs-module',
      },
    },
  };
}
