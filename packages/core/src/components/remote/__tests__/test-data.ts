import { Props } from '../remote';

export const defaultProps: Props = {
  componentName: 'Example',
  packageName: '@colibrijs/example',
  src: process.env.EXAMPLE_BUILD_SRC ?? 'http://localhost:3001/',
  ssr: false,
  props: {},
};
