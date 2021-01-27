import firebase from "firebase/app";

import "firebase/firestore";

const miConfiguracion = {
  apiKey: "AIzaSyBobmZ-cmIi18-HF9Bj5czayCbhq9LfpBA",
  authDomain: "dr-comics.firebaseapp.com",
  projectId: "dr-comics",
  storageBucket: "dr-comics.appspot.com",
  messagingSenderId: "209130524262",
  appId: "1:209130524262:web:45210216fc66fe2e40e7a7",
};

const app = firebase.initializeApp(miConfiguracion);

export const firestore = firebase.firestore(app);
