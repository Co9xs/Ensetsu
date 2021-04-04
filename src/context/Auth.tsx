import firebase from '../lib/firebase';
import React, { createContext, useEffect, useState } from 'react';
import { FirebaseUser } from '../types'
import { useRouter } from 'next/router';
import { getUserDocument } from '../services';

type AuthContextProps = {
  currentUser: FirebaseUser | null | undefined,
  isLoggedIn: boolean,
  isAuthChecking: boolean,
}

type Props = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  isLoggedIn: false,
  isAuthChecking: true,
});

const AuthProvider: React.VFC<Props> = (props) => {
  const {children} = props
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null | undefined>(undefined);
  const isLoggedIn = currentUser ? true : false
  const isAuthChecking = currentUser === undefined
  const router = useRouter()
  useEffect(() => {
    const initFirebaseAuth = (): Promise<FirebaseUser | null> => {
      return new Promise<FirebaseUser | null>((resolve) => {
        const unsibscribe = firebase.auth().onAuthStateChanged((user) => {
          resolve(user);
          unsibscribe();
        })
      })
    }

    (async function () {
      try {
        const user = await initFirebaseAuth();
        setCurrentUser(user)
        const userDoc = await getUserDocument(user);
        if (currentUser && !userDoc.exists) { //ログイン中かつ未登録の場合
          router.push('/onboarding')
        }
      } catch {
        setCurrentUser(null);
      }
    })();
  }, [currentUser]);

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