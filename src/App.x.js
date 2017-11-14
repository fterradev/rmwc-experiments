import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Typography, FormField, Textfield } from 'rmwc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button raised>Easy</Button>
        <main>
        <Typography use="display4">Tell us about yourself!</Typography>
        
          <form action="#" id="greeting-form">
            <div>
              <div className="mdc-form-field">
                <div className="mdc-text-field" data-mdc-auto-init="MDCTextField">
                  <input id="firstname" type="text" className="mdc-text-field__input"></input>
                  <label htmlFor="firstname" className="mdc-text-field__label">
                    First Name
                  </label>
                  <div className="mdc-text-field__bottom-line"></div>
                </div>
              </div>
        
              <FormField>
                <Textfield id="lastname" />
                  <label htmlFor="lastname" className="mdc-text-field__label">
                  Last Name
                  </label>
              </FormField>
            </div>
        
            <button type="submit"
                    className={`mdc-button
                          mdc-button--raised
                          mdc-ripple-surface`}
                    data-mdc-auto-init="MDCRipple">
              Print Greeting
            </button>
          </form>
        
          {/* <!-- The p element below is where we'll eventually output our greeting --> */}
          <p className="mdc-typography--headline" id="greeting"></p>
        </main>
      </div>
    );
  }
}

export default App;
