/* eslint-disable */
module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    'no-console': 1,
    'indent': [ 'error', 2 ],
    'max-len': [ 'error', { 'code': 120 } ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'no-magic-numbers': [ 'error', { ignoreArrayIndexes: true }],
    'eqeqeq': [ 'error', "allow-null" ],
    'curly': [ 'error' ],
    'yoda': [ 'error' ],
  },
}