import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtsqz29c2IGLYHReqbWZE_fzaBoAy3O4s",
  authDomain: "krokchat-cfd53.firebaseapp.com",
  projectId: "krokchat-cfd53",
  storageBucket: "krokchat-cfd53.appspot.com",
  messagingSenderId: "419888006344",
  appId: "1:419888006344:web:4bdf6a818ad9856991d1fd",
  measurementId: "G-PXTJFJSKQR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;