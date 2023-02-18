import { useState } from 'react';
import { signInWithGoogle } from '@/utilis/firebaseAuth';
import css from '../styles/Home.module.css';
import Main from '@/components/main';

const Auth = (props) => {
  const [user, setUser] = useState({});

  function signIn() {
    const userPromised = signInWithGoogle();
    userPromised
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className={css.box}>
        {Object.keys(user).length === 0 ? (
          <button className={css.logInBtn} onClick={signIn}>
            Sign in with Google
          </button>
        ) : (
          <Main userData={user} />
        )}
      </div>
    </>
  );
};

export default Auth;
