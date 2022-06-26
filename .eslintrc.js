module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react'],
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      alias: {
        node: {
          extensions: ['.js', '.jsx'],
          paths: ['./src'],
        },
        map: [
          ['@atoms', './src/atoms'],
          ['@components', './src/components'],
          ['@constants', './src/constants'],
          ['@static', './static'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/*'],
}
