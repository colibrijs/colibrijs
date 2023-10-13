/**
 * @colibrijs/cli creates two bundles: one for a client and second for a server. Function returns
 * the filename of remote bundle entry
 * @param ssr - is component rendering on the server side
 */
export function getRemoteEntryFileName(ssr: boolean): string {
  return ssr ? 'remote.server.js' : 'remote.client.js';
}
