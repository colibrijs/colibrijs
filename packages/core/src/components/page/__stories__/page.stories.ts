import type { Meta, StoryObj } from '@storybook/react';

import { defaultProps } from './test-data';
import { Page } from '../page';

type Story = StoryObj<typeof Page>;

export default {
  component: Page,
  args: defaultProps,
  title: 'Page',
} satisfies Meta<typeof Page>;

export const Default: Story = {};
