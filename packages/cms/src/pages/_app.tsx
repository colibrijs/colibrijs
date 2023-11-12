import { ProviderQueryClient } from '@colibrijs/core';
import type { AppProps } from 'next/app';
import React from 'react';

import '../assets/global.css';
import { AntdRegistry } from '../components/antd-registry';

export default function ColibrijsApp({ Component, pageProps }: AppProps) {
  return (
    <AntdRegistry>
      <ProviderQueryClient>
        <Component {...pageProps} />
      </ProviderQueryClient>
    </AntdRegistry>
  );
}
