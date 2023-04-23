// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: <use .env to put the values here>,
  authDomain:<use .env to put the values here> ,
  projectId: <use .env to put the values here>,
  storageBucket: <use .env to put the values here>,
  messagingSenderId: <use .env to put the values here>,
  appId: <use .env to put the values here>
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;

