'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState, type PropsWithChildren } from 'react';

export function ProviderQueryClient(props: PropsWithChildren) {
  const { children } = props;
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
