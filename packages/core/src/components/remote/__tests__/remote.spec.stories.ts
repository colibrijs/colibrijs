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

export const Content: Story = {
  ...Default,
  name: 'Component has waiting content',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const content = canvas.getByTestId('remote');

    expect(content.textContent).toBe('I am a remote component');
  },
};
