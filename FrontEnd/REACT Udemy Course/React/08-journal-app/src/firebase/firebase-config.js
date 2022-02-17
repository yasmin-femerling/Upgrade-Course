import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAyxIldGczUlpa4GQxyHT8-RufpB4kWBrk",
    authDomain: "react-app-cursos-dcbca.firebaseapp.com",
    projectId: "react-app-cursos-dcbca",
    storageBucket: "react-app-cursos-dcbca.appspot.com",
    messagingSenderId: "850809775207",
    appId: "1:850809775207:web:a3f07b5c6e93aa1f70a0c2",
    measurementId: "G-7MEM34CJ11"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}