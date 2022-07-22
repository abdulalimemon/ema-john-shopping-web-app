// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2MhDZTUG8tWZa7CuFFqRQNbjLJdUVhI4",
    authDomain: "ema-john-shopping-1ecbb.firebaseapp.com",
    projectId: "ema-john-shopping-1ecbb",
    storageBucket: "ema-john-shopping-1ecbb.appspot.com",
    messagingSenderId: "111906828886",
    appId: "1:111906828886:web:8c60fddc028fb2486241f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;