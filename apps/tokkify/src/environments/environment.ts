// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: 'debug',
  sentry: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBvvuiTQ53IFMN_KKVoEDF-Rr5jimn37QQ',
    authDomain: 'tokkify-song-requests.firebaseapp.com',
    databaseURL: 'https://tokkify-song-requests.firebaseio.com',
    projectId: 'tokkify-song-requests',
    storageBucket: 'tokkify-song-requests.appspot.com',
    messagingSenderId: '1069138239859',
    appId: '1:1069138239859:web:3e6092b7493868e5df2506',
    measurementId: 'G-JSG5N9MT37',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
