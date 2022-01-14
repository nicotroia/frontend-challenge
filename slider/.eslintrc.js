module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier', 'import', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      spread: true,
      arrowFunctions: true,
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './src',
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-loss-of-precision': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'array-bracket-spacing': ['warn', 'never'],
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': ['warn', 'as-needed'],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['warn', 'single', { avoidEscape: true }],
  },
};
