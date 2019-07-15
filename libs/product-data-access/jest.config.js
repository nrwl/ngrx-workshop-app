module.exports = {
  name: 'product-data-access',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/product-data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
