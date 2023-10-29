import type { Meta, StoryObj } from '@storybook/react';

import { ComponentsLibrary } from './components-library';
import ComponentEditorMeta from '../component-editor/component-editor.stories';
import { getExampleBuildSrc } from '../remote/__tests__/test-data';

type Story = StoryObj<typeof ComponentsLibrary>;

export default {
  component: ComponentsLibrary,
  title: 'ComponentsLibrary',
  args: {},
  parameters: {
    mockData: [
      ...ComponentEditorMeta.parameters.mockData,
      {
        url: `${process.env.API_BASE_URL}/components`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: '1',
            componentName: 'Example',
            packageName: '@colibrijs/example',
            src: getExampleBuildSrc(),
          },
        ],
      },
      {
        url: `${process.env.API_BASE_URL}/components/1`,
        method: 'DELETE',
        status: 200,
        response: [
          {
            id: '1',
            componentName: 'Example',
            packageName: '@colibrijs/example',
            src: getExampleBuildSrc(),
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof ComponentsLibrary>;

export const Default: Story = {};
