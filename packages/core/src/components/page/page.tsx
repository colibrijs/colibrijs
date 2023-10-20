import React from 'react';

import { Remote, type RemoteProps } from '../remote';

export interface Leaf {
  /** Element id */
  id: string;

  /** Leaf's element */
  element: RemoteProps;

  /** Element's children */
  children: Leaf[];
}

type Tree = Leaf[];

export interface Props {
  tree: Tree;
}

export function Page(props: Props) {
  const { tree } = props;

  return (
    <>
      {tree.map((leaf) => (
        <Remote {...leaf.element} key={leaf.id}>
          <Page tree={leaf.children} />
        </Remote>
      ))}
    </>
  );
}
