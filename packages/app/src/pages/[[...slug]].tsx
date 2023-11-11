import { api } from '@colibrijs/api-client';
import { Page, type PageTree, type PageTreeLeaf } from '@colibrijs/core';
import type { GetServerSidePropsResult } from 'next';
import React from 'react';

interface SSRProps {
  pageTree: PageTree;
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<SSRProps>> {
  const content = await api.content.findBy({});
  const pageTree: PageTree = content.map(
    (element): PageTreeLeaf => ({
      id: element.id,
      element,
      children: [],
    })
  );

  return {
    props: { pageTree },
  };
}

export default function PageAny(props: SSRProps) {
  const { pageTree } = props;

  return <Page ssr={typeof window === 'undefined'} tree={pageTree} />;
}
