// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBrO1UreyyzZSr6bvUmzRMonm8dDfcyhNY",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "music-e-commerce.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "music-e-commerce",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "music-e-commerce.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "101493812602",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:101493812602:web:6ca2d49f17441e36b83ac3",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-EN8BS1SQ46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, storage, db, analytics };