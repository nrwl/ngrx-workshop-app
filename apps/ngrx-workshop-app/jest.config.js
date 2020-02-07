module.exports = {
  name: 'ngrx-workshop-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngrx-workshop-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
