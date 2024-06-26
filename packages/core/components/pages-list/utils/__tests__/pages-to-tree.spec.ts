import type { IPage } from '@colibrijs/types';
import { describe, expect, it } from '@jest/globals';
import type { TreeDataNode } from 'antd';

import type { Options } from '../get-title';
import { pagesToTree } from '../pages-to-tree';

const options: Options<string> = {
  wrapTitle: (value: string) => value,
};

describe(pagesToTree.name, () => {
  it('преобразует список страниц в дерево', () => {
    expect.assertions(1);

    const pages: IPage[] = [
      { id: '1', name: 'Главная', route: '/' },
      { id: '2', name: 'О нас', route: '/about' },
      { id: '3', name: 'Контакты', route: '/contacts' },
      { id: '4', name: 'Пользователи', route: '/users' },
      { id: '5', name: 'Пользователь 1', route: '/users/1' },
      { id: '6', name: 'Пользователь 2', route: '/users/2' },
      { id: '7', name: 'Пользователь 3', route: '/users/3' },
      { id: '8', name: 'Пользователь 4', route: '/users/4' },
      { id: '9', name: 'О пользователе 4', route: '/users/4/about' },
    ];

    const expectedTree: TreeDataNode[] = [
      { key: '1', title: '/', isLeaf: true, children: [] },
      { key: '2', title: 'about', isLeaf: true, children: [] },
      { key: '3', title: 'contacts', isLeaf: true, children: [] },
      {
        key: '4',
        title: 'users',
        isLeaf: false,
        children: [
          { key: '5', title: '1', isLeaf: true, children: [] },
          { key: '6', title: '2', isLeaf: true, children: [] },
          { key: '7', title: '3', isLeaf: true, children: [] },
          {
            key: '8',
            title: '4',
            isLeaf: false,
            children: [{ key: '9', title: 'about', isLeaf: true, children: [] }],
          },
        ],
      },
    ];

    expect(pagesToTree(options, pages)).toStrictEqual(expectedTree);
  });
});
