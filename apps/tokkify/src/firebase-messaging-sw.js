importScripts('https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.5/firebase-messaging.js'
);
firebase.initializeApp({
  apiKey: 'AIzaSyBvvuiTQ53IFMN_KKVoEDF-Rr5jimn37QQ',
  authDomain: 'tokkify-song-requests.firebaseapp.com',
  databaseURL: 'https://tokkify-song-requests.firebaseio.com',
  projectId: 'tokkify-song-requests',
  storageBucket: 'tokkify-song-requests.appspot.com',
  messagingSenderId: '1069138239859',
  appId: '1:1069138239859:web:3e6092b7493868e5df2506',
  measurementId: 'G-JSG5N9MT37',
});
const messaging = firebase.messaging();
