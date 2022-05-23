// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZpucprVBTWoM5TgVPs0cb5wcii6LyWcw",
  authDomain: "assignment-11-dc4e4.firebaseapp.com",
  projectId: "assignment-11-dc4e4",
  storageBucket: "assignment-11-dc4e4.appspot.com",
  messagingSenderId: "573464267203",
  appId: "1:573464267203:web:be930fbb86010267735576",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
