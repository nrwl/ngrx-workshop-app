module.exports = {
  name: 'shipping-data-access',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/shipping-data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
