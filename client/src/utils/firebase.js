
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "prepverse-c69b2.firebaseapp.com",
  projectId: "prepverse-c69b2",
  storageBucket: "prepverse-c69b2.firebasestorage.app",
  messagingSenderId: "15624518359",
  appId: "1:15624518359:web:f8fc4fd08761fb3f38ce92"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}