const prod = require('./helpers/prod');

module.exports = {
  extends: [
    '@vue/eslint-config-standard',
    'plugin:vue/strongly-recommended',
    './rules/vue/recommended.js',
    './rules/vue/stronglyRecommended.js',
  ],
  rules: {
    // Uncategorized
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      ignores: [
        'component',
        'router-view',
        'router-link',
        'slot',
        'keep-alive',
        'transition',
        'transition-group',
      ],
    }],
    'vue/script-indent': [prod(), 2, {
      baseIndent: 1,
      switchCase: 1,
    }],
    'vue/html-indent': [prod(), 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
    }],
    // New
    'vue/no-boolean-default': 'error',
    'vue/eqeqeq': 'error',
    'vue/match-component-file-name': 'error',
    'vue/object-curly-spacing': [prod(), 'always'],
    'vue/space-infix-ops': ['error', { int32Hint: false }],
    'vue/arrow-spacing': prod(),
    'vue/block-spacing': [prod(), 'always'],
    'vue/brace-style': [prod(), '1tbs', { allowSingleLine: true }],
    'vue/camelcase': prod(),
    'vue/comma-dangle': [prod(), 'always-multiline'],
    'vue/key-spacing': prod(),
    'vue/array-bracket-spacing': [prod(), 'never'],
    'vue/require-direct-export ': 'off',
    'vue/v-on-function-call': 'error',
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
};
