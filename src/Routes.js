import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home'
import Signup from './views/Signup'
import Login from './views/Login'

class Routes extends Component{
    render(){
        return(
            <div className="content-wrapper">
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
            </div>
        )
    }

}

export default Routes;
