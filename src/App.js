import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';

class App extends Component {
  render(){
      return(
          <div className="App">
              <h1>React starter!</h1>
              <img className="logo" src={logo} alt='...'/>
          </div>
      )
  }
}

export default App;