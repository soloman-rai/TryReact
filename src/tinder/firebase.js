import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCVdDtAm6tyu3koR2Z029Z1LrfkQnHrV38",
    authDomain: "tinder-clone-f1308.firebaseapp.com",
    projectId: "tinder-clone-f1308",
    storageBucket: "tinder-clone-f1308.appspot.com",
    messagingSenderId: "202049988235",
    appId: "1:202049988235:web:3908a9cbdd2be2a5ea168e",
    measurementId: "G-SFEVGEDZYM"
});


const db = firebaseApp.firestore();     // to access the DB
const auth = firebase.auth()        // to access the authentication
const storage = firebase.storage()      // to access the storage and upload files into firebase


export { db, auth, storage }