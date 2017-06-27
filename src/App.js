import React, {Component} from 'react';
import Routes from './Routes.js';
import Header from './base/Header'

class App extends Component {
   render() {
      return (
          <div className="page-wrapper">
              <Header />
              <Routes />
        </div>
      );
   }
}

export default App;
