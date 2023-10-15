import { describe, it, expect } from '@jest/globals';

import { getRemoteEntryFileName } from '../utils/get-remote-entry-file-name';

describe(getRemoteEntryFileName.name, () => {
  it('if ssr is true, returns "remote.server.js"', () => {
    expect.assertions(1);
    expect(getRemoteEntryFileName(true)).toBe('remote.server.js');
  });

  it('if ssr is false, returns "remote.client.js"', () => {
    expect.assertions(1);
    expect(getRemoteEntryFileName(false)).toBe('remote.client.js');
  });
});
