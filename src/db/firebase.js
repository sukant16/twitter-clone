import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD9JDutLFnMwpkBb_Z1DzuA2cc2HLP7Eg",
  authDomain: "twitter-clone-3b58e.firebaseapp.com",
  databaseURL: "https://twitter-clone-3b58e.firebaseio.com",
  projectId: "twitter-clone-3b58e",
  storageBucket: "twitter-clone-3b58e.appspot.com",
  messagingSenderId: "486463062728",
  appId: "1:486463062728:web:00a13f6d6c18588d71dbfd",
  measurementId: "G-FMK925MLG8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db; 