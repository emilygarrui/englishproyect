import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCJc3GaPPoOfotaDEBi2EiZajWEUN4rRrs",
  authDomain: "projectreact-e838d.firebaseapp.com",
  databaseURL: "https://projectreact-e838d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projectreact-e838d",
  storageBucket: "projectreact-e838d.firebasestorage.app",
  messagingSenderId: "871822658725",
  appId: "1:871822658725:web:b3e96de887c8a5eb0a514c"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };