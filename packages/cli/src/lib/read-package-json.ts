import fs from 'node:fs/promises';
import path from 'node:path';
import { object, string, ZodError, ZodType } from 'zod';

import type { PackageJson } from '../types';

export const packageJsonSchema: ZodType<PackageJson> = object({
  name: string({
    required_error: 'Specify the name of component in package.json',
    invalid_type_error: 'Name in the package.json must be a string',
  }),
  main: string({
    required_error: 'The main field in package.json is required',
    invalid_type_error: 'Main in the package.json must be a string',
  }),
});

/**
 * Returns package.json file as an object
 * @param root - absolute path to current working directory
 */
export async function readPackageJson(root: string): Promise<PackageJson> {
  try {
    const packageJsonPath = path.join(root, 'package.json');
    await fs.access(packageJsonPath, fs.constants.R_OK);

    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);

    return packageJsonSchema.parse(packageJson);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('Wrong JSON syntax in package.json');
    }

    if (error instanceof ZodError) {
      throw new TypeError(error.message);
    }

    if (isErrorWithCode(error) && error.code === 'ENOENT') {
      throw new Error("The package.json doesn't exist");
    }

    throw new Error("Can't read the package.json");
  }
}

type ErrorWithCode = Error & { code: unknown };

/**
 * Returns true if error is instanceof Error and has property code
 * @param error
 */
function isErrorWithCode(error: unknown): error is ErrorWithCode {
  return error instanceof Error && 'code' in error;
}
