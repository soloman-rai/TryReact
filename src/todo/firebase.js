// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCDgQqX7bvGPFp0qgjXX0zd-wyiLAi7aus",
//     authDomain: "todo-52c81.firebaseapp.com",
//     projectId: "todo-52c81",
//     storageBucket: "todo-52c81.appspot.com",
//     messagingSenderId: "252055963158",
//     appId: "1:252055963158:web:2bab9671820320af549737",
//     measurementId: "G-N0XBP41TQW"
// };


import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCDgQqX7bvGPFp0qgjXX0zd-wyiLAi7aus",
    authDomain: "todo-52c81.firebaseapp.com",
    projectId: "todo-52c81",
    storageBucket: "todo-52c81.appspot.com",
    messagingSenderId: "252055963158",
    appId: "1:252055963158:web:2bab9671820320af549737",
    measurementId: "G-N0XBP41TQW"
});


const db = firebaseApp.firestore();

export { db }


