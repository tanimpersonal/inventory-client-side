// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: "assignment-11-dc4e4.firebaseapp.com",
  projectId: "assignment-11-dc4e4",
  storageBucket: "assignment-11-dc4e4.appspot.com",
  messagingSenderId: `${process.env.MESSAGING}`,
  appId: `${process.env.APP_ID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
