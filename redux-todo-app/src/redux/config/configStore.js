// import { combineReducers, createStore } from "redux";
// import todos from "../modules/todos";

import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../slices/todosSlice";

// // combineReducers()
// // 여러개의 reducer를 하나의 객체로 합침
// const rootReducer = combineReducers({
//   todos: todos,
// });

// // createStore()
// // 모든 상태를 관리
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
export default store;
