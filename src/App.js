import React from 'react';
import './App.css';
import { Switch, Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';  // Redux Step 8

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';   // Redux Step 8

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {      
    const {setCurrentUser} = this.props;
                                                                           /* The user authentication and later creating the user has to happen in the main app, so that the user profile can then be displayed later.*/
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { /*  When a user signs in, the variable unsubscribedFromAuth which was defaulted to null earlier,  will be assigned the auth, basically the state of the user will be set here to unsubscribeFromAuth variable*/
      if (userAuth) {                                                      /*  Check if userAuth exist, someone logged in, then we will proceed to store the state of this user auth */
        const userRef = await createUserProfileDocument(userAuth);         /* If there is a user signed in we will get back userRef from the firebase method creatUserProfileDocument() with userAuth passed into it( see firebase,utils.js file inside the createUserProfileDocument() function */

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          setCurrentUser({                                                 /* Step 8 Change this.state code for currentUser to the redux method to get out setCurrentUser */
              id: snapShot.id,
              ...snapShot.data()                                           /* Creates a new object currentUser with id from the snapShot.id and all the data from the rest of the snapShot, note the snapshot alone didn't show the id, so to get the id we had to invoke the .data() method on the snapShop */
          });
        });
      } else {
        setCurrentUser(userAuth);                                          /* Step 8 This is that incase userAuth does not exist (not signed in) then userAuth would be null, in this case currentUser will be set to userAuth(ie. null)*/
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();                                             /* This will simply close the auto subscription when component unmounts */
  }

  render() {
    return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />  
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />  {/* if there is currentUser (someone signed in) then if you click signin link it will take you to the homepage not the signin page. otherwise take to the signup page(signin page)*/}
      </Switch>
    </div>
    );

  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser                                             /* to give access to the this.props.currentUser for /signin route*/
})

// Redux Step 8
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))                    /* Step 8 The action is dispatched to all the reducers. Now we can remove the this.state fom the constructor */
})

export default connect(mapStateToProps,mapDispatchToProps)(App);            // Step 8 we passed in null since it does not need the current user outside of the header component as a prop(ie. app doesnt do anything with the currentUser beside setting it. i.e we dont need mapStateToProps here)mapDispatchToProps dispatches the action to the reducer.
