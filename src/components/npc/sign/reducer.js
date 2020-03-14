const initialState = {
  position: [120, 120],
  dialogue: [
    "Please ignore this sign, it's here only for visual balance.",
    "Please leave",
    "You're a persistent one!",
    "...",
    "............................................."
  ],
  response: null,
  dialogueTrue: "ok Bye",
  dialogueFalse: "please stop reading"
};

const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_DIALOGUE":
      return {
        ...action.payload
      };

    default:
      return state;
  }
};

export default signReducer;
