import firebase from '../lib/firebase';
import React, { createContext, useEffect, useState } from 'react';
import { FirebaseUser, User } from '../types'
import { useRouter } from 'next/router';
import { getUserDocument } from '../services';

type AuthContextProps = {
  currentUser: FirebaseUser | null | undefined,
  isLoggedIn: boolean,
  isAuthChecking: boolean,
  storedUser: User | null | undefined
}

type Props = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  isLoggedIn: false,
  isAuthChecking: true,
  storedUser: undefined
});

const AuthProvider: React.VFC<Props> = (props) => {
  const {children} = props
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null | undefined>(undefined);
  const [storedUser, setStoredUser] = useState<User | null | undefined>(undefined);
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
        const user = await initFirebaseAuth(); //googleでログインしたユーザーを取得
        setCurrentUser(user) // currentUserとして保存
        const userDoc = await getUserDocument(user); // firestoreにその情報があるかどうかをチェック
        if (currentUser && !userDoc.exists) { // ログイン中かつ未登録の場合は登録ページへ
          router.push('/onboarding')
        }
        if (currentUser && userDoc.exists) { //ログイン中かつ既に登録済みの場合はuserに保存
          setStoredUser(userDoc.data() as User)
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
        storedUser,
        isLoggedIn,
        isAuthChecking,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }