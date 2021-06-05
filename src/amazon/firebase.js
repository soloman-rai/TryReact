
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB82s6MDoEVwbeqTFrDPNE4_8LGwcJOjJE",
    authDomain: "clone-b6477.firebaseapp.com",
    projectId: "clone-b6477",
    storageBucket: "clone-b6477.appspot.com",
    messagingSenderId: "615825524587",
    appId: "1:615825524587:web:a3100d5737abf778d82e2e",
    measurementId: "G-KN34N1QR7T"
});


// const db = firebaseApp.firestore();     // to access the DB
const auth = firebase.auth()        // to access the authentication
// const storage = firebase.storage()      // to access the storage and upload files into firebase


export { auth }