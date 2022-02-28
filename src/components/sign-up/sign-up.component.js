import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '' /* These are the initial state(empty string) a user will eventually type into the sign-up form */
        }
    }

    handleSubmit = async event => {
        event.preventDefault(); /* to prevent the default submitting */
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const{ user } = await auth.createUserWithEmailAndPassword(email, password)  /* the firebase auth and method .createUserWithEmailAndPassword is used to create a new user with the email and password passed by the current state(i.e. when someone enters their credientials) */

            await createUserProfileDocument(user, {displayName}); /* Before we clear the form via setting the state to emtpry string, we must await for the createUserProfileDocument() to finish */

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '' /* Tis state setting here will clear our form after form has been submitted */
            })

        } catch(error) {
            console.error(error); 
        }
    };

    handleChange = event => {
        const { name, value } = event.target; /* When onChange function calls handleChange it will assign the event target to name of the field with the value from event.target */ 

        this.setState({ [name]: value }); /* When an OnChange event is triggered for any of the FormInput fields, Then the name of the changing field will dynamically populate here.  In example  if the email is entered then for the Email a value of the event.target will be assigned.*/

    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Signup with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required />
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required />
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required />
                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>

            </div>
        )
    }

}

export default SignUp;