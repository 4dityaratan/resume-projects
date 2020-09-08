// Basic default Reference firebase setup

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    //from Firebase config website
    apiKey: "AIzaSyByKRSNMKF9tGcaQc1-8XzATYEKoF0qYXM",
    authDomain: "instagram-clone-react-c4a8a.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-c4a8a.firebaseio.com",
    projectId: "instagram-clone-react-c4a8a",
    storageBucket: "instagram-clone-react-c4a8a.appspot.com",
    messagingSenderId: "953566615464",
    appId: "1:953566615464:web:ff06d7d5e5e2c2cb2daf9d",
    measurementId: "G-EKVF2W3YSJ"
        //from Firebase config website
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default db;