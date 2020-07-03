module.exports = {
  name: 'tokkify',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tokkify',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
