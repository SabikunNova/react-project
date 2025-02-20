// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMQPYmItZ9jS91awiTgEuY9GvSSr_JZxk",
  authDomain: "firstreact-dome-project.firebaseapp.com",
  projectId: "firstreact-dome-project",
  storageBucket: "firstreact-dome-project.appspot.com",
  messagingSenderId: "164258160523",
  appId: "1:164258160523:web:3beaced9386b200effd98e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;