import firebase from 'firebase/app';
export type User = firebase.User

export type Question = {
  body: string,
  category: string,
  id: string,
}