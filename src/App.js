import React, { Component } from 'react';
import './App.css';

import { Navigation } from './components/navigation/Navigation'
import  Characters  from './containers/Character'


class App extends Component {
  render() {
    return (
      <div >
        <Navigation />
        <Characters />
      </div>
    );
  }
}

export default App;
