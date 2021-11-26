// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIwn9H7Y65QzMJlXn1XQy5DE0gMMpAM9Y",
    authDomain: "react-project2-5d377.firebaseapp.com",
    projectId: "react-project2-5d377",
    storageBucket: "react-project2-5d377.appspot.com",
    messagingSenderId: "600824706938",
    appId: "1:600824706938:web:4e76df75f8984dc06388c3",
    measurementId: "G-RK613WBFCH"
};

initializeApp(firebaseConfig);//파이어베이스 기초설정
// Initialize Firebase


export const db = getFirestore();
