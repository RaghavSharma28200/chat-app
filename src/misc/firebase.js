import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyC4bXQIwRxypdASLfJ4ypNG5izr3fk1rA4',
  authDomain: 'chat-app-18f27.firebaseapp.com',
  projectId: 'chat-app-18f27',
  storageBucket: 'chat-app-18f27.appspot.com',
  messagingSenderId: '1064996440256',
  appId: '1:1064996440256:web:a46f3962846e2f2fad8525',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
