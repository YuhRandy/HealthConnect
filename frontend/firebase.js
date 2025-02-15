import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCoAgFtt1oy4I1LPO7Ol6wJcRg8BE1O4ec",
  authDomain: "healthconnect-493d8.firebaseapp.com",
  projectId: "healthconnect-493d8",
  storageBucket: "healthconnect-493d8.firebasestorage.app",
  messagingSenderId: "334139636002",
  appId: "1:334139636002:web:e5acb8dfc710691b888d7b",
  measurementId: "G-DFYS89TQSL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const realtimeDb = getDatabase(app);
