import React, { Component } from 'react';
import { SignupForm } from '../components/public'
import update from 'immutability-helper';

class Signup extends Component{
    constructor(props){
        super(props);

        this.state = {
            formFields: {first_name: "", last_name: "", email: "", password: "", password_confirmation: ""} ,
            formErrors: {first_name: "", last_name: "", email: "", password: "", password_confirmation: ""} ,
            emailValid: false,
            passwordValid: false,
            formValid: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event){
        event.preventDefault()
        let fields = this.state.formFields;
        let random = Math.floor(Math.random() * 10000000) + 1;
        firebase.database().ref('users').set({
           id: random,
           first_name: fields.first_name,
           last_name: fields.last_name,
           email: fields.email,
           password: fields.password
         });
    }

    handleInputChange(event){
      let key = event.target.name;
      let val = event.target.value;
      let current_state = this.state.formFields;
      let obj = {}
      obj[key] = val;
      this.setState({
          formFields: update(current_state, {$merge: obj})
      });
    }

    render(){
        return(
            <div className="container-wrapper">
                <div className="container-cell">
                    <div className="container-box">
                        <SignupForm
                            handleFormSubmit={this.handleFormSubmit}
                            formFields={this.state.formFields}
                            handleInputChange={this.handleInputChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
};

export default Signup;
