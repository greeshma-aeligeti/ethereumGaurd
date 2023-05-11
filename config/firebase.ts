// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQIWrDZUSrJuO4O67bC2f9zgM69NGS5i4",
  authDomain: "ethereumguard.firebaseapp.com",
  projectId: "ethereumguard",
  storageBucket: "ethereumguard.appspot.com",
  messagingSenderId: "181998995712",
  appId: "1:181998995712:web:316a022f0a5deaad5e0be5",
  measurementId: "G-3J7R8YQZ38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
