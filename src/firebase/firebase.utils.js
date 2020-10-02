
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDH8DZ4oceVBoNT6I0hMISRTT2SqsQA9IE",
    authDomain: "ecommerceproject-682cd.firebaseapp.com",
    databaseURL: "https://ecommerceproject-682cd.firebaseio.com",
    projectId: "ecommerceproject-682cd",
    storageBucket: "ecommerceproject-682cd.appspot.com",
    messagingSenderId: "683923609494",
    appId: "1:683923609494:web:adc656ae5fb0ad9d92afb7",
    measurementId: "G-4KWPPQ5E4H"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;