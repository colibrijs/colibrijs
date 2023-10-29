import type { Meta, StoryObj } from '@storybook/react';

import { ComponentEditor } from './component-editor';
import { getExampleBuildSrc } from '../remote/__tests__/test-data';

type Story = StoryObj<typeof ComponentEditor>;

export default {
  component: ComponentEditor,
  title: 'ComponentEditor',
  args: {
    opened: true,
  },
  parameters: {
    mockData: [
      {
        url: `${process.env.API_BASE_URL}/components`,
        method: 'POST',
        status: 201,
        response: {
          id: '1',
          componentName: 'Example',
          packageName: '@colibrijs/example',
          src: getExampleBuildSrc(),
        },
      },
    ],
  },
} satisfies Meta<typeof ComponentEditor>;

export const Default: Story = {};
