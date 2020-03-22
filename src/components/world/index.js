import React from "react";
import Player from "../player";
import Map from "../map";
import Pages from "../pages/Pages";

import Sign from "../npc/sign";
import SignTwo from "../npc/signTwo";
import Goblin from "../npc/goblin";
import GoblinTwo from "../npc/goblinTwo";

import Knight from "../npc/knight";

import { tiles } from "../../data/maps/1";
import store from "../../config/store";

function World(props) {
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles,
      name: "Stage1"
    }
  });
  return (
    <Pages>
      <div
        style={{
          position: "relative",
          width: "800px",
          height: "400px",
          margin: "10px auto"
        }}
      >
        <Map />
        <Player />
        <Sign />
        <SignTwo />
        <Goblin />
        <GoblinTwo />

        <Knight />
      </div>
    </Pages>
  );
}

export default World;
