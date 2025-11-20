// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuW1aZYdAu9z8650yabhBkLQUTKXZHDZ8",
  authDomain: "deepsurf-1bb20.firebaseapp.com",
  projectId: "deepsurf-1bb20",
  storageBucket: "deepsurf-1bb20.firebasestorage.app",
  messagingSenderId: "1073832376250",
  appId: "1:1073832376250:web:f053b48637e31e88100f83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Google Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Google Sign-In function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // ye Firebase user object return karega
  } catch (error) {
    throw error;
  }
};

export default app;
