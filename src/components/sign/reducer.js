const initialState = {
    position: [120,120],
    dialogue: "Please ignore this sign, it's here only for visual balance."
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
  