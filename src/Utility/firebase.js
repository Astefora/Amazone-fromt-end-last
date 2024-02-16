
import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDg-cloLNNKCeYTp2AjKV_Kh4BRTbnFBUs",
  authDomain: "clone-26946.firebaseapp.com",
  projectId: "clone-26946",
  storageBucket: "clone-26946.appspot.com",
  messagingSenderId: "862738580215",
  appId: "1:862738580215:web:03d2d64c1337e62274c9f2",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
