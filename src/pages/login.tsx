import React, { useEffect, useContext } from 'react';
import Router from 'next/router';
import firebase from '../lib/firebase';
import { AuthContext } from '../context/AuthProvider';

const Login: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser)
    currentUser && Router.push('/')
  }, [currentUser]);

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
  return (
    <div className="container">
    <button onClick={login}>googleでログインする</button>
    </div>
  )
}

export default Login