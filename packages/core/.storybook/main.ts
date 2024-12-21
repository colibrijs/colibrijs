import type { StorybookConfig } from '@storybook/react-webpack5';

export default {
  stories: ['../components/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@colibrijs/sauron-eye-addon',
      options: {
        githubToken: '',
        pullRequestNumber: 0,
        reportLocation: '',
        repositoryOwner: '',
        repositoryName: '',
        screenshotsLocation: '',
        storybookUrl: '',
      },
    },
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
    EXAMPLE_URL: process.env.EXAMPLE_URL || 'https://colibrijs.github.io/colibrijs/main/example/',
    BRANCH_NAME: process.env.BRANCH_NAME || 'main',
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
