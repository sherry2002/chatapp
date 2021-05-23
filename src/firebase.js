import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';


//    Firebase config app configure
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD1ubR9bKs2jygJX0et_JhZyjzg4TbzrBE",
    authDomain: "chat-app-33b7c.firebaseapp.com",
    databaseURL: "https://chat-app-33b7c.firebaseio.com",
    projectId: "chat-app-33b7c",
    storageBucket: "chat-app-33b7c.appspot.com",
    messagingSenderId: "607965662117",
    appId: "1:607965662117:web:a839cb6265661314de764c",
    measurementId: "G-9XPFNGT626"
  });

const db = firebaseApp.firestore();
export default db;