import { db } from '../lib/firebase';
import firebase from 'firebase'
import { Question, FirebaseUser, User, DocumentData } from '../types';

export const getQuestions = async (): Promise<Question[]> => {
  const questions: Question[] = []
  await db.collection('questions').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        questions.push({
          id: doc.id,
          ...doc.data()
        } as Question)
      })
    }).catch(error => {
      console.error(error)
    })
  return questions;
}

export const getQuestion = async (id: string): Promise<DocumentData | void> => {
  return db.collection("questions")
    .doc(id)
    .get()
    .then(doc => {
      if (doc.exists) {
        return doc.data()
      }
    }).catch(error => {
      console.log(error)
    })
}

export const login = (): Promise<void> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider)
}

export const logout = (): Promise<void> => {
  return firebase.auth().signOut()
}

export const register = (user: User): void => {
  db.collection("users")
    .doc(user?.uid)
    .get()
    .then(doc => {
      if (doc.exists) {
        console.error("User: " + user?.uid + " already exists");
        throw new Error("User: " + user?.uid + " already exists");
      } else {
        doc.ref.set({
          uid: user?.uid,
          displayName: user?.displayName,
          userName: user?.userName,
          photoURL: user?.photoURL
        });
      }
    })
    .catch(error => {
      console.error(error);
    });
}

export const checkUserNameExistance = (userName: string) => {
  return db.collection('userNames')
    .doc(userName)
    .get().then(doc => {
      if (doc.exists) {
        throw new Error(`ユーザー名 ${userName} は既に使用されています`)
      } else {
        doc.ref.set({
          userName
        })
      }
    })
}

// firebaseUser型のcurrentUserからfirestoreに保存されたUser型を取り出す関数
export const getUserDocument = (user: FirebaseUser | null | undefined): Promise<
  firebase.firestore.DocumentSnapshot<DocumentData>
> => {
  return db.collection('users').doc(user?.uid).get()
}