// see https://jestjs.io/docs/en/configuration#transformignorepatterns-array-string
const packagesToTransformWithBabel = [
  'react-native', // all react native packages
  '@expo',
  '@unimodules',
  'expo',
  'color',
];

const transformIgnorePatterns = [
  `<rootDir>/node_modules/(?!(${packagesToTransformWithBabel.join('|')}))`,
];

const testPathIgnorePatterns = ['<rootDir>/node_modules/', '/node_modules/'];

module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  testPathIgnorePatterns,
  transformIgnorePatterns,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
  },
};
