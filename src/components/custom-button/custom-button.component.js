import React from "react";

import './custom-button.styles.scss'


// Creating a Custom button component with an with ternary condition to assign css class, so that the button is a re-usable component for Sign-In, Sign-Up and Sign in with Google buttons. Sign in with google button has difference css styles thus the ternary operator with the class. We have props passed in which are required inside both sign-in and sign-up components, as those components are where the final buttons for each is created using the custom-button component.
const CustomButton = ({ children, isGoogleSignIn,...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}> {/* the props children here are what ever will be between the button tags, is googleSignIn is passed from the Sign-in component and so are the ...otherprops which refer to onClick method inthis case. If isGoogleSignIn is true then use Google-sign-in class otherwise empty string, and in all cases the custom-botton class will be used*/}
        {children}
    </button>
);

export default CustomButton;