import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZFboABDDyrvNYH1Tp9zJjUFh7wnkpbAM",
    authDomain: "shopcrown-db.firebaseapp.com",
    databaseURL: "https://shopcrown-db.firebaseio.com",
    projectId: "shopcrown-db",
    storageBucket: "",
    messagingSenderId: "1097429775127",
    appId: "1:1097429775127:web:122e6285e69032521a7d52"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

