module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb'
  ],
  plugins: [
    'unused-imports'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'react/prop-types': 0,
    'prefer-regex-literals': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'max-len': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-array-index-key': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'react/prefer-stateless-function': 'off',
    'no-use-before-define': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/destructuring-assignment': 'off',
    camelcase: 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'no-plusplus': 'off',
    'import/order': 'off',
    'no-console': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/named': 'off',
    'no-unused-expressions': 'off',
    'no-restricted-globals': 'off',
    'react/no-unused-state': 'off',
    'react/sort-comp': 'off',
    'react/no-access-state-in-setstate': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
  },
};
