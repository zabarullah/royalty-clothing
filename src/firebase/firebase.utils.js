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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return; /* if user authentication does not exist then it will stop here(no one signed in)*/
  
  const userRef = firestore.doc(`users/${userAuth.uid}`); /* We query the firestore database in the users for the userid that matches the userAuth(the user that we signined in with) */
  
  const snapShot = await userRef.get(); /* Once we get the userRef info from the database (use await since we are awaiting for userRef) and assign it to a variable called snapshot so that we can use it later*/
  
  if(!snapShot.exists) {                      /* if a user(checked with snapShot.exists) doesn't exists we do not have a snapshot that exists and thus, we will proceed to create the user into our database using our userRef*/
    const { displayName, email } = userAuth; /* from the userAuthentication data that we signed it with, we will assign from the userAuth to the variables displayName and email */
    const createdAt = new Date();

    try {
      await userRef.set({  /*  when useRef is returned its promise(from earlier) then we can set displayName, email, createdAt and all the additionData to the firestore database using the .set() function*/
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating useer', error.message);
    }
  }

  return userRef; /* will always return a userRef so that it can be used later */
}

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

/* Setup for google authentication */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' }); /* This will show the google popup for authentication if the provider is used */
export const signInWithGoogle = () => auth.signInWithPopup(provider);  /* Here by using provider we have assigned it to allow signin up with Google SignIn, otherwise we can also add facebook, twitter etc */

export default firebase;


