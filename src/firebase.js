// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBy1DbIpNkS0EP0h66w3lqBc_VXuDlxnM0",
	authDomain: "ite18-todolist.firebaseapp.com",
	projectId: "ite18-todolist",
	storageBucket: "ite18-todolist.appspot.com",
	messagingSenderId: "380861260954",
	appId: "1:380861260954:web:dc6ef0fff048a34f102b23",
	measurementId: "G-XWY5NKM9C6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };
