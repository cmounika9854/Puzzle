const ANGULAR_SNAPSHOT_SERIALIZERS = [
  'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
  'jest-preset-angular/build/AngularSnapshotSerializer.js',
  'jest-preset-angular/build/HTMLCommentSerializer.js',
];

const TS_JEST_TRANSFORMERS = [
  'jest-preset-angular/build/InlineFilesTransformer',
  'jest-preset-angular/build/StripStylesTransformer',
];

module.exports = {
  name: 'books-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/books/data-access',
  snapshotSerializers: ANGULAR_SNAPSHOT_SERIALIZERS,
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: TS_JEST_TRANSFORMERS,
    },
  },
};