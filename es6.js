module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    './rules/es6/possibleErrors.js',
    './rules/es6/variables.js',
    './rules/es6/stylisticIssues.js',
    './rules/es6/bestPractices.js',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
};
