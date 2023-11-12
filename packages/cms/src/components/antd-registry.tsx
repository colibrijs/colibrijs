'use client';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from 'next/navigation';
import React, { useMemo, type PropsWithChildren } from 'react';

export function AntdRegistry(props: PropsWithChildren) {
  const { children } = props;
  const cache = useMemo<Entity>(() => createCache(), []);
  const html = useMemo(() => ({ __html: extractStyle(cache, true) }), [cache]);

  useServerInsertedHTML(() => <style id="antd" dangerouslySetInnerHTML={html} />);

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
}
