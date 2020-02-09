const prod = require('../../helpers/prod');

module.exports = {
  rules: {
    'no-shadow': prod(),
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': prod(),
    'no-use-before-define': ['error', { functions: false }],
  },
};
