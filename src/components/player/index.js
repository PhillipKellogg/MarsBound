import React from "react";
// import { render } from "@testing-library/react";
import { connect } from "react-redux";
import sprite from "./../../assets/player/player_walk.png";
import handleMovement from "./movement";
function Player(props) {
  return (
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
    >
      {" "}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(handleMovement(Player));
