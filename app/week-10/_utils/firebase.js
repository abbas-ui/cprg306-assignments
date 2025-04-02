import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByVbumseD_izDSBFt3a_fA0zFqVOqroW4",
  authDomain: "cprg306-assignments-c3a29.firebaseapp.com",
  projectId: "cprg306-assignments-c3a29",
  storageBucket: "cprg306-assignments-c3a29.firebasestorage.app",
  messagingSenderId: "722791947612",
  appId: "1:722791947612:web:6bae8b369dbd492e0cb599"
};

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);