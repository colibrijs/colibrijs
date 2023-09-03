import { describe, expect, it, jest } from '@jest/globals';
import fs from 'fs/promises';

import type { PackageJson } from '../../types';
import { packageJsonSchema, readPackageJson } from '../read-package-json';

const PACKAGE_JSON: PackageJson = {
  name: 'test',
  main: 'index.js',
};

class NodeError extends Error {
  readonly code: string;

  constructor(code: string) {
    super(`NodeError ${code}`);
    this.code = code;
  }
}

describe('readPackageJson', () => {
  it('reads package.json from the path specified in the first parameter', async () => {
    expect.assertions(2);

    const accessSpy = jest.spyOn(fs, 'access').mockResolvedValue();
    const readFileSpy = jest.spyOn(fs, 'readFile').mockResolvedValue(JSON.stringify(PACKAGE_JSON));

    await readPackageJson('/path/to/package');

    expect(accessSpy).toHaveBeenCalledWith('/path/to/package/package.json', fs.constants.R_OK);
    expect(readFileSpy).toHaveBeenCalledWith('/path/to/package/package.json', 'utf-8');
  });

  it('returns parsed package.json', async () => {
    expect.assertions(1);

    jest.spyOn(fs, 'access').mockResolvedValue();
    jest.spyOn(fs, 'readFile').mockResolvedValue(JSON.stringify(PACKAGE_JSON));

    const packageJson = await readPackageJson('/path/to/package');
    expect(packageJson).toStrictEqual(packageJsonSchema.parse(PACKAGE_JSON));
  });

  it("throws an error if package.json doesn't exist", async () => {
    expect.assertions(1);

    jest.spyOn(fs, 'access').mockRejectedValue(new NodeError('ENOENT'));

    await expect(readPackageJson('/nonexistent-directory')).rejects.toThrow(
      "The package.json doesn't exist"
    );
  });

  it('throws an error if package.json has incorrect JSON syntax', async () => {
    expect.assertions(1);

    jest.spyOn(fs, 'access').mockResolvedValue();
    jest.spyOn(fs, 'readFile').mockResolvedValue('invalid JSON');

    await expect(readPackageJson('/path/to/package')).rejects.toThrow(
      'Wrong JSON syntax in package.json'
    );
  });

  it("throws an error if it can't read the package.json for an unknown reason", async () => {
    expect.assertions(1);

    jest.spyOn(fs, 'access').mockResolvedValue();
    jest.spyOn(fs, 'readFile').mockRejectedValue(new Error('Unknown error'));

    await expect(readPackageJson('/path/to/package')).rejects.toThrow(
      "Can't read the package.json"
    );
  });

  it.each([
    { field: 'name', message: 'Specify the name of component in package.json' },
    { field: 'main', message: 'The main field in package.json is required' },
  ])('throws a TypeError if the "$field" field is missing in package.json', async (testCase) => {
    expect.assertions(2);

    jest.spyOn(fs, 'access').mockResolvedValue();
    jest.spyOn(fs, 'readFile').mockResolvedValue(
      JSON.stringify({
        ...PACKAGE_JSON,
        [testCase.field]: undefined,
      })
    );

    await expect(readPackageJson('/path/to/package')).rejects.toThrow(TypeError);
    await expect(readPackageJson('/path/to/package')).rejects.toThrow(testCase.message);
  });

  it.each([
    { field: 'name', wrong: 5, message: 'Name in the package.json must be a string' },
    { field: 'main', wrong: true, message: 'Main in the package.json must be a string' },
  ])(
    'throws a TypeError if the "$field" field has the wrong value type in package.json',
    async (testCase) => {
      expect.assertions(2);

      jest.spyOn(fs, 'access').mockResolvedValue();
      jest
        .spyOn(fs, 'readFile')
        .mockResolvedValue(JSON.stringify({ [testCase.field]: testCase.wrong }));

      await expect(readPackageJson('/path/to/package')).rejects.toThrow(TypeError);
      await expect(readPackageJson('/path/to/package')).rejects.toThrow(testCase.message);
    }
  );
});
