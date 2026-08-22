import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCfxi6jdRj1EAhUtOjg-ChRSuZTXPkWIDI",
  authDomain: "avyra-666da.firebaseapp.com",
  projectId: "avyra-666da",
  storageBucket: "avyra-666da.firebasestorage.app",
  messagingSenderId: "238523673454",
  appId: "1:238523673454:web:afc7dea15dff6afc756f7f",
  measurementId: "G-XZ996JZR6N"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const googleProvider =
  new GoogleAuthProvider();


export {
  app,
  auth,
  db,
  googleProvider,

  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,

  onAuthStateChanged,
  signOut,

  doc,
  setDoc,
  getDoc,
  serverTimestamp
};