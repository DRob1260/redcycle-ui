module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true
  },
  settings: {
    react: {
      version: "automatic"
    }
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "2019",
    sourceType: 'module'
  },
  plugins: [
    'react',
    'import',
    'prettier'
  ],
  rules: {
    'no-console': 'warn',
    'no-eval': 'error',
    'react/prop-types': 'off',
    'import/first': 'error',
    'prettier/prettier': ["error"]
  },
  ignorePatterns: ["src/serviceWorker.js", "cypress/**"]
}
