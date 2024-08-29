// Action value
// value를 상수로 만들기
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

// Action creator를 만들어서 Export
// action 객체를 반환하는 함수 생성
// payload: 액션의 목적어
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

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

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case SWITCH_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
