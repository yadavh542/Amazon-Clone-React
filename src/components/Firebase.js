//import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAu0Vr-8ybLdO6D1McAASO6-Ludy8sCD1Q",
    authDomain: "by-hemant.firebaseapp.com",
    projectId: "by-hemant",
    storageBucket: "by-hemant.appspot.com",
    messagingSenderId: "903285966425",
    appId: "1:903285966425:web:6fcb7a4f0e62c3bdd21348",
    measurementId: "G-HBX8F23PSG"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth};