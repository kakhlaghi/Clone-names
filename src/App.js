import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainGame'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made With React
          </a>
        </header>
        <span className="App-header"> CLONENAMES </span>
        <MainGame />
      </div>
    );
  }
}

export default App;
