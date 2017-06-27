import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/header.css';

class Header extends Component{
    render(){
        return(
            <header>
                <h1 className="logo">Logo</h1>
                <nav>
                    <ul className="navigation">
                        <li className="navigation-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="navigation-item">
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
};

export default Header;
