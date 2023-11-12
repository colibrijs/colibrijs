import {
  PagePreviewConsumer,
  getPagePreviewConsumerSsrProps,
  type PagePreviewConsumerSSRProps,
} from '@colibrijs/core';

import type { GetServerSideProps } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps = getPagePreviewConsumerSsrProps;

export default function PagePreview(props: PagePreviewConsumerSSRProps) {
  const { defaultTree } = props;

  return <PagePreviewConsumer defaultTree={defaultTree} ssr={typeof window === 'undefined'} />;
}
