import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import './Login.css';

function Login() {
    const signIn = () => {
        // do clever google login
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message));
    }

  return (
    <div className="login">
        <div className="login__logo">
            <img src="https://i.postimg.cc/CdpKJzfS/chat.png" alt="" />
        </div>

        <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;