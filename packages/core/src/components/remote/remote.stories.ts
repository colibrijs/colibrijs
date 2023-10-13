import type { Meta, StoryObj } from '@storybook/react';

import { Remote } from './remote';

type Story = StoryObj<typeof Remote>;

export default {
  component: Remote,
  args: {
    componentName: 'Example',
    packageName: '@colibrijs/example',
    src: process.env.EXAMPLE_BUILD_SRC ?? 'http://localhost:3001/',
    ssr: false,
    props: {},
  },
} satisfies Meta<typeof Remote>;

export const Default: Story = {};
