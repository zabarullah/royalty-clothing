import React from "react";

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn,...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}> {/* if isGoogleSignIn is true then use Google-sign-in class otherwise empty string, and in all cases the custom-botton class will be used*/}
        {children}
    </button>
);

export default CustomButton;