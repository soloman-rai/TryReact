import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

// const firebaseConfig = {
//     apiKey: "AIzaSyApkzHJXzcOxKvJrBI-M94mx1LnJNqdKnY",
//     authDomain: "disneyclone-bc12c.firebaseapp.com",
//     projectId: "disneyclone-bc12c",
//     storageBucket: "disneyclone-bc12c.appspot.com",
//     messagingSenderId: "574052916907",
//     appId: "1:574052916907:web:01301ff5d03e262bcae1ee",
//     measurementId: "G-692DTW1284"
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;