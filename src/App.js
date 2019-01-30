import React, { Component } from 'react';
import './App.css';
import DnaView from './DnaView';

function clickHandler(message) {
  alert(message);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { template: 'TACCTTAAGAGCGAG' };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const template = event.target.value.toUpperCase();

    const allowedCharacters = /^[acgtACGT]+$/;
    if (!allowedCharacters.test(template)) {
      return;
    }

    this.setState({ template });
  }

  render() {
    const { template } = this.state;

    return (
      <div className="App">
        <form>
          <label htmlFor="template">
            Template:
            <input
              id="template"
              type="text"
              name="template"
              onChange={this.handleInput}
              value={template}
              autoComplete="off"
            />
          </label>
          <DnaView template={template} clickHandler={message => clickHandler(message)} />
        </form>
      </div>
    );
  }
}

export default App;
