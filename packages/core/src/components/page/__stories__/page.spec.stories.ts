import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { defaultProps } from './test-data';
import { Page } from '../page';

type Story = StoryObj<typeof Page>;

export default {
  component: Page,
  title: 'Page/tests',
  args: defaultProps,
} satisfies Meta<typeof Page>;

export const RendersAllElements: Story = {
  name: 'renders all elements',
  args: defaultProps,
  play: async ({ canvasElement }) => {
    expect.assertions(3);

    const canvas = within(canvasElement);
    const [parent, child, sibling] = await Promise.all([
      canvas.findByText('parent'),
      canvas.findByText('child'),
      canvas.findByText('sibling'),
    ]);

    await expect(parent).toBeInTheDocument();
    await expect(child).toBeInTheDocument();
    await expect(sibling).toBeInTheDocument();
  },
};

export const ChildInsideParent: Story = {
  name: 'renders child element inside parent',
  args: defaultProps,
  play: async ({ canvasElement }) => {
    expect.assertions(1);

    const canvas = within(canvasElement);
    const [parent, child] = await Promise.all([
      canvas.findByText('parent'),
      canvas.findByText('child'),
    ]);

    await expect(parent).toContainElement(child);
  },
};
