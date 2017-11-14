import React, { Component } from 'react';
import { Button, Typography, FormField, Textfield } from 'rmwc';

class App extends Component {
  render() {
    return (
      <main>
        <Typography use="display1" tag="h1">Tell us about yourself!</Typography>
      
        <form action="#" id="greeting-form">
          <div>
            <FormField>
              <Textfield id="firstname" label="First Name" tag="div" />
            </FormField>
      
            <FormField>
              <Textfield id="lastname" label="Last Name" tag="div" />
            </FormField>
          </div>

          <Button raised>Print Greeting</Button>
        </form>
      
        <Typography use="headline" tag="p"></Typography>
      </main>
    );
  }
}

export default App;
