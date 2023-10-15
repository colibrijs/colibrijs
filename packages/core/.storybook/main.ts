import path from 'node:path';
import type { StorybookConfig } from '@storybook/react-webpack5';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return path.dirname(require.resolve(path.join(value, 'package.json')));
}

export default {
  stories: ['../src/components/**/*.stories.@(ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  env: (config) => ({
    ...config,
    EXAMPLE_BUILD_SRC: process.env.EXAMPLE_BUILD_SRC ?? '',
    REPOSITORY_OWNER: process.env.REPOSITORY_OWNER ?? 'colibrijs',
    REPOSITORY_NAME: process.env.REPOSITORY_NAME ?? 'colibrijs',
    BRANCH_NAME: process.env.BRANCH_NAME ?? 'main',
  }),
  docs: {
    autodocs: 'tag',
  },
} satisfies StorybookConfig;
