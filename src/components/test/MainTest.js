import React, { useContext, useEffect, useState } from "react";
import LeftImg from "components/test/LeftImg";
import RightImg from "components/test/RightImg";
import { useNavigate, useParams } from "react-router-dom";
import Timer from "Timer";
import AnswerTest from "components/test/AnswerTest";
import { MyContext } from "contextTest/MyContext";

const MainTest = () => {
  const { id } = useParams();
  const { setValue, setExamination } = useContext(MyContext);
  const [timerTime, setTimerTime] = useState();
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const refreshFlag = localStorage.getItem("refreshFlag");
    if (refreshFlag) {
      localStorage.removeItem("refreshFlag");
      navigate("/examination/0");
    }

    if (id === "0") {
      setValue(0);
      setExamination("");
      setAnswers([]);
    }

    window.scrollTo(0, 0);
  }, [id, navigate, setValue, setExamination]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      localStorage.setItem("refreshFlag", "true");
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (timerTime === 0) {
      alert("시험시간이 종료되었습니다. 다시 풀어주세요.");
      navigate("/examination/0");
    }
  }, [timerTime, navigate]);

  const handleTimeChange = (newTime) => {
    setTimerTime(newTime);
  };

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[parseInt(id)] = answer;
    setAnswers(updatedAnswers);
  };

  return (
    <div className="w-full h-full mx-auto">
      <Timer onTimeChange={handleTimeChange} />
      <div className="w-[80%] flex justify-center items-center flex-col mx-auto">
        <div className="w-screen flex flex-col lg:flex-row justify-center items-center bg-white gap-20 lg:gap-0 pt-8">
          <LeftImg imgNum={id} />
          <RightImg imgNum={id} />
        </div>
        <AnswerTest
          id={id}
          onAnswerSelect={handleAnswerSelect}
          timerTime={timerTime}
          selectedAnswers={answers}
        />
      </div>
    </div>
  );
};

export default MainTest;
