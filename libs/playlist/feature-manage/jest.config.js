module.exports = {
  name: 'playlist-feature-manage',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/playlist/feature-manage',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
