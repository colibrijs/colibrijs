import { Props } from '../remote';

/**
 * Returns the url where we can found the @colibrijs/example build. By default it will be served
 * from the main branch of colibrijs repository. User can specify environment variable
 * EXAMPLE_BUILD_SRC for redefine src.
 */
export function getExampleBuildSrc(): string {
  if (process.env.EXAMPLE_BUILD_SRC) {
    return process.env.EXAMPLE_BUILD_SRC;
  }

  const repositoryOwner = process.env.REPOSITORY_OWNER;
  const repositotyName = process.env.REPOSITORY_NAME;
  const branchName = process.env.BRANCH_NAME;

  return `https://${repositoryOwner}.github.io/${repositotyName}/${branchName}/example/`;
}

export const defaultProps: Props = {
  componentName: 'Example',
  packageName: '@colibrijs/example',
  src: getExampleBuildSrc(),
  ssr: false,
  props: {},
};
