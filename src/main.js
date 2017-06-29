import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App.js';

//redux
import chatApp from './reducers'
let store = createStore(chatApp)

//firebase
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
var config = {
  apiKey: "AIzaSyA3V__PFQ_s6mxQ1FJQCRSGyQfXL9hbSiQ",
  authDomain: "chatapp-588cc.firebaseapp.com",
  databaseURL: "https://chatapp-588cc.firebaseio.com",
  projectId: "chatapp-588cc",
  storageBucket: "chatapp-588cc.appspot.com",
  messagingSenderId: "633525724206"
};
firebase.initializeApp(config);

//stylesheets
require("!style-loader!css-loader!sass-loader!./stylesheets/compile.scss");

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
