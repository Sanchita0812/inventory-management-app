// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDuSCrW9UO-5qupfkHn8ouEvRQLPSVXVE",
  authDomain: "inventory-managementapp.firebaseapp.com",
  projectId: "inventory-managementapp",
  storageBucket: "inventory-managementapp.appspot.com",
  messagingSenderId: "458058189477",
  appId: "1:458058189477:web:30fa0cc493f2768e4fdb4c",
  measurementId: "G-WBPWM35VB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore}