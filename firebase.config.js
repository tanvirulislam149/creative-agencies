// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyBsXpeNiK1VfyXit_5ZzMWzGiuopw4xTes",
  authDomain: "creative-agencies-75119.firebaseapp.com",
  projectId: "creative-agencies-75119",
  storageBucket: "creative-agencies-75119.appspot.com",
  messagingSenderId: "892197459152",
  appId: "1:892197459152:web:8a2163e3357915e9417ad5",

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

