import { getExampleBuildSrc } from '../../remote/__tests__/test-data';
import type { Props } from '../page';

export const defaultProps: Props = {
  tree: [
    {
      id: '1',
      element: {
        componentName: 'Example',
        packageName: '@colibrijs/example',
        props: { text: 'parent' },
        src: getExampleBuildSrc(),
        ssr: false,
      },
      children: [
        {
          id: '2',
          children: [],
          element: {
            componentName: 'Example',
            packageName: '@colibrijs/example',
            props: { text: 'child' },
            src: getExampleBuildSrc(),
            ssr: false,
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
        src: getExampleBuildSrc(),
        ssr: false,
      },
    },
  ],
};
