import React from "react";
// import { render } from "@testing-library/react";
import { connect } from "react-redux";
import sprite from "./../../assets/player/player_walk.png";
import handleMovement from "./movement";
import store from "../../config/store";

import Dialogue from "../dialogue";

function Player(props) {
  let dis;
  // { (props.currDialogue === null) ?       style={display:"none"} :    style={display:"inline"} }

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: props.position[1],
          left: props.position[0],
          backgroundImage: `url(${sprite})`,
          backgroundPosition: props.spriteLocation,
          width: "40px",
          height: "40px"
        }}
      ></div>

      <Dialogue page={props.page} msg={props.currDialogue} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(handleMovement(Player));
