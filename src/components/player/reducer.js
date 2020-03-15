const initialState = {
  position: [0, 0],
  spriteLocation: "0px 0px",
  direction: "down",
  walkIndex: 0,
  currDialogue: null,
  page: 0
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return { ...state, ...action.payload };
    case "CHANGE_PAGE":
      return { ...state, page: state.page + action.payload.value };
    default:
      return state;
  }
};

export default playerReducer;
