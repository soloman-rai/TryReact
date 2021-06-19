import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyByFsy_eV9FZz7rXTbgbCbiDeUAH7nFsno",
    authDomain: "tiktokclone-afa37.firebaseapp.com",
    projectId: "tiktokclone-afa37",
    storageBucket: "tiktokclone-afa37.appspot.com",
    messagingSenderId: "31901470414",
    appId: "1:31901470414:web:3f2d3e5ad74012106c8a9f",
    measurementId: "G-G47KZTR6EL"
});


const db = firebaseApp.firestore();     // to access the DB
const auth = firebase.auth()        // to access the authentication
const storage = firebase.storage()      // to access the storage and upload files into firebase


export { db, auth, storage }