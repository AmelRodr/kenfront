import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HOme</h1>
        <Routes/>
      </div>
    );
  }
}

export default App;