import React, { Component } from 'react';
import { LoginForm } from '../components/public'
import update from 'immutability-helper';


class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            formErrors: {email: "", password: ""} ,
            emailValid: false,
            passwordValid: false,
            formValid: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event){
        event.preventDefault()
        console.log("hey?c ", this.state)
        // let fields = this.state.formFields;
        // let random = Math.floor(Math.random() * 10000000) + 1;
        // firebase.database().ref('users').set({
        //    id: random,
        //    first_name: fields.first_name,
        //    last_name: fields.last_name,
        //    email: fields.email,
        //    password: fields.password
        //  });
    }

    handleInputChange(event){
      let key = event.target.name;
      let val = event.target.value;
      this.setState({[key]: val});
    }


    render(){
        return(
            <div className="container-wrapper">
                <div className="container-cell">
                    <div className="container-box">
                        <LoginForm
                            handleFormSubmit={this.handleFormSubmit}
                            email={this.state.email}
                            password={this.state.password}
                            handleInputChange={this.handleInputChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
