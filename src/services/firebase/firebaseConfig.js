import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCV5fvYVQmsv4eOFk3DJ_gm_RKyTu6j1Es",
  authDomain: "pf-marcelotello.firebaseapp.com",
  projectId: "pf-marcelotello",
  storageBucket: "pf-marcelotello.appspot.com",
  messagingSenderId: "125238277816",
  appId: "1:125238277816:web:46c8fd3ad41adeddd9e64d"
};


const app = initializeApp(firebaseConfig);
//Esta es la referencia a nuestros datos para usarla en todo nuestro codigo
export const db = getFirestore(app)