// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0nqcZ7lz8Vczs0a9CQm5NYT2udOGrmOM",
  authDomain: "react-crud-f3d1a.firebaseapp.com",
  projectId: "react-crud-f3d1a",
  storageBucket: "react-crud-f3d1a.appspot.com",
  messagingSenderId: "281623680704",
  appId: "1:281623680704:web:80adeda5c18101b55fbf25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
