import React from 'react';

export const SignupForm = () => (
    <div className="form-wrapper">
        <form>
            <div className="input-container half">
                <label>First Name</label>
                <input type="text" name="first_name" placeholder="Enter First Name..." />
            </div>
            <div className="input-container half align-right">
                <label>Last Name</label>
                <input type="text" name="flast_name" placeholder="Enter Last Name..." />
            </div>
            <div className="clear"></div>
            <div className="input-container full">
                <label>Email</label>
                <input type="text" name="email" placeholder="Enter Email..." />
            </div>
            <div className="input-container half">
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter Password..." />
            </div>
            <div className="input-container half align-right">
                <label>Password Confirmation</label>
                <input type="password" name="password_confirmation" placeholder="Confirm Password..." />
            </div>
            <div className="clear"></div>
            <div className="input-container full">
                <input type="submit" value="Sign Up" />
            </div>
        </form>
    </div>
)
