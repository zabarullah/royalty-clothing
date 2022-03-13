import React from "react"; 
import { Link } from "react-router-dom";
import { connect } from "react-redux";  // Redux Step 7 connect will allow for the component to be modified to allow access to redux

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from '../../Assets/crown.svg'

import './header.styles.scss';

const Header = ({ currentUser }) => (  /* currentUser is prop passed in from App.js where this header component will live. */
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to='/shop' className="option"> SHOP </Link>
            <Link to='/shop' className="option"> CONTACT </Link>
            {
            currentUser ? (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>) : (<Link className="option" to='/signin'>SIGN IN</Link>)
            }
        </div>
    </div>
);

// the follow mapStateToProps is what the name is stating. In the App.js for the header we passed in currentUser={this.state.currentUser}, to remove that we are using mapStateToProps function to set the state to our redux 
const mapStateToProps = state => ({         //state here is the root reducer
    currentUser: state.user.currentUser     //from the root reducer it will grap user value from the UserReducer, which will get the currentUser from the action.payload 
})

export default connect(mapStateToProps)(Header);