import * as firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3eSrtFWmub-w2BcQ6o4YGMIddLt08Wno",
  authDomain: "blog-app-7df1e.firebaseapp.com",
  projectId: "blog-app-7df1e",
  storageBucket: "blog-app-7df1e.appspot.com",
  messagingSenderId: "361988733961",
  appId: "1:361988733961:web:55ee717ccbe5189d340cd8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)
const projectStorage =firebase.storage()
const projectFirestore=firebase.firestore()

export {projectStorage, projectFirestore}