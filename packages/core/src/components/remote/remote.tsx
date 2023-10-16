import { importRemote } from '@module-federation/utilities';
import type { ComponentType } from 'react';
import React, { Suspense, lazy } from 'react';

import { getPackageUrl } from './utils/get-package-url';
import { getRemoteEntryFileName } from './utils/get-remote-entry-file-name';
import { sanitizePackageName } from '../../utils/sanitize-package-name';

type UnknownProps = Record<string, unknown>;

export interface Props<T extends UnknownProps = UnknownProps> {
  /** Component's name */
  componentName: string;

  /** Package's name where component is placed */
  packageName: string;

  /** Props for component */
  props: T;

  /** URL where the package is located */
  src: string;

  /** Is component rendering on the server side */
  ssr: boolean;
}

/**
 * Component that shows component from remote federation module
 */
export function Remote<T extends UnknownProps = UnknownProps>(props: Props<T>) {
  const { componentName, packageName, props: componentProps, src, ssr } = props;

  const Component = lazy(() => {
    return importRemote<Record<string, ComponentType<T>>>({
      url: getPackageUrl(src, packageName),
      module: sanitizePackageName(packageName),
      remoteEntryFileName: getRemoteEntryFileName(ssr),
      scope: sanitizePackageName(packageName),
    }).then((remoteModule) => ({ default: remoteModule[componentName] }));
  });

  return (
    <Suspense fallback="Loading...">
      {/* @ts-expect-error -- componentProps satisfies component's props, but react add some strange types */}
      <Component {...componentProps} />
    </Suspense>
  );
}
