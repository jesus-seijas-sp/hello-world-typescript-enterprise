module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript/base', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};