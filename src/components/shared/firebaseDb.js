import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyClaoY0W2VPOj5PKQ79cwFLucSZfwZ8PWg",
  authDomain: "quick-react-e95b7.firebaseapp.com",
  databaseURL: "https://quick-react-e95b7.firebaseio.com",
  projectId: "quick-react-e95b7",
  storageBucket: "quick-react-e95b7.appspot.com",
  messagingSenderId: "619749093831",
  appId: "1:619749093831:web:58827759c2bd072096e9e2",
  measurementId: "G-PQ42SX632Y"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export default db;