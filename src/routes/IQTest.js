import React, { useState } from "react";
import Timer from "Timer";
import { Link } from "react-router-dom";

const IQTest = () => {
  const [started, setStarted] = useState(false);
  return (
    <div className="w-full h-full">
      {started && <Timer />}
      <div>
        여기서부터 시작합니다. 시작하시겠습니까?
        <div className="w-full">
          <Link to={"/examination/0"}>
            <button
              onClick={() => {
                setStarted(true);
              }}
            >
              시작하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IQTest;
