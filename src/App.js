import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

//App Components
import apiKey from './config';
import Photo from './components/Photo';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
