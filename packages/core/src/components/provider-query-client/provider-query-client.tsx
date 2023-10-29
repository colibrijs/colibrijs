import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useMemo, type PropsWithChildren } from 'react';

export function ProviderQueryClient(props: PropsWithChildren) {
  const { children } = props;
  const queryClient = useMemo(() => new QueryClient(), []);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
