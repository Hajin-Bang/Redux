import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { calPi, calPow10, calSquare } from "../redux/modules/calculations";

function Calculator() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  // 공통 핸들러 함수
  // 각 버튼별 중복되는 코드를 줄이기 위함
  const handleCalculate = (actionCreator, operation) => {
    dispatch(
      actionCreator({
        id: new Date().getTime(),
        operation,
        input: input,
      })
    );
  };

  return (
    <div>
      <form
        type="submit"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="number"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div>
          <button onClick={() => handleCalculate(calPi, "pi")}>π</button>
          <button onClick={() => handleCalculate(calPow10, "pow_10")}>
            10^x
          </button>
          <button onClick={() => handleCalculate(calSquare, "square")}>
            X²
          </button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
