import React from "react";
import { useSelector } from "react-redux";

function CalculatorLog() {
  const calculations = useSelector((state) => state.calculations);
  console.log(calculations);

  return (
    <div>
      <h2>Calculator Log</h2>
      {calculations.map((calculation) => {
        return (
          <div key={calculation.id}>
            <span>{calculation.result}</span>
            <button>삭제</button>
          </div>
        );
      })}
    </div>
  );
}

export default CalculatorLog;
