import React from "react";

import './form-input.styles.scss'

// Creating a Form Input component with an input and lable to be a usable component for each field we decide on any form, these fields have styling which we want to re-use in the entire form. We have props passed in which are required from both sign-in and sign-up components, as those components are where the final form for each is created with the form-input component.
const FormInput = ({ handleChange, label, ...otherProps }) => (  
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps}/> {/* ...otherProps here is the name, type, value and label that will be used for the FormInput on the sign-in and sign-up form*/}
        {label ? (
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}> {label} </label> 
            ) : null}                                     {/* If there is a label then process the first condition otherwise do null(nothing), for the label itself, Assign a class name of shrink if someone types something in(otherProps.value.length) or leave class empty, and there will always be a another class name form-input-label */}
            
                                           
        
    </div>  
)

export default FormInput;