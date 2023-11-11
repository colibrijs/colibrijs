import { ProviderQueryClient } from '@colibrijs/core';
import React, { type PropsWithChildren } from 'react';

import { AntdRegistry } from '../lib/antd-registry';
import './global.css';

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ProviderQueryClient>{children}</ProviderQueryClient>
        </AntdRegistry>
      </body>
    </html>
  );
}
