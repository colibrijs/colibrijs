import type { Element } from '@colibrijs/api-client';
import React from 'react';

import { Remote } from '../remote';

export interface Leaf {
  /** Element id */
  id: string;

  /** Leaf's element */
  element: Element;

  /** Element's children */
  children: Leaf[];
}

export type Tree = Leaf[];

export interface Props {
  tree: Tree;
  ssr: boolean;
}

export function Page(props: Props) {
  const { tree, ssr } = props;

  return (
    <>
      {tree.map((leaf) => (
        <Remote element={leaf.element} ssr={ssr} key={leaf.id}>
          <Page tree={leaf.children} ssr={ssr} />
        </Remote>
      ))}
    </>
  );
}
