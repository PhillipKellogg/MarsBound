import React, { Component } from "react";
import World from "./components/world";
import Dialogue from "./components/dialogue";
import store from "./config/store";
import { func } from "prop-types";

// console.log(store.getState().player.position);
// console.log(store.getState().sign.position);

class App extends Component {
  render() {
    return (
      <div>
        {/* {npcCheck()} */}
        <World />
        {/* <Dialogue /> */}
      </div>
    );
  }
}

export default App;
