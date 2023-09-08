import type { Meta, StoryObj } from '@storybook/react';

import { Remote } from './remote';

type Story = StoryObj<typeof Remote>;

export default {
  component: Remote,
  title: 'Remote',
} satisfies Meta<typeof Remote>;

export const Default: Story = {};
