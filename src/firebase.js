// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB76JIBnti77paHXm1OXYb9WmW9JVUXHoA",
  authDomain: "farmers-market-f221a.firebaseapp.com",
  projectId: "farmers-market-f221a",
  storageBucket: "farmers-market-f221a.appspot.com",
  messagingSenderId: "294560178151",
 appId: "1:294560178151:web:a03bf4768eeacecd24e742",
 measurementId: "G-0MVCX573YR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
// Import the functions you need from the SDKs you need