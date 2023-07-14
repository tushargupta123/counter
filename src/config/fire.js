import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBaFi6YMCx7tg7N7Z856kyzvXXgc_wdJ88",
    authDomain: "counter-81aa9.firebaseapp.com",
    projectId: "counter-81aa9",
    storageBucket: "counter-81aa9.appspot.com",
    messagingSenderId: "51390771263",
    appId: "1:51390771263:web:e07824fe2a66bbce79c88a",
    measurementId: "G-JX0XY01QV0"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export const auth = firebase.auth();
  export default firebase;
