
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBBH1O5tTDwXRNrGE8pLaShYaEXyhXJQtY",
    authDomain: "instagramclone-5a42d.firebaseapp.com",
    projectId: "instagramclone-5a42d",
    storageBucket: "instagramclone-5a42d.appspot.com",
    messagingSenderId: "233878036913",
    appId: "1:233878036913:web:d5e8cd418b54cf5e97dd90",
    measurementId: "G-BQK3CFGRJZ"
});


const db = firebaseApp.firestore();     // to access the DB
const auth = firebase.auth()        // to access the authentication
const storage = firebase.storage()      // to access the storage and upload files into firebase


export { db, auth, storage }