// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAewNYS-TdNy3DvysXQ5J068uzbLkzYXs",
  authDomain: "bookreview-bjclark.firebaseapp.com",
  projectId: "bookreview-bjclark",
  storageBucket: "bookreview-bjclark.appspot.com",
  messagingSenderId: "199978250732",
  appId: "1:199978250732:web:d214a453ddb0c681d8d0c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

