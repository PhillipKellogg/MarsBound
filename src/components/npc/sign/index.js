import React from "react";
// import { render } from "@testing-library/react";
import { connect } from "react-redux";
import sprite from "./../../../assets/tiles/sign.png";
// import handleMovement from "./movement";
function Sign(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url(${sprite})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "40px",
        height: "40px"
      }}
    ></div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.sign
  };
}

export default connect(mapStateToProps)(Sign);
