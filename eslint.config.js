import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jest from 'eslint-plugin-jest';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const devFiles = [
  'eslint.config.js',
  'playwright.config.ts',
  'packages/core/.storybook/**/*.{ts,tsx,js}',
  'packages/sauron-eye-addon/**/*.{ts,tsx}',
  'packages/**/*.stories.{ts,tsx}',
  'packages/**/__tests__/**/*.{ts,tsx}',
  'packages/**/*.test.ts',
  'packages/**/*.spec.ts',
  'packages/**/{test-object,mocked,fixture}.{ts,tsx}',
];

export default [
  {
    ignores: ['packages/core/storybook-static', '**/node_modules/', '**/dist/', '**/.next/'],
  },
  js.configs.recommended,
  ...fixupConfigRules(
    compat.extends(
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react-perf/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/strict',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:eslint-comments/recommended',
      'plugin:prettier/recommended'
    )
  ),
  {
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        extraFileExtensions: ['.json'],
        project: 'tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: path.dirname(fileURLToPath(import.meta.url)),
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      'func-style': ['error', 'declaration'],
      'no-console': 'error',
      'no-use-before-define': ['error', { functions: false }],
      'eslint-comments/require-description': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always-and-inside-groups',
          groups: [
            ['builtin', 'external'],
            ['parent', 'sibling'],
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      // следующие правила отключены потому что eslint-plugin-import пока что некорректно работает в 9 версии eslint
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      // -----------------------------------------------------------------------------------------------------------
      'import/no-default-export': 'error',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: devFiles,
          peerDependencies: true,
        },
      ],
      'react/destructuring-assignment': ['error', 'always', { destructureInSignature: 'always' }],
      'react/jsx-boolean-value': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
  {
    files: [
      '**/eslint.config.js',
      '**/jest.config.js',
      '**/playwright.config.ts',
      'packages/core/.storybook/main.ts',
      'packages/core/.storybook/preview.ts',
      'packages/core/.storybook/test-runner.ts',
      'packages/example/components/*/index.ts',
      'packages/sauron-eye-addon/*.ts',
      'packages/{admin,application}/pages/**/*.tsx',
    ],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    /** Правила ниже применяются только к прод-файлам */
    ignores: devFiles,
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          // Запрещаем использовать во всех местах тс-оператор "!", кроме случаев styles.someClass!
          // Когда используем classNames, хотим писать объекты в которых ключи названия классов.
          // Тайпскрипт не верит что название класса существует в объекте styles, поэтому приходится
          // разрешить использовать этот оператор в случае с styles.
          selector: 'TSNonNullExpression[expression.object.name!="styles"]',
          message: 'Forbidden non-null assertion',
        },
      ],
    },
  },
  {
    ...jest.configs['flat/all'],
    files: ['**/*.spec.{ts,tsx}'],
    plugins: { jest },
    rules: {
      ...jest.configs['flat/all'].rules,
      '@typescript-eslint/no-non-null-assertion': 'off',
      'jest/valid-title': ['error', { ignoreTypeOfDescribeName: true }],
    },
  },
  ...compat.extends('plugin:storybook/recommended').map((config) => ({
    ...config,
    files: ['**/*.stories.{ts,tsx}'],
  })),
  {
    files: ['**/*.stories.{ts,tsx}'],
    plugins: { storybook },
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',
      parserOptions: {
        project: 'tsconfig.test.json',
      },
    },
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
