// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDqGiXeSD1nDHMJnpS7SGH9r9cB4LcZKN4",
  authDomain: "brayhonda-271c2.firebaseapp.com",
  projectId: "brayhonda-271c2",
  storageBucket: "brayhonda-271c2.appspot.com",
  messagingSenderId: "381669572044",
  appId: "1:381669572044:web:137de12c280357678db169",
  measurementId: "G-BTSLPY30YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}