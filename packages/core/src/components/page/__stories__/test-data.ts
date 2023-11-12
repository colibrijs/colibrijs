import { getExampleBuildSrc } from '../../remote/__tests__/test-data';
import type { Props } from '../page';

export const defaultProps: Props = {
  ssr: false,
  tree: [
    {
      id: '1',
      element: {
        id: '1',
        props: { text: 'parent' },
        component: {
          id: '1',
          componentName: 'Example',
          packageName: '@colibrijs/example',
          src: getExampleBuildSrc(),
        },
      },
      children: [
        {
          id: '2',
          children: [],
          element: {
            id: '2',
            props: { text: 'child' },
            component: {
              id: '1',
              componentName: 'Example',
              packageName: '@colibrijs/example',
              src: getExampleBuildSrc(),
            },
          },
        },
      ],
    },
    {
      id: '3',
      children: [],
      element: {
        id: '3',
        props: { text: 'sibling' },
        component: {
          id: '1',
          componentName: 'Example',
          packageName: '@colibrijs/example',
          src: getExampleBuildSrc(),
        },
      },
    },
  ],
};
