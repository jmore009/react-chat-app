import React, { Component } from 'react';
import { SignUpForm } from '../components/public'

class Signup extends Component{
    render(){
        return(
            <div className="signup-wrapper">
                <h2>Sign Up Now!</h2>
                <SignUpForm />
            </div>
        )
    }
};

export default Signup;
