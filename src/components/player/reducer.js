const initialState = {
  position: [0, 0],
  spriteLocation: "0px 0px",
  direction: "down",
  walkIndex: 0,
  currDialogue: null,
  page: 0,
  canFight: false,
  inCombat: false,
  fighter: null,
  talkingTo: null,
  finalPage: false,
  fightingNow: false,
  visibility: "visible"
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return { ...state, ...action.payload };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: state.page + action.payload.value,
        finalPage: action.payload.finalPage
      };
    case "COMBAT":
      return { ...state, inCombat: action.payload.inCombat };
    case "FIGHTING_NOW":
      return {
        ...state,
        fightingNow: action.payload.fightingNow,
        visibility: action.payload.visibility
      };
    default:
      return state;
  }
};

export default playerReducer;
