import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSCMLSuACYmAbSRcUi8rchveSUN7Q33JE",
  authDomain: "my-first-firebase-projec-cdc4b.firebaseapp.com",
  projectId: "my-first-firebase-projec-cdc4b",
  storageBucket: "my-first-firebase-projec-cdc4b.appspot.com",
  messagingSenderId: "143717024372",
  appId: "1:143717024372:web:4ba6038d5b3bfc7da28721",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };
