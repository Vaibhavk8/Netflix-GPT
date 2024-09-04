// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0CLuCyUb0L0nztj1kZtfBydVWmiasKv8",
  authDomain: "netflix-gpt-2cab1.firebaseapp.com",
  projectId: "netflix-gpt-2cab1",
  storageBucket: "netflix-gpt-2cab1.appspot.com",
  messagingSenderId: "209116661309",
  appId: "1:209116661309:web:89d57ecb5f77af1b62cc54",
  measurementId: "G-369V789HC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();