import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  reporters: ['default', ['github-actions', { silent: false }]],
  projects: ['api', 'app', 'cli', 'core', 'cms'].map((packageName) => ({
    displayName: `@colibrijs/${packageName}`,
    testMatch: [`<rootDir>/packages/${packageName}/src/**/*.spec.{ts,tsx}`],
    preset: 'ts-jest/presets/default',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': ['ts-jest', {}],
    },
  })),
};

export default jestConfig;
