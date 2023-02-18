import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyDIxYuMUjIoQ6iQP0rRBk4P4Fxxi_sy7wc',
  authDomain: 'to-do-lists-b7947.firebaseapp.com',
  databaseURL: 'https://to-do-lists-b7947-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'to-do-lists-b7947',
  storageBucket: 'to-do-lists-b7947.appspot.com',
  messagingSenderId: '891659210972',
  appId: '1:891659210972:web:242a35bfef4cfffcc5e419',
  measurementId: 'G-ZK2N195H1P',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export default firestore;
