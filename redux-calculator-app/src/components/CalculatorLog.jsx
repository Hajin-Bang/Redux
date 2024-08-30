import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLog } from "../redux/modules/logs";

function CalculatorLog() {
  const calculations = useSelector((state) => state.calculations);
  const logs = useSelector((state) => state.logs);
  console.log(calculations);

  const dispatch = useDispatch();

  // 삭제하려는 id를 확인하고, deleteLog에 넣는다
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteLog(id)); // deleteLog state에 id 추가
  };

  // 삭제한 값을 필터링한 log를 calculationLogs에 저장한다.
  const calculationLogs = calculations.filter(
    (calculation) => !logs.includes(calculation.id)
  );

  return (
    <div>
      <h2>Calculator Log</h2>
      {calculationLogs.map((calculation) => {
        // 삭제값을 필터링한 목록을 화면에 렌더링
        return (
          <div key={calculation.id}>
            <span>{calculation.result}</span>
            <button onClick={() => handleDelete(calculation.id)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
}

export default CalculatorLog;
