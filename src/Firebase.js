import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    projectId: '<your-cloud-firestore-project>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-sender-id>',
    appId: '<your-app-id>',
    measurementId: <your-measurement-id>
});

const db = firebaseApp.firestore();

export default db;