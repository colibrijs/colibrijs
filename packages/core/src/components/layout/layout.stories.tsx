import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'antd';
import React from 'react';

import { Layout } from './layout';

type Story = StoryObj<typeof Layout>;

export default {
  component: Layout,
  title: 'Layout',
  args: {
    children: <Typography>Content</Typography>,
  },
} satisfies Meta<typeof Layout>;

export const Default: Story = {};

export const WithSidebar: Story = {
  args: {
    sidebar: <Typography>Sidebar</Typography>,
  },
};
