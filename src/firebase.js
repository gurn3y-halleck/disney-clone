//THIS LINE IS NOT BEING SUPPORTED CURRENTLY//import firebase from "firebase";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAigNlfCaqWDNLSopPxBxnYw8gSzN3XRic",
  authDomain: "disneypls-clone.firebaseapp.com",
  projectId: "disneypls-clone",
  storageBucket: "disneypls-clone.appspot.com",
  messagingSenderId: "530888738604",
  appId: "1:530888738604:web:13f602932f22ea479d8e89",
  measurementId: "G-FSS44X7EZ3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider, storage, signInWithPopup };
export default db;

//const analytics = getAnalytics(firebaseApp);