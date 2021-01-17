/* eslint-disable */
const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react-hooks'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript:{
      },
      webpack: {
        config: {
          resolve: {
            extensions:['.js','.jsx','.ts','.tsx']
          },
        },
      },
    },
  },
  rules: {
    'import/extensions': 0,
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 1,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 1,
    'react/self-closing-comp': 0,
  },
};
