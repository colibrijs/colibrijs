import { api } from '@colibrijs/api-client';
import React, { useCallback, useEffect, useState } from 'react';

import { Page, type PageTree, type PageTreeLeaf } from '../page';

export interface Props {
  defaultTree: PageTree;
  ssr: boolean;
}

export type SSRProps = Pick<Props, 'defaultTree'>;

export interface UpdateTreeMessage {
  type: 'updatePageTree';
  payload: PageTree;
}

export interface ResizeMessage {
  type: 'resize';
  payload: {
    height: number;
  };
}

export function PagePreviewConsumer(props: Props) {
  const { defaultTree, ssr } = props;
  const [pageTree, setPageTree] = useState<PageTree>(defaultTree);

  const postMessageListener = useCallback((event: MessageEvent<unknown | UpdateTreeMessage>) => {
    const isObject = (something: unknown): something is object =>
      typeof something === 'object' && something !== null;
    const isUpdateTreeMessage = (obj: object): obj is UpdateTreeMessage =>
      'type' in obj && obj.type === 'updatePageTree';

    if (isObject(event.data) && isUpdateTreeMessage(event.data)) {
      setPageTree(event.data.payload);
    }
  }, []);

  const resizeHandler = useCallback(() => {
    const message: ResizeMessage = {
      type: 'resize',
      payload: { height: document.documentElement.scrollHeight },
    };

    if (document.documentElement.offsetHeight !== document.documentElement.scrollHeight) {
      window.postMessage(message);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('message', postMessageListener);

    return () => window.removeEventListener('message', postMessageListener);
  }, [postMessageListener]);

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [resizeHandler]);

  return <Page tree={pageTree} ssr={ssr} />;
}

export async function getServerSideProps(): Promise<{ props: SSRProps }> {
  const content = await api.content.findBy({});
  const tree: PageTree = content.map(
    (element): PageTreeLeaf => ({ id: element.id, element, children: [] })
  );

  return {
    props: { defaultTree: tree },
  };
}
