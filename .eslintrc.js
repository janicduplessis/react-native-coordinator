const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  extends: [
    'anf',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  rules: {
    'react/require-extension': OFF,
    'class-methods-use-this': OFF,
  },
};
