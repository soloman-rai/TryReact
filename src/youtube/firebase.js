
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMX1kGgf8hYeFGHw2qxrrEoR2syabPsic",
    authDomain: "clone-youtub.firebaseapp.com",
    projectId: "clone-youtub",
    storageBucket: "clone-youtub.appspot.com",
    messagingSenderId: "249493330485",
    appId: "1:249493330485:web:750245095f5eb6133caf7c",
    measurementId: "G-EGXQHK721P"
});


const db = firebaseApp.firestore();     // to access the DB
const auth = firebase.auth()        // to access the authentication
const storage = firebase.storage()      // to access the storage and upload files into firebase


export { db, auth, storage }