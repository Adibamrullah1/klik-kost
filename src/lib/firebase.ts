import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBWnyjOodNRctaQYAPK5Lu8N3seQE8Ibo",
  authDomain: "klik-kost-app-project.firebaseapp.com",
  projectId: "klik-kost-app-project",
  storageBucket: "klik-kost-app-project.appspot.com",
  messagingSenderId: "426835980333",
  appId: "1:426835980333:web:72563cec72b232c239c8a4",
  measurementId: "G-7B7CMV6JMK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
