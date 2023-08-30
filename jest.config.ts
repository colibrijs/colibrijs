// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- verbatimModuleSyntax and config in ts are incompatible
// @ts-nocheck

import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  reporters: ['default', ['github-actions', { silent: false }]],
  projects: ['api'].map((packageName) => ({
    displayName: `@colibrijs/${packageName}`,
    testMatch: [`<rootDir>/packages/${packageName}/src/**/*.spec.ts`],
    extensionsToTreatAsEsm: ['.ts'],
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          useESM: true,
          tsconfig: './tsconfig.json',
        },
      ],
    },
  })),
};

export default jestConfig;
