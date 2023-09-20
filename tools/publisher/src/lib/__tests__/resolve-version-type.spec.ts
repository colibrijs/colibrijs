import { resolveVersionType } from '../resolve-version-type'; // Replace with the path to your module

describe(resolveVersionType.name, () => {
  it('if "BREAKING CHANGE" is in the commits, then return "major"', () => {
    expect.assertions(1);
    const commits = ['feat: add new feature', 'BREAKING CHANGE: modify API'];

    expect(resolveVersionType(commits)).toBe('major');
  });

  it('if "feat" is in the commits, then return "minor"', () => {
    expect.assertions(1);
    const commits = ['feat: add new feature', 'chore: update documentation'];

    expect(resolveVersionType(commits)).toBe('minor');
  });

  it('if "feature" is in the commits, then return "minor"', () => {
    expect.assertions(1);
    const commits = ['feature: add new feature', 'chore: update README'];

    expect(resolveVersionType(commits)).toBe('minor');
  });

  it('if "fix" is in the commits, then return "patch"', () => {
    expect.assertions(1);
    const commits = ['fix: fix a bug', 'chore: resolve critical issue'];

    expect(resolveVersionType(commits)).toBe('patch');
  });

  it('if "HOTFIX" is in the commits, then return "patch"', () => {
    expect.assertions(1);
    const commits = ['chore: fix a bug', 'HOTFIX: resolve critical issue'];

    expect(resolveVersionType(commits)).toBe('patch');
  });

  it('if "docs" is in the commits, then return "patch"', () => {
    expect.assertions(1);
    const commits = ['chore: fix a bug', 'docs: update documentation'];

    expect(resolveVersionType(commits)).toBe('patch');
  });

  it('if there are no commits, then return null', () => {
    expect.assertions(1);
    const commits: string[] = [];

    expect(resolveVersionType(commits)).toBeNull();
  });

  it('if there are unknown commit types, then return null', () => {
    expect.assertions(1);
    const commits = ['chore: update build process'];

    expect(resolveVersionType(commits)).toBeNull();
  });

  it('if both "feat" and "fix" are in the commits, then return "minor"', () => {
    expect.assertions(1);
    const commits = ['feat: add new feature', 'fix: fix a bug'];

    expect(resolveVersionType(commits)).toBe('minor');
  });

  it('if "BREAKING CHANGE" and "feat" are in the commits, then return "major"', () => {
    expect.assertions(1);
    const commits = ['BREAKING CHANGE: modify API', 'feat: add new feature'];

    expect(resolveVersionType(commits)).toBe('major');
  });
});
