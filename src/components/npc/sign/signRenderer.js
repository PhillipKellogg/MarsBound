import store from "../../../config/store";

export default function dispatchStage2Sign() {
    if (store.getState().map.name === "Stage2"){
      const stage2Dialogue= [
        "You've bested my knight.",
        "But you won't last a second",
        "against my GOBLINS!!!!!"
      ];
      store.dispatch({
        type: "SIGN_DIALOGUE",
        payload: {  
          position: [120, 240],
          dialogue: stage2Dialogue,
          hasCombat: false, 
          display: "flex"
        }
      });
    }
  }