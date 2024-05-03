import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAZOqJqWl7dBevXxlwbB15n0_g47cPAgAI",
  authDomain: "it-sysarch32-store-remedio.firebaseapp.com",
  projectId: "it-sysarch32-store-remedio",
  storageBucket: "it-sysarch32-store-remedio.appspot.com",
  messagingSenderId: "620255004839",
  appId: "1:620255004839:web:f7ab730bcc133bea2ff382",
  measurementId: "G-4SNNWW4X5F"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
