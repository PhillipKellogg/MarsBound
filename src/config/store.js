import { createStore, combineReducers } from "redux"
import playerReducer from "../components/player/reducer"
import mapReducer from "../components/map/reducer"
import signReducer from '../components/sign/reducer'
const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer,
  // npc: {
   sign: signReducer,
  // }
  });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store