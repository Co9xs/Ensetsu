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