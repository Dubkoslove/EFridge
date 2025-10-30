// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFiEheEpuT4eHmEVQBEdRS5HQptRJo2Hw",
  authDomain: "e-fridge-2b715.firebaseapp.com",
  projectId: "e-fridge-2b715",
  storageBucket: "e-fridge-2b715.firebasestorage.app",
  messagingSenderId: "974831085039",
  appId: "1:974831085039:web:a6fc87a44900a56ef5821a",
  measurementId: "G-TERJ4XMZF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
