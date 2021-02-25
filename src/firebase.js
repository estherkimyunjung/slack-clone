import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBV7KXDWV7IFgLKTjRxCq-W1nghymxG8GQ",
  authDomain: "slackwithesther.firebaseapp.com",
  projectId: "slackwithesther",
  storageBucket: "slackwithesther.appspot.com",
  messagingSenderId: "824563448550",
  appId: "1:824563448550:web:9667d1ef6b68b7c4a01927",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
//set DB
const db = firebaseApp.firestore();
//set Auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
