import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todosSlice";

function AddForm() {
  const [todo, setTodo] = useState("");

  // 액션 객체 보내기
  // 추가 버튼을 눌렀을 때 발생하도록
  // action creator 사용
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(
            addTodo({
              id: new Date().getTime(),
              title: todo,
              isCompleted: false,
            })
          );
        }}
      >
        추가
      </button>
    </div>
  );
}

export default AddForm;
