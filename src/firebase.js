// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAdqa2wMBugwoO0g9Wz0lexx_LT67mj3d0",
  authDomain: "farmersapp-f6f92.firebaseapp.com",
  projectId: "farmersapp-f6f92",
  storageBucket: "farmersapp-f6f92.appspot.com",
  messagingSenderId: "569433422585",
  appId: "1:569433422585:web:8614bf90319755e684c028",
  measurementId: "G-P6Q889TEZQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
