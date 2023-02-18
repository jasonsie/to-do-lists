import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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

const app = initializeApp(config);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
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
