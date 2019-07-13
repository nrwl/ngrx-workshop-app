module.exports = {
  name: 'ngrx-workshop-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngrx-workshop-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
