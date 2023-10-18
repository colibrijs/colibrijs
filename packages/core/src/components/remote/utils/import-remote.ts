/* eslint-disable eslint-comments/disable-enable-pair -- this module is crutch */
/* eslint-disable @typescript-eslint/ban-ts-comment -- this module is crutch */
/* eslint-disable eslint-comments/no-unlimited-disable -- this module is crutch */
// @ts-nocheck
/* eslint-disable -- this module is crutch */

import { type ImportRemoteOptions, injectScript } from '@module-federation/utilities';

// Webpack adds this variable after executing __webpack_init_sharing__
declare const __webpack_share_scopes__: Record<string, string>;

/** Loads remote component and returns that one */
export async function importRemote(options: ImportRemoteOptions) {
  const { url, module, remoteEntryFileName } = options;
  const fullUrl = `${url}/${remoteEntryFileName}`;

  import('./fake');

  __webpack_init_sharing__('default');

  const container = typeof window === 'undefined'
    ? await new Promise((resolve) => __webpack_require__.l(fullUrl, resolve, module))
    : await injectScript({ url: fullUrl, global: module });

  container.init(__webpack_share_scopes__.default);
  const factory = await container.get(module);
  return factory();
}
