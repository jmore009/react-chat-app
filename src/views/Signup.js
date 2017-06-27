import React, { Component } from 'react';
import { SignupForm } from '../components/public'

class Signup extends Component{
    render(){
        return(
            <div className="container-wrapper">
                <div className="container-cell">
                    <div className="container-box">
                        <SignupForm />
                    </div>
                </div>
            </div>
        )
    }
};

export default Signup;
