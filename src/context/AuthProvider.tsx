import firebase from '../lib/firebase';
import React, { createContext, useEffect, useState } from 'react';
import { User } from '../types'
import { useRouter } from 'next/router';

type AuthContextProps = {
  currentUser: User | null,
  isLoggedIn: boolean,
}

type Props = {
  children: any
}

const AuthContext = createContext<AuthContextProps>({ currentUser: null, isLoggedIn: false });

const AuthProvider: React.VFC<Props> = (props) => {
  const {children} = props
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const isLoggedIn = currentUser ? true : false
  const router = useRouter()
  useEffect(() => {

    const initFirebaseAuth = async () => {
      return new Promise<User | null>((resolve) => {
        const unsibscribe = firebase.auth().onAuthStateChanged((user) => {
          resolve(user);
          unsibscribe()
        })
      })
    }

    // userがfirestoreに存在しなければ'/onbording'に飛ばす関数
    const onUserIdentify = (user: firebase.User | null) => {
      firebase
        .firestore()
        .collection("users")
        .doc(user?.uid)
        .get().then(doc => {
          if (doc.exists === false) {
            router.push('/onbording')
          }
        }).catch(error => {
          console.error(error);
        });
    };

    const setCurrentUserAsync = async () => {
      const user = await initFirebaseAuth()
      setCurrentUser(user)
      if (user !== null) {
        onUserIdentify(user)
      }
    }

    setCurrentUserAsync();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }