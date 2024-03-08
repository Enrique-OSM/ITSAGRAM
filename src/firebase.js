// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3eFoFSe91MJhsN_I5ANyU66WYfomBE0M",
  authDomain: "itsgram-abd31.firebaseapp.com",
  projectId: "itsgram-abd31",
  storageBucket: "itsgram-abd31.appspot.com",
  messagingSenderId: "974720186129",
  appId: "1:974720186129:web:60f2ac7eb78559e8a1beb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getAuth } from "firebase/auth";
export const auth = getAuth(app);