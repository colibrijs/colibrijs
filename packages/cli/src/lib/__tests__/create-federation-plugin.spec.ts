import { describe, expect, it, jest } from '@jest/globals';
import * as mf from '@module-federation/node';

import { defaultPackageJson, defaultSettings } from './testing-data';
import type { PackageJson, Settings } from '../../types';
import {
  createModuleFederationPlugin,
  getFederationPluginOptions,
} from '../create-federation-plugin';
import { sanitizePackageName } from '../sanitize-package-name';

jest.mock<typeof import('@module-federation/node')>('@module-federation/node');

describe(createModuleFederationPlugin.name, () => {
  // We have a well-tested function getFederationPluginOptions. For the createModuleFederationPlugin
  // function, it's sufficient to ensure that the ModuleFederationPlugin is created with the
  // parameters returned by getFederationPluginOptions.
  it('creates an instance of UniversalFederationPlugin with options that returns getFederationPluginOptions', () => {
    expect.assertions(2);

    const expectedParams = getFederationPluginOptions(defaultPackageJson, defaultSettings);
    const expectedResult = { someProperty: 'someValue' };
    const spyConstructor = jest.spyOn(mf, 'UniversalFederationPlugin');

    // @ts-expect-error here may be any function. We don't interesting in implementation
    spyConstructor.mockImplementationOnce(jest.fn().mockReturnValue(expectedResult));

    const result = createModuleFederationPlugin(defaultPackageJson, defaultSettings);

    expect(spyConstructor).toHaveBeenCalledWith(expectedParams, {});
    expect(result).toStrictEqual(expectedResult);
    spyConstructor.mockRestore();
  });
});

describe(getFederationPluginOptions.name, () => {
  it('at the field "name" returns a sanitized name from package', () => {
    expect.assertions(1);

    const settings: Settings = { ...defaultSettings, platform: 'server' };
    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const options = getFederationPluginOptions(packageJson, settings);
    expect(options.name).toBe(sanitizePackageName('@colibrijs/example'));
  });

  it('exposes strict equal the record where sanitized package name is key and package.main is value', () => {
    expect.assertions(1);

    const packageJson: PackageJson = {
      ...defaultPackageJson,
      name: '@colibrijs/example',
      main: 'index.js',
    };

    const options = getFederationPluginOptions(packageJson, defaultSettings);
    expect(options.exposes).toStrictEqual({
      [`./${sanitizePackageName('@colibrijs/example')}`]: 'index.js',
    });
  });

  it('filename matches the pattern "./#{package.name}/remote.#{platform}.js"', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const settings: Settings = { ...defaultSettings, platform: 'client' };
    const options = getFederationPluginOptions(packageJson, settings);
    expect(options.filename).toBe('./@colibrijs/example/remote.client.js');
  });

  it('if settings.platform is "client", property "isServer" has value false', () => {
    expect.assertions(1);

    const settings: Settings = { ...defaultSettings, platform: 'client' };
    const options = getFederationPluginOptions(defaultPackageJson, settings);
    expect(options.isServer).toBe(false);
  });

  it('if settings.platform is "server", property "isServer" has value true', () => {
    expect.assertions(1);

    const settings: Settings = { ...defaultSettings, platform: 'server' };
    const options = getFederationPluginOptions(defaultPackageJson, settings);
    expect(options.isServer).toBe(true);
  });

  it('if settings.platform is "client", filename equals "./name/remote.client.js"', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const settings: Settings = { ...defaultSettings, platform: 'client' };
    const options = getFederationPluginOptions(packageJson, settings);
    expect(options.filename).toBe('./@colibrijs/example/remote.client.js');
  });

  it('if settings.platform is "server", filename equals "./name/remote.server.js"', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const settings: Settings = { ...defaultSettings, platform: 'server' };
    const options = getFederationPluginOptions(packageJson, settings);
    expect(options.filename).toBe('./@colibrijs/example/remote.server.js');
  });

  it('if settings.platform is "server", returns the property library', () => {
    expect.assertions(1);

    const settings: Settings = { ...defaultSettings, platform: 'server' };
    const options = getFederationPluginOptions(defaultPackageJson, settings);
    expect(options.library).toBeDefined();
  });

  it('if settings.platform is "server", library.name is sanitized package\'s name', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const settings: Settings = { ...defaultSettings, platform: 'server' };
    const options = getFederationPluginOptions(packageJson, settings);
    expect(options.library?.name).toBe(sanitizePackageName('@colibrijs/example'));
  });

  it('if settings.platform is "server", library.type is commonjs-module', () => {
    expect.assertions(1);

    const settings: Settings = { ...defaultSettings, platform: 'server' };
    const options = getFederationPluginOptions(defaultPackageJson, settings);
    expect(options.library?.type).toBe('commonjs-module');
  });

  it('property shared has static settings for react and react-dom', () => {
    expect.assertions(1);

    const options = getFederationPluginOptions(defaultPackageJson, defaultSettings);
    expect(options.shared).toStrictEqual({
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
    });
  });
});
