
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1YVEpCfkV3axgWSGqM9Lc9-oxxl4N-wQ",
  authDomain: "video-b4e6c.firebaseapp.com",
  projectId: "video-b4e6c",
  storageBucket: "video-b4e6c.firebasestorage.app",
  messagingSenderId: "647810945578",
  appId: "1:647810945578:web:afc5044a318c154f322953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider()
export default app;