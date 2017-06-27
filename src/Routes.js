import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home'
import Signup from './views/Signup'

class Routes extends Component{
    render(){
        return(
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Signup} />
            </div>
        )
    }

}

export default Routes;
