import { createSlice } from "@reduxjs/toolkit";

// state init
const initialState = [
  {
    id: 1,
    title: "리덕스 배우기",
    isCompleted: false,
  },
  {
    id: 2,
    title: "리액트 배우기",
    isCompleted: true,
  },
  {
    id: 3,
    title: "리액트쿼리 배우기",
    isCompleted: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    switchTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
