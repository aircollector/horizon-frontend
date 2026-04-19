import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "contextTest/MyContext";
import questions from "components/test/questions";

const ResultBtn = ({ timerTime, selectedAnswers, selectedAnswer, id }) => {
  const { value, setValue, setExamination } = useContext(MyContext);
  const navigate = useNavigate();
  const [currentQuestionIndex] = useState(parseInt(id));
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const addAnswerFirst = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setValue((prevValue) => prevValue + 1);
    }

    setExamination(
      (prevExamination) => prevExamination + selectedAnswer.toUpperCase()
    );
    setIsAnswerChecked(true); // 답변이 체크되었음을 뜻함
  };

  const calcHandler = () => {
    if (timerTime >= 2280) {
      alert("문제를 정확히 풀어주십시오.");
      navigate("/examination/0");
      return;
    }

    const allAnswersSelected =
      selectedAnswers.length === 25 &&
      selectedAnswers.every((answer) => answer !== undefined);

    if (!allAnswersSelected) {
      alert("모든 질문에 대한 답변을 선택해 주세요.");
      setIsAnswerChecked(false);
      return;
    }

    // IQ 계산은 답이 다 완료된 후에 이루어져야 함.
    let correctScore = value;

    const minIQ = 70;
    const maxIQ = 145;
    const minScore = 0;
    const maxScore = 25;

    let myIQ =
      ((correctScore - minScore) / (maxScore - minScore)) * (maxIQ - minIQ) +
      minIQ;

    myIQ = Math.round(myIQ);

    setValue(myIQ); // 최종 IQ 값 넣음

    navigate("/result"); // 이동
  };

  // 답변이 체크 되었을때 작동하게 만듬
  useEffect(() => {
    if (isAnswerChecked) {
      calcHandler(); // 계산 함수 부르기
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswerChecked]);

  return (
    <div className="w-full h-full">
      <div className="w-full xl:w-[80%] h-[50%] mx-auto">
        <button
          className="my-5 w-full h-full mx-auto border shadow-md border-footer-blue rounded-md bg-footer-blue hover:bg-blue-950 text-white py-3 px-3 transition duration-300 transform hover:scale-105"
          onClick={() => {
            addAnswerFirst(); // 여기서 시작
          }}
        >
          제출하기!
        </button>
      </div>
    </div>
  );
};

export default ResultBtn;
