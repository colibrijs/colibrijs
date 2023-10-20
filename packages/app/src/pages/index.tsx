import { Page, type PageProps } from '@colibrijs/core';
import React, { useMemo } from 'react';

export default function PageIndex() {
  const ssr = useMemo(() => typeof window === 'undefined', []);
  const props: PageProps = useMemo(
    () => ({
      tree: [
        {
          id: '1',
          element: {
            componentName: 'Example',
            packageName: '@colibrijs/example',
            props: { text: 'parent' },
            src: 'https://colibrijs.github.io/colibrijs/main/example/',
            ssr,
          },
          children: [
            {
              id: '2',
              children: [],
              element: {
                componentName: 'Example',
                packageName: '@colibrijs/example',
                props: { text: 'child' },
                src: 'https://colibrijs.github.io/colibrijs/main/example/',
                ssr,
              },
            },
          ],
        },
        {
          id: '3',
          children: [],
          element: {
            componentName: 'Example',
            packageName: '@colibrijs/example',
            props: { text: 'sibling' },
            src: 'https://colibrijs.github.io/colibrijs/main/example/',
            ssr,
          },
        },
      ],
    }),
    [ssr]
  );

  return <Page {...props} />;
}
