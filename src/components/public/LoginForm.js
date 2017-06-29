import React from 'react';

export const LoginForm = (props) => {
    return(
        <div className="form-wrapper">
            <form onSubmit={props.handleFormSubmit}>
                <div className="input-container full">
                    <label>Email</label>
                    <input type="text" onChange={props.handleInputChange} value={props.email} name="email" placeholder="Enter Email..." />
                </div>
                <div className="input-container full">
                    <label>Password</label>
                    <input type="password" onChange={props.handleInputChange} value={props.password} name="password" placeholder="Enter Password..." />
                </div>
                <div className="input-container full">
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    )
}
