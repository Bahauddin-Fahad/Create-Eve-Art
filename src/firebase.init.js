import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA_KtEMCOvl-wnH9dzhvrE-kZYDI6cB-Zc",
  authDomain: "create-eve-art.firebaseapp.com",
  projectId: "create-eve-art",
  storageBucket: "create-eve-art.appspot.com",
  messagingSenderId: "191293126957",
  appId: "1:191293126957:web:8404e1def401061f3f7ba4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
