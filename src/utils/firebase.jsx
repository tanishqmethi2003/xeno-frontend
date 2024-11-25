// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   User,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyD0LLVa_WadDAFG3kj8yCjeCibgKS1vpBM",
//   authDomain: "xeno-17bc6.firebaseapp.com",
//   projectId: "xeno-17bc6",
//   storageBucket: "xeno-17bc6.firebasestorage.app",
//   messagingSenderId: "1015571135578",
//   appId: "1:1015571135578:web:bc8c4e31addeeff2c8ec63",
//   measurementId: "G-4DRRLBK8Y7"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: "select_account ",
// });
// export const auth = getAuth();
// export const googleProvider = () => signInWithPopup(auth, provider);
// export type { User };



import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0LLVa_WadDAFG3kj8yCjeCibgKS1vpBM",
  authDomain: "xeno-17bc6.firebaseapp.com",
  projectId: "xeno-17bc6",
  storageBucket: "xeno-17bc6.firebasestorage.app",
  messagingSenderId: "1015571135578",
  appId: "1:1015571135578:web:bc8c4e31addeeff2c8ec63",
  measurementId: "G-4DRRLBK8Y7",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Set up Google Auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// Export authentication and sign-in function
export const auth = getAuth();
export const googleProvider = () => signInWithPopup(auth, provider);
