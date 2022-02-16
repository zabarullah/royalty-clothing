import React from "react";

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps}/>
        {label ? (
            <label 
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
            > {label}                                      {/* for the label Assign a class name of shrink or nothing (if there is value), otherwise class name will be defaulted to form-input-label */}
            </label>
        ) : null}                                   {/* If there is a label then process the first condition otherwise do null(nothing) */}
        
    </div>  
)

export default FormInput;