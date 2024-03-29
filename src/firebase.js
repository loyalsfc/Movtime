// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4efHKYDti89v04x-T1rZXOnrXA1w76w8",
  authDomain: "movibes-69e70.firebaseapp.com",
  projectId: "movibes-69e70",
  storageBucket: "movibes-69e70.appspot.com",
  messagingSenderId: "535686729069",
  appId: "1:535686729069:web:9ec7e9c5352a71ea151e64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {provider, auth}
export default db