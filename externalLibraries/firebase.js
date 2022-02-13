// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkscWOYxY3UVi-Kzt_2EBHYagBXAwO3yc",
  authDomain: "nextblog-b531e.firebaseapp.com",
  projectId: "nextblog-b531e",
  storageBucket: "nextblog-b531e.appspot.com",
  messagingSenderId: "985903448342",
  appId: "1:985903448342:web:c74460f34098d39cf91037",
  measurementId: "G-1SDQZ1SK3P"
};

// Initialize Firebase
if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}
const app = firebase.initializeApp(firebaseConfig);
//const analytics = firebase.getAnalytics(app);