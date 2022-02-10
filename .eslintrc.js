module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: { ecmaVersion: 8 },
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['src/**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
      },
      extends: [
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],

        eqeqeq: ['error', 'always'],
        'no-use-before-define': 'off',
        'no-unused-expressions': 'off',
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'no-restricted-globals': 'off',
        'no-alert': 'off',
        'no-new': 'off',
        'class-methods-use-this': 'off',
        'func-names': 'off',
        'operator-assignment': 'off',

        '@typescript-eslint/explicit-module-boundary-types': 'off',

        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/self-closing-comp': 'off',
        'react/prop-types': 'off',
        'react/function-component-definition': 'off',

        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/label-has-for': 'off',

        'import/extensions': ['error', 'never'],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['**/*.{test,spec}.{ts,tsx,js,jsx}', '**/*.stories.tsx'],
          },
        ],
      },
    },
  ],
};
