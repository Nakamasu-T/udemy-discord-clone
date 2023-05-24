import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3QGTl_UDIjTW-x3HF-l042lbA4qOZj4o",
  authDomain: "discord-clone-udemy-62250.firebaseapp.com",
  projectId: "discord-clone-udemy-62250",
  storageBucket: "discord-clone-udemy-62250.appspot.com",
  messagingSenderId: "69147214095",
  appId: "1:69147214095:web:a5b37b105cc89534567e7a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
