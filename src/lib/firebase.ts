import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAMQ6zh2JzGgIEEULKbrngpPDEKXkEdiWQ",
  authDomain: "ensetsu-48c7c.firebaseapp.com",
  projectId: "ensetsu-48c7c",
  storageBucket: "ensetsu-48c7c.appspot.com",
  messagingSenderId: "165576830575",
  appId: "1:165576830575:web:f06492d7a2c9a36f11e79a",
  measurementId: "G-THXJH13F52"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const db = firebase.firestore();

export default firebase