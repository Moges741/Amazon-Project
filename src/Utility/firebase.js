// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



//<=====================================>
// START by import with NECESSARY things
import {getAuth} from 'firebase/auth'
//for its database
import 'firebase/compat/firestore'
// for authentication
import 'firebase/compat/auth'
//<==================================>


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5yDiP7LhsY6mf8t1BT6KAr9E5Tk2FXVg",
  authDomain: "clone-3f347.firebaseapp.com",
  projectId: "clone-3f347",
  storageBucket: "clone-3f347.firebasestorage.app",
  messagingSenderId: "42018557410",
  appId: "1:42018557410:web:804aed7e1dd9e266b1fdbb",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//<=========> needs to be exported


export const auth = getAuth(app);
export const db = app.firestore();
