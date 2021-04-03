import { db } from '../lib/firebase';
import firebase from 'firebase'
import { Question } from '../types';

export const getQuestions = async (): Promise<void|Question[]> => {
  const docs: Question[] = []
  await db.collection('questions').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        docs.push({
          id: doc.id,
          ...doc.data()
        } as Question)
      })
    }).catch(error => {
      console.error(error)
    })
  return docs;
}

export const getQuestion = async (id: string): Promise<void|firebase.firestore.DocumentData|undefined> => {
  const docRef = db.collection("questions").doc(id);
  return await docRef.get()
    .then(doc => {
      if (doc.exists) {
        return doc.data()
      } else {
        return undefined
      }
    }).catch(error => {
      console.log(error)
    })
}

export const login = (): Promise<void> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.error(error)
  })
}

export const logout = (): Promise<void> => {
  return firebase.auth().signOut()
}

export const register = (user: any): void => {
  firebase
    .firestore()
    .collection("users")
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
  return firebase
    .firestore()
    .collection('userNames')
    .doc(userName)
    .get().then(doc => {
      if (doc.exists) {
        throw new Error(`ユーザー名 ${userName} は既に使用されています`)
      } else {
        doc.ref.set({
          userName: userName
        })
      }
    })
}