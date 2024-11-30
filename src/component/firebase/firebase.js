// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfOCy5S7aAP9dPedZ4TH_N_kKfztjfER8",
  authDomain: "sign-in-app-975df.firebaseapp.com",
  projectId: "sign-in-app-975df",
  storageBucket: "sign-in-app-975df.firebasestorage.app",
  messagingSenderId: "822335739717",
  appId: "1:822335739717:web:f168608142834222ea502c",
  measurementId: "G-W8T38LWZP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth=getAuth();
export const db=getFirestore(app)
export default app; 