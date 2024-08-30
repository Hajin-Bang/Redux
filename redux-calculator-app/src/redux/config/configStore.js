import { createStore } from "redux";
import { combineReducers } from "redux";
import calculations from "../modules/calculations";
import logs from "../modules/logs";

const rootReducer = combineReducers({
  calculations: calculations,
  logs: logs,
});
const store = createStore(rootReducer);

export default store;
