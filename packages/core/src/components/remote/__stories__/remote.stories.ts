import type { Meta, StoryObj } from '@storybook/react';

import { defaultProps } from '../__tests__/test-data';
import { Remote } from '../remote';

type Story = StoryObj<typeof Remote>;

export default {
  component: Remote,
  args: defaultProps,
  title: 'Remote',
} satisfies Meta<typeof Remote>;

export const Default: Story = {};
