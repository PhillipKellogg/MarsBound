const initialState = {
  hasCombat: false,
  position: [200, 80],
  dialogue: [
    "Please ignore this sign, it's here only for visual balance.",
    "Please leave",
    "You're a persistent one!",
    "...",
    "............................................."
  ],
  response: null,
  hasCombat: false,
  name: "Sign",
  display: "flex"
};

const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_DIALOGUE":
      return {
        ...state,
        ...action.payload
      };
    case "SHOW_SIGN":
      return {
        ...state,
        display: action.payload.display
      };
    default:
      return state;
  }
};

export default signReducer;
