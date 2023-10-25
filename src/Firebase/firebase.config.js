// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvq-0zq9qvIX6u9NBGpZmk7Rp80S3fsi4",
    authDomain: "newssunday-y.firebaseapp.com",
    projectId: "newssunday-y",
    storageBucket: "newssunday-y.appspot.com",
    messagingSenderId: "823447843767",
    appId: "1:823447843767:web:42f2ea2c8f66ded7ed6e32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;