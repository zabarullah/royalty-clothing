import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { /* When a user signs in*/
      if (userAuth) {                                                      /*  Check if userAuth exist, someone logged in*/
        const userRef = await createUserProfileDocument(userAuth);         /* If there is a user signed in we will get back userRef from the method creatUserProfileDocument with userAuth passed into it( see firebase,utils.js file inside the createUserProfileDocument() function*/

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data() /* Creates a new object currentUser with id from the snapShot.id and all the data from the rest of the snapShot, note the snapshot alone didn't show the id, so to get the id we had to invoke the .data() method on the snapShop */
            }
          });
          // console.log(this.state)  /* to log the current state of logged in user. */
          
        });
      } else {
        this.setState({currentUser: userAuth});  /* This is that incase userAuth does not exist (not signed in) then userAuth would be null, in this case currentUser will be set to userAuth(ie. null)*/
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); /* This will simply close the auto subscription when component unmounts */
  }

  render() {
    return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />  
        <Route path='/signin' component={SignInAndSignUpPage} />  
      </Switch>
    </div>
    );

  }
}

export default App;
