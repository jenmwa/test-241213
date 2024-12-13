import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'camelcase': 'error',
      'no-var': 'error',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      // 'no-console': 'warn',
      'eqeqeq': ['error', 'always'],
      'curly': 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
