// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-63vDApBJVB-Y782NFXExj8FNGTvZ2Fo",
    authDomain: "react-todo-firebase-4e40b.firebaseapp.com",
    databaseURL: "https://react-todo-firebase-4e40b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-todo-firebase-4e40b",
    storageBucket: "react-todo-firebase-4e40b.appspot.com",
    messagingSenderId: "387787375285",
    appId: "1:387787375285:web:97d7f8e90483276d46f4fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth();