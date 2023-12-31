const { UniversalFederationPlugin } = require('@module-federation/node');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  transpilePackages: ['@colibrijs/core'],

  env: {
    API_BASE_URL: process.env.API_BASE_URL ?? 'http://api.colibrijs.io',
  },

  webpack: (config, context) => {
    config.plugins.push(
      new UniversalFederationPlugin(
        {
          isServer: context.isServer,
          library: {
            name: 'panel',
            type: 'commonjs-module',
          },
          remotes: {
            fake: 'promise new Promise((resolve) => {resolve({get:()=>Promise.resolve(()=>{}),init:()=>{}})})',
          },
          name: 'panel',
          shared: {
            'prop-types': {
              eager: true,
              requiredVersion: '^15',
              import: 'prop-types',
              shareKey: 'prop-types',
              shareScope: 'default',
              singleton: true,
            },
            react: {
              eager: true,
              import: 'react',
              requiredVersion: '^18',
              shareKey: 'react',
              shareScope: 'default',
              singleton: true,
            },
          },
        },
        {}
      )
    );

    return config;
  },
};

module.exports = nextConfig;
