import { api } from '@colibrijs/api-client';
import { Page, type PageTree } from '@colibrijs/core';
import type { GetServerSidePropsResult } from 'next';
import React, { useMemo } from 'react';

interface SSRProps {
  pageTree: PageTree;
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<SSRProps>> {
  const content = await api.content.findBy({});
  // @ts-expect-error update it later
  const pageTree: PageTree = content.map((element) => ({
    id: element.id,
    element: {
      componentName: element.component.componentName,
      packageName: element.component.packageName,
      props: element.props,
      src: element.component.src,
      ssr: true,
    },
    children: [],
  }));

  return {
    props: { pageTree },
  };
}

export default function PageAny(props: SSRProps) {
  const { pageTree: pageTreeRaw } = props;

  const pageTree = useMemo(() => {
    return pageTreeRaw.map((leaf) => ({
      ...leaf,
      element: { ...leaf.element, ssr: typeof window === 'undefined' },
    }));
  }, [pageTreeRaw]);

  return <Page tree={pageTree} />;
}
