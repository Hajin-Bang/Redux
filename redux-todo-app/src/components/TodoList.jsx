import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  // 스토어 조회하기 (모든 TodoList 조회)
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
}

export default TodoList;
