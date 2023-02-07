import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "task-d7c0c.firebaseapp.com",
  projectId: "task-d7c0c",
  storageBucket: "task-d7c0c.appspot.com",
  messagingSenderId: "78362669890",
  appId: "1:78362669890:web:6d778a77288f67b5148edb",
};

export const firebaseApp = initializeApp(config);
export const auth = getAuth();
// used for the firestore refs
export const db = getFirestore(firebaseApp);
