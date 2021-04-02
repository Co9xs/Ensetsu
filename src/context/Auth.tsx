import firebase from '../lib/firebase';
import React, { createContext, useEffect, useState } from 'react';
import { User } from '../types'
import { useRouter } from 'next/router';

type AuthContextProps = {
  currentUser: User | null | undefined,
  isLoggedIn: boolean,
  isAuthChecking: boolean,
}

type Props = {
  children: any
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  isLoggedIn: false,
  isAuthChecking: true,
});

const AuthProvider: React.VFC<Props> = (props) => {
  const {children} = props
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);
  const isLoggedIn = currentUser ? true : false
  const isAuthChecking = currentUser === undefined
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

    // userがfirestoreに存在しなければ'/onbording'に飛ばす
    const onUserIdentify = (user: firebase.User | null) => {
      console.log('here?')
      firebase
        .firestore()
        .collection("users")
        .doc(user?.uid)
        .get().then(doc => {
          if (!doc.exists) {
            router.push('/onbording')
          }
        }).catch(error => {
          console.error(error);
        });
    };

    (async function () {
      try {
        const user = await initFirebaseAuth()
        setCurrentUser(user)
        if (user !== null) {
          onUserIdentify(user)
        }
      } catch {
        setCurrentUser(null);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoggedIn,
        isAuthChecking,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }