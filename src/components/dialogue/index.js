import React from "react";
// import { connect } from "react-redux";
import "./style.scss";
// import store from "../../config/store";
// import { render } from "@testing-library/react";
// import handleMovement from "./movement";
function Dialogue(props) {
  return (
    <div className="box__wrapper">
      <div className="box">
        <div className="box__border">
          <div className="box__border--text">
            {props.msg}
            {props.msg === null || props.msg === undefined ? null : (
              <div className="box__continue">
                <p> K go back </p>
                <p> J to continue </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogue;
