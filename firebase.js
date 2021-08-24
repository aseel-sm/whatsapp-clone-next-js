import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDnRxJQT5Cr40LqmSZokhyN4X1wMLIIJY",
  authDomain: "whatsapp--sm.firebaseapp.com",
  projectId: "whatsapp--sm",
  storageBucket: "whatsapp--sm.appspot.com",
  messagingSenderId: "1051794267703",
  appId: "1:1051794267703:web:f98cc03a2849e59f1aa9b2",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
