import type { Meta, StoryObj } from '@storybook/react';

import { ContentEditor } from './content-editor';

type Story = StoryObj<typeof ContentEditor>;

export default {
  component: ContentEditor,
  title: 'ContentEditor',
  args: {},
} satisfies Meta<typeof ContentEditor>;

export const Default: Story = {};
