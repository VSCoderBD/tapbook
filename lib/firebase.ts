import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTTJZS0EywdyXEVds4a0DrK6edvkOzFpM",
  authDomain: "tapbook-24172.firebaseapp.com",
  projectId: "tapbook-24172",
  storageBucket: "tapbook-24172.firebasestorage.app",
  messagingSenderId: "663409138008",
  appId: "1:663409138008:web:ee724adb07da7312fa6d2d",
  measurementId: "G-LRVXKRQD2R", // ok
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const googleLogin = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};
