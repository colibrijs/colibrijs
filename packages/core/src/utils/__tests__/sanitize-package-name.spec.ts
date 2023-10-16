import { sanitizePackageName } from '../sanitize-package-name';

describe('sanitizePackageName', () => {
  it('replaces "@" with underscore', () => {
    expect.assertions(1);

    const input = '@test';
    const sanitized = sanitizePackageName(input);

    expect(sanitized).toBe('_test');
  });

  it('replaces "/" with double underscore', () => {
    expect.assertions(1);

    const input = 'test/package';
    const sanitized = sanitizePackageName(input);

    expect(sanitized).toBe('test__package');
  });

  it('replaces multiple "@" and "/" occurrences', () => {
    expect.assertions(1);

    const input = '@test/@package/with/multiple/slashes';
    const sanitized = sanitizePackageName(input);

    expect(sanitized).toBe('_test___package__with__multiple__slashes');
  });

  it('leaves other characters unchanged', () => {
    expect.assertions(1);

    const input = 'test-package_123';
    const sanitized = sanitizePackageName(input);

    expect(sanitized).toBe(input);
  });
});
