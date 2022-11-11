import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6VIj_wv36nhUv2ezRArfVNWljqhpcc74",
  authDomain: "disneyplus-klinton.firebaseapp.com",
  projectId: "disneyplus-klinton",
  storageBucket: "disneyplus-klinton.appspot.com",
  messagingSenderId: "1065336200368",
  appId: "1:1065336200368:web:ef66152b184e4b6177ef75",
  measurementId: "G-H9K1DES8KZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
