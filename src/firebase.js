import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

firebase.initializeApp({
    // Provide your firebase configuration here
    // You can get it from the firebase website when setup a new "Web" app
});

export const auth = firebase.auth();
// Don't forget to enable the Google provider from the firebase website - "Authentication"
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const analytics = firebase.analytics();
export const FieldValue = firebase.firestore.FieldValue;
