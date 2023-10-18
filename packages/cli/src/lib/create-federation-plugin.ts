import { NodeFederationPlugin } from '@module-federation/node';
import { container } from 'webpack';

import { sanitizePackageName } from './sanitize-package-name';
import type { PackageJson, Settings } from '../types';

type FederationPluginConstructorOptions = ConstructorParameters<typeof NodeFederationPlugin>[0];

/** Creates and returns an instance of ModuleFederationPlugin */
export function createModuleFederationPlugin(
  packageJson: PackageJson,
  settings: Settings
): NodeFederationPlugin {
  const options = getFederationPluginOptions(packageJson, settings);
  return settings.platform === 'server'
    ? new NodeFederationPlugin(options, {})
    : (new container.ModuleFederationPlugin(options) as NodeFederationPlugin);
}

/** Receipts a package Json representation and returns an options for ModuleFederationPlugin */
export function getFederationPluginOptions(
  packageJson: PackageJson,
  settings: Settings
): FederationPluginConstructorOptions {
  const sanitizedName = sanitizePackageName(packageJson.name);
  const options: FederationPluginConstructorOptions = {
    filename: `./${packageJson.name}/remote.${settings.platform}.js`,
    name: sanitizedName,
    exposes: {
      [`${sanitizedName}`]: packageJson.main,
    },
    shared: {
      'prop-types': {
        requiredVersion: '^15',
        import: 'prop-types',
        shareKey: 'prop-types',
        shareScope: 'default',
        singleton: true,
      },
      react: {
        requiredVersion: '^18',
        import: 'react',
        shareKey: 'react',
        shareScope: 'default',
        singleton: true,
      },
    },
  };

  if (settings.platform === 'server') {
    options.library = {
      name: sanitizedName,
      type: 'commonjs-module',
    };
  }

  return options;
}
