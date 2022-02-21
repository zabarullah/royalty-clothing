import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; /* for the database*/

const firestore = firebase.firestore();

const users = firestore.collection('users');
console.log(users);