import React from "react";
import store from "../../../config/store";

export default function signDisplay(sign) {
  if (store.getState().player.fightingNow) {
    console.log("PLAYER FIGHTING");

    store.dispatch({
      type: "SHOW_SIGN",
      payload: {
        display: "none"
      }
    });
  }
  console.log(store.getState().player.fightingNow);

  if (store.getState().knight.inCombat) {
    console.log("KNIGHT FIGHTING");
  }
  return sign;
}
