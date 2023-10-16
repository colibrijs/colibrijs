import { describe, it, expect } from '@jest/globals';

import { getPackageUrl } from '../utils/get-package-url';

describe(getPackageUrl.name, () => {
  it('if buildSrc ends with a slash, should return the url in format "#{buildSrc}#{packageName}"', () => {
    expect.assertions(1);

    expect(getPackageUrl('https://example.com/build/', 'package-name')).toBe(
      'https://example.com/build/package-name'
    );
  });

  it('if buildSrc does not end with a slash, should return the url in format "#{buildSrc}/#{packageName}"', () => {
    expect.assertions(1);

    expect(getPackageUrl('https://example.com/build', 'package-name')).toBe(
      'https://example.com/build/package-name'
    );
  });
});
