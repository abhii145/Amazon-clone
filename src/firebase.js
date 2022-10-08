// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDOUTgDaSKbugQk4v9fCLopHz8AMuEu-c8",
    authDomain: "challenge-7c23c.firebaseapp.com",
    projectId: "challenge-7c23c",
    storageBucket: "challenge-7c23c.appspot.com",
    messagingSenderId: "572110831462",
    appId: "1:572110831462:web:e4df29ffa44b99bae652a7"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };