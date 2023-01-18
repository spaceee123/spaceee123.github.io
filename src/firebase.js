
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBDGEJLxPSZaP-1Y-R22uCCaJprmEk4eXQ",
    authDomain: "chat-8e92c.firebaseapp.com",
    projectId: "chat-8e92c",
    storageBucket: "chat-8e92c.appspot.com",
    messagingSenderId: "825425016449",
    appId: "1:825425016449:web:3538dca05aa748c3013f80"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();