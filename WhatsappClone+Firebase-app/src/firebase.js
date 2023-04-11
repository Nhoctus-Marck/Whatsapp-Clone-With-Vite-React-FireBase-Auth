// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvtTItCzSUZbBuhzRg3QN-nSbmCAZe_lo",
  authDomain: "wtsappclone-43d56.firebaseapp.com",
  projectId: "wtsappclone-43d56",
  storageBucket: "wtsappclone-43d56.appspot.com",
  messagingSenderId: "863439760825",
  appId: "1:863439760825:web:26bb03e7c28c05bf7eda68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()
