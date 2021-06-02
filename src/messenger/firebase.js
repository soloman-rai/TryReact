
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-HorNn2wJvFrkTOyawHe098ZY1OIVMOs",
    authDomain: "messengerclone-d57f4.firebaseapp.com",
    projectId: "messengerclone-d57f4",
    storageBucket: "messengerclone-d57f4.appspot.com",
    messagingSenderId: "426565165178",
    appId: "1:426565165178:web:28c63144f78962c9139bc3",
    measurementId: "G-P87GFMTC5Q"
});


const db = firebaseApp.firestore();

export { db }