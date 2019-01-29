import React, { Component } from 'react';
import './App.css';
import DnaView from './DnaView';

const template = 'TACCTTAAGAGCGAG';

function clickHandler(message) {
  alert(message);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <DnaView template={template} clickHandler={(message) => clickHandler(message)}/>
      </div>
    );
  }
}

export default App;
