import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="drum-machine">
        <div className="row">
          <DrumContainer />
          <ControlContainer />
          </div>
      </div>
    );
  }
}

const DrumContainer = (props) => {
  return(
    <div id="drum-container" >
      
      <div className="row drum-row">
          <button className="drum-pad">Q</button>
          <button className="drum-pad">W</button>
          <button className="drum-pad">E</button>
      </div>
      <div className="row drum-row">
          <button className="drum-pad">A</button>
          <button className="drum-pad">S</button>
          <button className="drum-pad">D</button>
      </div>
      <div className="row drum-row">
          <button className="drum-pad">Z</button>
          <button className="drum-pad">X</button>
          <button className="drum-pad">C</button>
      
      </div>
  </div>
  );

}

const ControlContainer = (props) => {
  return(
    <div id="display">
    </div>
  )
}

export default App;
