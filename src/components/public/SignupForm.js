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
        </form>
    </div>
)
