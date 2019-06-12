const prod = require('../../helpers/prod');

module.exports = {
  rules: {
    'no-async-promise-executor': 'error',
    'no-console': prod('off', 'warn'),
    'no-debugger': prod('off'),
    'no-extra-parens': [prod(), 'all', { nestedBinaryExpressions: false, enforceForArrowConditionals: false }],
    'no-misleading-character-class': 'error',
    'no-template-curly-in-string': 'error',
  },
};
