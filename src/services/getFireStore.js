import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqeaCOayGyd3ciHM4S2uLBXI_2KMqQP2E",
  authDomain: "la-farola-6642e.firebaseapp.com",
  projectId: "la-farola-6642e",
  storageBucket: "la-farola-6642e.appspot.com",
  messagingSenderId: "228945544266",
  appId: "1:228945544266:web:68978532899cb5c72952b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function getFirestore(){    
    return firebase.firestore(app)
}
