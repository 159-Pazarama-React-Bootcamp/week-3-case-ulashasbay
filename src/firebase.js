import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJCUz8EpFGFznrh7vy5AeRVXsEMdUh1GQ",
  authDomain: "pazarama-react-auth-dev.firebaseapp.com",
  projectId: "pazarama-react-auth-dev",
  storageBucket: "pazarama-react-auth-dev.appspot.com",
  messagingSenderId: "492181025226",
  appId: "1:492181025226:web:98560c6cb21b9867e41f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);