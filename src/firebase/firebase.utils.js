import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; /* for the database*/
import 'firebase/compat/auth'; /* for the authentication*/

const config = {
    apiKey: "AIzaSyDVMdV0FWi7NoWBBjb-rhPsc06t2aYXQwc",
    authDomain: "royaly-clothing-db.firebaseapp.com",
    projectId: "royaly-clothing-db",
    storageBucket: "royaly-clothing-db.appspot.com",
    messagingSenderId: "884893872376",
    appId: "1:884893872376:web:7b06722ee64b7dfca68b0d"
  };

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

/* Setup for google authentication */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' }); /* This will show the google popup for authentication if the provider is used */
export const signInWithGoogle = () => auth.signInWithPopup(provider);  /* Here by using provider we have assigned it to allow signin up with Google SignIn, otherwise we can also add facebook, twitter etc */

export default firebase;


