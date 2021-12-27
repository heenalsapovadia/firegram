import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC5CYZs31nVza61saacYBZXKfLojBi_8M",
  authDomain: "firegram-4eb83.firebaseapp.com",
  projectId: "firegram-4eb83",
  storageBucket: "firegram-4eb83.appspot.com",
  messagingSenderId: "948676233051",
  appId: "1:948676233051:web:5fd9621cf6d73d4de7fc7e",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// Initialize services
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
