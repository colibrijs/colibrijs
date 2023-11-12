import type { Element } from '@colibrijs/api-client';
import {
  ContentEditor,
  Layout,
  PagePreviewProvider,
  type PageTree,
  type PageTreeLeaf,
} from '@colibrijs/core';
import React, { useCallback, useState } from 'react';

export default function PageContent() {
  const [pageTree, setPageTree] = useState<PageTree>([]);

  const onChangeContent = useCallback((content: Element[]) => {
    const newTree = content.map(
      (element): PageTreeLeaf => ({
        id: element.id,
        element,
        children: [],
      })
    );

    setPageTree(newTree);
  }, []);

  return (
    <Layout sidebar={<ContentEditor onChangeContent={onChangeContent} />}>
      <PagePreviewProvider consumerUrl="/pages/preview" pageTree={pageTree} />
    </Layout>
  );
}
