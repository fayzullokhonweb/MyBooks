import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClIOwGujgwRKpvPFFO3cZ2iT81NfI7gK4",
  authDomain: "mymovie-33e80.firebaseapp.com",
  projectId: "mymovie-33e80",
  storageBucket: "mymovie-33e80.appspot.com",
  messagingSenderId: "802542534525",
  appId: "1:802542534525:web:730dc00eb63db43f119614",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
