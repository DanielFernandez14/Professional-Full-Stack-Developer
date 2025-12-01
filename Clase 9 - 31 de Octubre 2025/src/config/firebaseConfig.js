// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbuXBlofwBsm4h4ZvMeBsi2RfPrCFtasE",
  authDomain: "pfsd-react-2025.firebaseapp.com",
  projectId: "pfsd-react-2025",
  storageBucket: "pfsd-react-2025.firebasestorage.app",
  messagingSenderId: "174725292714",
  appId: "1:174725292714:web:e6f0f5942a94377cf2a6d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export { database, app };