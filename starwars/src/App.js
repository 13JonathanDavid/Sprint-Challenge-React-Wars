import React, { Component } from 'react';
import './App.css';
import Datapad from'./scenes/starwars/Datapad';

class App extends Component {
  constructor() {
    super();
  }

  
  render() {
    return (
      <div><Datapad/></div>
    );
  }
}

export default App;
