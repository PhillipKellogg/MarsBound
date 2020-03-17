import React from "react";
// import { connect } from "react-redux";
import "./style.scss";
// import store from "../../config/store";
// import { render } from "@testing-library/react";
// import handleMovement from "./movement";
function Dialogue(props) {
  // let pageNum = props.page;
  // if (!!props.msg) {
  //   if (pageNum < 0 || pageNum >= props.msg.length) {
  //     pageNum = 0;
  //   }
  // } else {
  //   pageNum = 0;
  // }
  return (
    <div className="box__wrapper">
      <div className="box">
        <div className="box__border">
          <div className="box__border--text">
            {!!props.msg ? (
              <div className="box__container">
                {props.msg[props.page]}
                <div className="box__continue">
                  <p>J continue</p>
                  <p>K back</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogue;
