import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBoO1wEWQNmn9MjTwniB_K7DVZCzFzLZtY",
    authDomain: "netflix-clone-d6d44.firebaseapp.com",
    projectId: "netflix-clone-d6d44",
    storageBucket: "netflix-clone-d6d44.appspot.com",
    messagingSenderId: "929057176925",
    appId: "1:929057176925:web:ed82792739e149d3293cb4",
    measurementId: "G-TH799FMRTZ"
});


const db = firebaseApp.firestore();     // to access the DB


export { db }