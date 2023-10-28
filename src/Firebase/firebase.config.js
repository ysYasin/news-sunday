// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const impt = import.meta.env;
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: impt.VITE_apiKey,
    authDomain: impt.VITE_authDomain,
    projectId: impt.VITE_projectId,
    storageBucket: impt.VITE_storageBucket,
    messagingSenderId: impt.VITE_messagingSenderId,
    appId: impt.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;