import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAdtO55-ifrpllD2JvQSwlGs3x9Uu5arzw",
    authDomain: "e-commerce-db-ee5bf.firebaseapp.com",
    projectId: "e-commerce-db-ee5bf",
    storageBucket: "e-commerce-db-ee5bf.appspot.com",
    messagingSenderId: "955010975913",
    appId: "1:955010975913:web:c2f69759b370dec27381b8"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase
    .auth
    .GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;