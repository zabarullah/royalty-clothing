import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });  /* after form is submited we want the state to clear back to empty strings So the fields are emptied*/
    }

    handleChange = event => {
        const { value, name } = event.target;    /* When onChange function calls handleChange it will assign the event target to Value and name */ 
        
        this.setState({ [name]: value }); /* When an OnChange event is triggered for Email field or Password, Then the name of the changing field will dynamically populate here.  So if the email is entered then for the Email a value of the event.target will be assigned.*/

    } 


    
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
    
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='email' required />
 
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label='password' required 
                    />
                    
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                         Sign In with Google 
                        </CustomButton>
                    </div>
                
                </form>
            </div>
        );
    }
}



export default SignIn;