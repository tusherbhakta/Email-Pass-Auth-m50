// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8B5TtEBwhVOujQMxgF7YEDlJb2ag8Eng",
  authDomain: "email-pass-auth-m50.firebaseapp.com",
  projectId: "email-pass-auth-m50",
  storageBucket: "email-pass-auth-m50.firebasestorage.app",
  messagingSenderId: "555116415121",
  appId: "1:555116415121:web:b27496ee5e044104899730"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;