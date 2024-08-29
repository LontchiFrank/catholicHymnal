/** @format */

// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBLTaf6q3wr9LP6WksvxYrX6bUDzFLNN-c",
	authDomain: "cameroon-hymnal-b8668.firebaseapp.com",
	projectId: "cameroon-hymnal-b8668",
	storageBucket: "cameroon-hymnal-b8668.appspot.com",
	messagingSenderId: "322060297609",
	appId: "1:322060297609:web:92ad139516f29d9d2dad58",
	measurementId: "G-91TP5CD4Y2",
};

// firebase.initializeApp(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const db = firebase.firestore();
// const analytics = getAnalytics(app);
