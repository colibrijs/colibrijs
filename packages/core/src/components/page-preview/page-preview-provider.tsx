import React, { useCallback, useEffect, useRef, useState } from 'react';

import type { ResizeMessage, UpdateTreeMessage } from './page-preview-consumer';
import { styles } from './page-preview-provider.styles';
import type { PageTree } from '../page';

export interface Props {
  consumerUrl: string;
  pageTree: PageTree;
}

export function PagePreviewProvider(props: Props) {
  const { consumerUrl, pageTree } = props;
  const [iframeHeight, setIframeHeight] = useState<number>(50);
  const iframe = useRef<HTMLIFrameElement | null>(null);

  const postMessageListener = useCallback((event: MessageEvent<unknown | ResizeMessage>) => {
    const isObject = (something: unknown): something is object =>
      typeof something === 'object' && something !== null;
    const isResizeMessage = (obj: object): obj is ResizeMessage =>
      'type' in obj && obj.type === 'resize';

    if (isObject(event.data) && isResizeMessage(event.data)) {
      setIframeHeight(event.data.payload.height);
    }
  }, []);

  useEffect(() => {
    const iframeWindow = iframe.current?.contentWindow;
    iframeWindow?.addEventListener('message', postMessageListener);

    return () => iframeWindow?.removeEventListener('message', postMessageListener);
  }, [postMessageListener]);

  useEffect(() => {
    if (!iframe.current) {
      return;
    }

    const message: UpdateTreeMessage = {
      type: 'updatePageTree',
      payload: pageTree,
    };

    iframe.current.contentWindow?.postMessage(message);
  }, [pageTree]);

  return <iframe ref={iframe} src={consumerUrl} style={styles.iframe} height={iframeHeight} />;
}
