import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js';
//stylesheets
require("!style-loader!css-loader!sass-loader!./stylesheets/compile.scss");

ReactDOM.render(
    <Router >
        <App />
    </Router>,
    document.getElementById('app')
);
