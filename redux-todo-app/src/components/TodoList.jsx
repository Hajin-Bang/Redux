import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/modules/todos";

function TodoList() {
  // 스토어 조회하기 (모든 TodoList 조회)
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <button
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
