import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  reporters: ['default', ['github-actions', { silent: false }]],
  projects: ['api', 'app', 'cli', 'core', 'cms'].map((packageName) => ({
    displayName: `@colibrijs/${packageName}`,
    testMatch: [`<rootDir>/packages/${packageName}/src/**/*.spec.ts`],
    preset: 'ts-jest/presets/default',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': ['ts-jest', {}],
    },
  })),
};

export default jestConfig;
