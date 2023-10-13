import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { Remote } from '../remote';
import DefaultMeta, { Default } from '../remote.stories';

type Story = StoryObj<typeof Remote>;

export default {
  ...DefaultMeta,
  title: 'Remote/tests',
} satisfies Meta<typeof Remote>;

export const RendersRemoteComponent: Story = {
  ...Default,
  name: 'renders remote component',
  args: {
    componentName: 'Example',
    packageName: '@colibrijs/example',
    src: process.env.EXAMPLE_BUILD_SRC ?? 'http://localhost:3001/',
    ssr: false,
    props: {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const remote = await canvas.findByText('I am an example');
    await expect(remote).toBeInTheDocument();
  },
};
