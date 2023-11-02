import type { Meta, StoryObj } from '@storybook/react';

import { ComponentsLibraryModal } from './components-library-modal';
import ComponentsLibraryMeta from './components-library.stories';

type Story = StoryObj<typeof ComponentsLibraryModal>;

export default {
  ...ComponentsLibraryMeta,
  component: ComponentsLibraryModal,
  title: 'ComponentsLibrary/Modal',
  args: {
    editable: false,
    opened: true,
    selectable: false,
  },
} satisfies Meta<typeof ComponentsLibraryModal>;

export const Default: Story = {};

export const Editable: Story = {
  args: { editable: true },
};

export const Selectable: Story = {
  args: { selectable: true },
};
