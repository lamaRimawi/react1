// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALCHU_-6Mv1dax9QS6s5tO6qpxe42PBG8",
  authDomain: "emplyee-list.firebaseapp.com",
  projectId: "emplyee-list",
  storageBucket: "emplyee-list.appspot.com",
  messagingSenderId: "891021726999",
  appId: "1:891021726999:web:439d2bac8364338f111352",
  measurementId: "G-V7ZVXN5N4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, analytics };
