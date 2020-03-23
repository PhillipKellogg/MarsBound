import React from "react";
import Header from "../header/index";
import "./style.scss"
export default function(props) {
  return (
    <main className="main">
      <Header />
      {props.children}
    </main>
  );
}
