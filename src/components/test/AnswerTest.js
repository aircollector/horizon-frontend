import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { MyContext } from "contextTest/MyContext";
import questions from "components/test/questions";
import ResultBtn from "components/test/ResultBtn";

const AnswerTest = ({ onAnswerSelect, timerTime, selectedAnswers }) => {
  const { id } = useParams();
  const { setValue, setExamination } = useContext(MyContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    parseInt(id)
  );
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentQuestionIndex(parseInt(id));
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handlePopState = (event) => {
      event.preventDefault();
      navigate("/");
    };

    window.history.pushState(null, null, window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  const handleAnswerChange = (event) => {
    const answer = event.target.value;
    setSelectedAnswer(answer);
    onAnswerSelect(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === "") {
      alert("답변을 선택해 주세요.");
      return;
    }

    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
      setValue((prevValue) => prevValue + 1);
    }

    setExamination(
      (prevExamination) => prevExamination + selectedAnswer.toUpperCase()
    );

    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length + 1) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer("");
      navigate(`/examination/${nextIndex}`);
    } else {
      setValue(
        score +
          (selectedAnswer === questions[currentQuestionIndex].answer ? 1 : 0)
      );
      setQuizCompleted(true);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-center mt-8">
        {!quizCompleted && questions[currentQuestionIndex] && (
          <div>
            <h1 className="font-semibold text-2xl text-center pt-4">
              {currentQuestionIndex + 1} / {questions.length}
            </h1>
            <p>{questions[currentQuestionIndex].question}</p>
            <div className="flex space-x-4 my-4 gap-8">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    className="hidden"
                    type="radio"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={handleAnswerChange}
                  />
                  <span
                    className={`w-7 h-7 border-2 border-indigo-900 rounded-full flex items-center justify-center mr-2 ${
                      selectedAnswer === option ? "bg-indigo-900" : "bg-white"
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${
                        selectedAnswer === option ? "bg-white" : "hidden"
                      }`}
                    />
                  </span>
                  {option}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-[8rem] relative text-3xl mt-4 mb-4">
        {currentQuestionIndex < questions.length - 1 && (
          <button
            className="absolute right-0 top-0"
            onClick={handleNextQuestion}
          >
            <ArrowRightCircleIcon className="h-12 w-12 hover:text-footer-blue text-indigo-900" />
          </button>
        )}
        {id >= 24 && (
          <ResultBtn
            timerTime={timerTime}
            selectedAnswer={selectedAnswer}
            selectedAnswers={selectedAnswers}
            id={id}
          />
        )}
      </div>
    </div>
  );
};

export default AnswerTest;
