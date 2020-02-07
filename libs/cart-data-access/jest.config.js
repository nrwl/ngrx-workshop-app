module.exports = {
  name: 'cart-data-access',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/cart-data-access',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
