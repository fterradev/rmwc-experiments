import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import { Button, Typography, FormField, Textfield } from 'rmwc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typography use="display1" tag="h1">Hello, World!</Typography>
        <Button raised>Press Me</Button>
      </div>
    );
  }
}

export default App;
