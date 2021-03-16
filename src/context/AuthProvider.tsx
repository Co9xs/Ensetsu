import firebase from '../lib/firebase';
import React, { createContext, useEffect, useState } from 'react';
import { User } from '../types'

type AuthContextProps = {
  currentUser: User | null | undefined,
  isLoggedIn: boolean
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined, isLoggedIn: false });

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);
  const isLoggedIn = currentUser ? true : false
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }