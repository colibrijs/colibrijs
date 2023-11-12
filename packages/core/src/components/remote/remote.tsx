import type { Element } from '@colibrijs/api-client';
import React, { type PropsWithChildren, Suspense, lazy } from 'react';

import { getPackageUrl } from './utils/get-package-url';
import { getRemoteEntryFileName } from './utils/get-remote-entry-file-name';
import { importRemote } from './utils/import-remote';
import { sanitizePackageName } from '../../utils/sanitize-package-name';

export type Props = PropsWithChildren<{
  element: Element;
  ssr: boolean;
}>;

/**
 * Component that shows component from remote federation module
 */
export function Remote(props: Props) {
  const { children, element, ssr } = props;
  const { component } = element;

  const Component = lazy(() => {
    return importRemote({
      url: getPackageUrl(component.src, component.packageName),
      module: sanitizePackageName(component.packageName),
      remoteEntryFileName: getRemoteEntryFileName(ssr),
      scope: sanitizePackageName(component.packageName),
    }).then((remoteModule) => ({ default: remoteModule[component.componentName] }));
  });

  return (
    <Suspense fallback="Loading...">
      <Component {...element.props}>{children}</Component>
    </Suspense>
  );
}
