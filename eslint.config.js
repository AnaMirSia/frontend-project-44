import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'


export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.browser } },
  {
    rules: {
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'prefer-const': 'error',
      'no-unused-vars': 'warn',
      'comma-dangle': ['error', 'always-multiline'],
      'no-multiple-empty-lines': 'off',
      'indent': ['error', 2],
      'space-infix-ops': ['error', { 'int32Hint': false }],
      'keyword-spacing': [
        'error',
        {
          'before': true,
          'after': true,
        },
      ],
    },
  },
])