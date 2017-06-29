import React from 'react';

export const SignupForm = (props) => {
    return(
        <div className="form-wrapper">
            <form onSubmit={props.handleFormSubmit}>
                <div className="input-container half">
                    <label>First Name</label>
                    <input type="text" onChange={props.handleInputChange} value={props.formFields.first_name} name="first_name" placeholder="Enter First Name..." />
                </div>
                <div className="input-container half align-right">
                    <label>Last Name</label>
                    <input type="text" onChange={props.handleInputChange} value={props.formFields.last_name} name="last_name" placeholder="Enter Last Name..." />
                </div>
                <div className="clear"></div>
                <div className="input-container full">
                    <label>Email</label>
                    <input type="text" onChange={props.handleInputChange} value={props.formFields.email} name="email" placeholder="Enter Email..." />
                </div>
                <div className="input-container half">
                    <label>Password</label>
                    <input type="password" onChange={props.handleInputChange} value={props.formFields.password} name="password" placeholder="Enter Password..." />
                </div>
                <div className="input-container half align-right">
                    <label>Password Confirmation</label>
                    <input type="password" onChange={props.handleInputChange} value={props.formFields.password_confirmation} name="password_confirmation" placeholder="Confirm Password..." />
                </div>
                <div className="clear"></div>
                <div className="input-container full">
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    )
}
