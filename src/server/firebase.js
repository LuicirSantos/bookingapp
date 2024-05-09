// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/compat/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTdiSqBFMzqHN3XzyFaojkueZal7LkO-s",
  authDomain: "booking-project-486bc.firebaseapp.com",
  projectId: "booking-project-486bc",
  storageBucket: "booking-project-486bc.appspot.com",
  messagingSenderId: "867987372422",
  appId: "1:867987372422:web:b489ed23d945361073d407"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage)
// });

// const auth = getAuth(app);

// const db = getFirestore();
const db = firebase.firestore();

export {auth, db};