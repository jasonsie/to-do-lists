import firebase from 'firebase/compat/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const config = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATA_BASE_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };
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

let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(config);
}
const auth = getAuth(app);
const firestore = firebase.firestore();
const provider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  let user = {};
  await signInWithPopup(auth, provider)
    .then((result) => {
      const { displayName, email, photoURL, uid } = result.user;
      user = { id: uid, name: displayName, email: email, image: photoURL };
    })
    .catch((error) => {
      console.log(error);
    });
  return user;
};
export { firestore, signInWithGoogle };
