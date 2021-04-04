import firebase from 'firebase/app';
export type FirebaseUser = firebase.User

export type DocumentData = firebase.firestore.DocumentData

export type User = {
  uid: string | undefined,
  displayName: string | null,
  userName: string,
  photoURL: string | null | undefined,
}

export type Question = {
  body: string,
  category: string,
  id: string,
}

export type LinkItem = {
  label: string,
  href: string
}

export type Layout = 'hasHeader' | 'noHeader'