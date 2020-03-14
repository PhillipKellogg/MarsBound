import React from "react";
import Player from "../player";
import Map from "../map";
import Pages from "../pages/Pages";

import Sign from "../npc/sign";
import { tiles } from "../../data/maps/1";
import store from "../../config/store";

function World(props) {
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles
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
      </div>
    </Pages>
  );
}

export default World;
