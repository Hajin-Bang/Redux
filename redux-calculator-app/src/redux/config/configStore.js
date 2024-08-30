import { createStore } from "redux";
import { combineReducers } from "redux";
import calculations from "../modules/calculations";

const rootReducer = combineReducers({
  calculations: calculations,
});
const store = createStore(rootReducer);

export default store;
