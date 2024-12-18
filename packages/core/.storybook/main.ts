import type { StorybookConfig } from '@storybook/react-webpack5';

import fs from 'node:fs';
import path from 'node:path';

import { isDirectoryAvailable } from './screenshoter-config/fs-utils';

const screenshotDirectory = path.resolve(__dirname, './screenshots');

if (!isDirectoryAvailable(screenshotDirectory)) {
  fs.mkdirSync(screenshotDirectory);
}

export default {
  stories: ['../components/**/*.stories.@(ts|tsx)'],
  staticDirs: [{ from: './screenshots', to: '/screenshots' }],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        cssModules: {
          localIdentName: '[path][name]__[local]',
        },
      },
    },
  ],
  env: {
    STORYBOOK_URL: process.env.STORYBOOK_URL || 'http://localhost:6006/',
    EXAMPLE_URL: process.env.EXAMPLE_URL || 'https://colibrijs.github.io/colibrijs/main/example/',
    BRANCH_NAME: process.env.BRANCH_NAME || 'main',
    PULL_REQUEST_NUMBER: process.env.PULL_REQUEST_NUMBER || '',
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  previewHead: (head) => {
    if (!process.env.COMMIT_SHA) return head;

    const commitShaMeta = `<meta name="commit-sha" content="${process.env.COMMIT_SHA}">`;
    return `${head}${commitShaMeta}`;
  },
} satisfies StorybookConfig;
