import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  updateProfile 
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrO1UreyyzZSr6bvUmzRMonm8dDfcyhNY",
  authDomain: "music-e-commerce.firebaseapp.com",
  projectId: "music-e-commerce",
  storageBucket: "music-e-commerce.appspot.com",
  messagingSenderId: "101493812602",
  appId: "1:101493812602:web:6ca2d49f17441e36b83ac3",
  measurementId: "G-EN8BS1SQ46"
};

console.log("Firebase Config:", firebaseConfig); // For debugging

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign up new users
const signUp = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName });
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

// Sign in existing users
const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

// Sign out current user
const signOutUser = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// Subscribe to auth state changes
const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { signUp, signIn, signOutUser, onAuthStateChange };
