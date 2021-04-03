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
    const initFirebaseAuth = async (): Promise<firebase.User | null> => {
      return new Promise<User | null>((resolve) => {
        const unsibscribe = firebase.auth().onAuthStateChanged((user) => {
          resolve(user);
          unsibscribe()
        })
      })
    }
    const fetchUserDoc = (user: firebase.User | null): Promise<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>> => {
      return firebase.firestore().collection('users').doc(user?.uid).get()
    }
    (async function () {
      try {
        const user = await initFirebaseAuth()
        setCurrentUser(user)
        const userDoc = await fetchUserDoc(user)
        if (currentUser && !userDoc.exists) { //ログイン中かつ未登録の場合
          router.push('/onbording')
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