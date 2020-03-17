import { createStore, combineReducers } from "redux";
import playerReducer from "../components/player/reducer";
import mapReducer from "../components/map/reducer";
import signReducer from "../components/npc/sign/reducer";
import knightReducer from "../components/npc/knight/reducer";
// import dialogueReducer from "../components/dialogue/reducer";

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer,
  knight: knightReducer,
  sign: signReducer
  // dialogue: dialogueReducer
  // npc: {
  // }
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
