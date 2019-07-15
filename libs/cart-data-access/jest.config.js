module.exports = {
  name: 'cart-data-access',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/cart-data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
