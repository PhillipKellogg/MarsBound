const initialState = {
  position: [0, 0],
  spriteLocation: "0px 0px",
  direction: "down",
  walkIndex: 0,
  currDialogue: null
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...action.payload
      };

    default:
      return state;
  }
};

export default playerReducer;
