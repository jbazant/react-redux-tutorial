module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  env: {
    browser: true, // gives weird React.Node / React.Element not defined when set to false
    es6: true,
    node: false,
    'react-native/react-native': true,
  },
  plugins: ['detox'],
  extends: ['@callstack'],
  globals: {
    __DEV__: true,
    nockToCloud: false,
    nockToQACloud: false,
    nockToTwe: false,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
    react: {
      version: 'detect',
      flowVersion: '0.92',
    },
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'object-shorthand': [2, 'always'],
    'array-callback-return': 2,
    'prefer-destructuring': [2, { object: true, array: false }],
    'prefer-object-spread': 0, // nice rule but conflicts with Flow
    'require-atomic-updates': 0, // lots of false positives
    'import/no-duplicates': 2,
    'import/newline-after-import': ['error', { count: 1 }],
    'import/first': 2,
    radix: 2,
    'consistent-return': 2,
    'react/no-array-index-key': 1,
    'dot-notation': 2,
    'no-throw-literal': 2,
    'no-unneeded-ternary': 2,
    'react/jsx-curly-brace-presence': 2,
    'react/no-this-in-sfc': 2,
    'no-return-assign': [2, 'except-parens'],
    'prefer-promise-reject-errors': 2,
    'no-continue': 2,
    'no-param-reassign': [2, { props: false }],
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'no-restricted-imports': [
      2,
      {
        paths: [
          {
            name: 'styled-components/native/dist/styled-components.native.esm',
            message: 'Please use styled-components/native instead.',
          },
          {
            name: 'styled-components',
            message: 'Please use styled-components/native instead.',
          },
          {
            name: 'react-native',
            importNames: ['Text'],
            message:
              'Using vanilla Text may result in different cross-platform appearance, use CrossPlatformText instead.',
          },
        ],
      },
    ],
    'no-restricted-properties': [
      // TODO use together with https://github.com/benmosher/eslint-plugin-import/pull/1143/files
      // if it's ever finished
      2,
      {
        object: 'styled',
        property: 'Text',
        message:
          'Using vanilla Text may result in different cross-platform appearance, use CrossPlatformText instead.',
      },
    ],
    'flowtype/no-weak-types': [
      1,
      {
        any: false,
        Object: true,
        Function: true,
      },
    ],
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-console': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native-a11y/has-accessibility-hint': 0, // does not seem to bring any benefit
    'react/jsx-no-bind': [
      1,
      {
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowBind: false,
      },
    ],
    'react-native/no-raw-text': [
      0,
      {
        skip: ['Trans'],
      },
    ],
    'promise/no-return-wrap': [2, { allowReject: true }],
    'import/no-extraneous-dependencies': [0],
    'import/order': [0], // TODO this should be enabled in separate PR, when the MRs are quiet (will cause conflicts)
    'prettier/prettier': 2,
    'max-params': [2, 4],
    // NOTE jest/no-large-snapshots option seems to be ignored :/
    'jest/no-large-snapshots': [2, { maxSize: 50 }],
  },
};
