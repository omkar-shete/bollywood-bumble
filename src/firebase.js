// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_firebaseAPIKey}`,
  authDomain: "bollywood-bumble.firebaseapp.com",
  projectId: "bollywood-bumble",
  storageBucket: "bollywood-bumble.appspot.com",
  messagingSenderId: "4932161874",
  appId: "1:4932161874:web:902e8510fc854a0c9bea8b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;