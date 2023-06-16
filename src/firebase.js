// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD-1MhHKLBhKytWr4_eRV809iBAzup4NgU",
  authDomain: "floridatech-b9abb.firebaseapp.com",
  databaseURL: "https://floridatech-b9abb-default-rtdb.firebaseio.com",
  projectId: "floridatech-b9abb",
  storageBucket: "floridatech-b9abb.appspot.com",
  messagingSenderId: "661092638115",
  appId: "1:661092638115:web:06eec2a28ee2596abace16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth();
const provider= new GoogleAuthProvider();

export {app, auth, provider};