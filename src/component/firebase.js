// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeOpmv3Ta0Mps1OchjkICRuNGESbiif4U",
  authDomain: "netflix-74da7.firebaseapp.com",
  projectId: "netflix-74da7",
  storageBucket: "netflix-74da7.appspot.com",
  messagingSenderId: "560064597279",
  appId: "1:560064597279:web:fb23904d1bc6305806742a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);