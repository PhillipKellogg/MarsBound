import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
// import store from "../../config/store";
// import { render } from "@testing-library/react";
// import handleMovement from "./movement";
function Header(props) {
  return (
    <nav className="header">
      <span className="header__logo">LOGO</span>
      <ul className="link">
        <ol className="link__element link__element--1 ">Game</ol>
        <ol className="link__element link__element--2 ">About Game</ol>
        <ol className="link__element link__element--3 ">About Me</ol>
        <ol className="link__element link__element--4 ">More Work</ol>
      </ul>
    </nav>
  );
}
export default Header;
