import firebase from "firebase";

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "recipe-book-c624d.appspot.com",
    messagingSenderId: "233886181884",
    appId: process.env.REACT_APP_APP_ID,
    measurementId: "G-K8B8YWCZ3M"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;