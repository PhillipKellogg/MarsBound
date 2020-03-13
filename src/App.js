import React, { Component } from "react";
import World from "./components/world";
import Dialogue from './components/dialogue';
class App extends Component {
  render() {
    return (
      <div>
        <World />
        <Dialogue />
      </div>
    );
  }
}

export default App;
