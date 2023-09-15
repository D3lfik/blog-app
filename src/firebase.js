// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIPRRktdCMPz_4s0Hmxrf23BWwKeKV5jE",
    authDomain: "react-hooks-blog1.firebaseapp.com",
    projectId: "react-hooks-blog1",
    storageBucket: "react-hooks-blog1.appspot.com",
    messagingSenderId: "142667729770",
    appId: "1:142667729770:web:58dd7b197595cf54baf313"
  };

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export const firestore = firebase.firestore()