import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Button, DatePicker } from 'antd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <DatePicker></DatePicker>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button type="primary">你好啊</Button>
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
}

export default App;
