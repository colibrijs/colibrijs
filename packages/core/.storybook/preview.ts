import React from 'react';
import type { Preview } from '@storybook/react';

import { ProviderQueryClient } from '../src/components/provider-query-client';

export default {
  decorators: [
    (Story) => React.createElement(ProviderQueryClient, {}, React.createElement(Story)),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
} satisfies Preview;
