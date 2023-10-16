import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import DefaultMeta, { Default } from './remote.stories';
import { defaultProps } from '../__tests__/test-data';
import { Remote } from '../remote';

type Story = StoryObj<typeof Remote>;

export default {
  ...DefaultMeta,
  title: 'Remote/tests',
} satisfies Meta<typeof Remote>;

export const RendersRemoteComponent: Story = {
  ...Default,
  name: 'renders remote component',
  args: defaultProps,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const remote = await canvas.findByText('I am an example');
    await expect(remote).toBeInTheDocument();
  },
};
