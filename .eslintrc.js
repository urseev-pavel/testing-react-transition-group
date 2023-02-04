module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/prop-types': 0,
  },
};
