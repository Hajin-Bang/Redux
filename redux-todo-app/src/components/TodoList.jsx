import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/slices/todosSlice";

function TodoList() {
  // 스토어 조회하기 (모든 TodoList 조회)
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const completedTodos = todos.filter((todo) => todo.isCompleted === false);
  const incompletedTodos = todos.filter((todo) => todo.isCompleted === true);

  const dispatch = useDispatch();

  return (
    <div>
      {/* 미완료 목록 */}
      <h2>Todo List</h2>
      {completedTodos.map((todo) => {
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
            <button
              onClick={() => {
                dispatch(switchTodo(todo.id));
              }}
            >
              완료
            </button>
          </div>
        );
      })}
      {/* 완료 목록 */}
      <h2>Completed Todo List</h2>
      {incompletedTodos.map((todo) => {
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
            <button
              onClick={() => {
                dispatch(switchTodo(todo.id));
              }}
            >
              미완료
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
