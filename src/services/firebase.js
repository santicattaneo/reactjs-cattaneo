// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg4Gkn1VZwBUV62VpXZeSUlf6RhXNLFA4",
    authDomain: "reactjs-cattaneo.firebaseapp.com",
    projectId: "reactjs-cattaneo",
    storageBucket: "reactjs-cattaneo.appspot.com",
    messagingSenderId: "873711803789",
    appId: "1:873711803789:web:727729ab2905a8a43171c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)