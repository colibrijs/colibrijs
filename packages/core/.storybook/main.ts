import type { StorybookConfig } from '@storybook/react-webpack5';

export default {
  stories: ['../src/components/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-mock',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  env: (config) => ({
    ...config,
    API_BASE_URL: process.env.API_BASE_URL ?? 'http://api.colibrijs.io',
    BRANCH_NAME: process.env.BRANCH_NAME ?? 'main',
    EXAMPLE_BUILD_SRC: process.env.EXAMPLE_BUILD_SRC ?? '',
    REPOSITORY: process.env.REPOSITORY ?? 'colibrijs/colibrijs',
  }),
  docs: {
    autodocs: 'tag',
  },
} satisfies StorybookConfig;
