// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     databaseURL: process.env.REACT_APP_databaseURL,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };

// export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvXmdMrdgjSloxSkyEkrpjTS9Fw9AhGbA",
    authDomain: "simple-firebase-authentic-root.firebaseapp.com",
    projectId: "simple-firebase-authentic-root",
    storageBucket: "simple-firebase-authentic-root.appspot.com",
    messagingSenderId: "140143647609",
    appId: "1:140143647609:web:6d817851166f778186eda8"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);