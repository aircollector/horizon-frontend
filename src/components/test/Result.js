import React, { useEffect } from "react";
import SendEmail from "components/test/SendEmail";
import ResultGuide from "components/test/ResultGuide";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const handlePopState = (event) => {
      navigate("/");
    };

    window.history.pushState(null, null, window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  return (
    <div className="h-full w-[650px] mx-auto">
      <div className="flex flex-col justify-center items-center py-5 gap-5">
        <h1 className="text-5xl">수고하셨습니다!</h1>
        <div className="flex flex-col justify-center items-center text-xl text-gray-600">
          <p>IQ 테스트를 완료하였습니다!</p>
          <p>입력하신 이메일로 증명서를 전송하오니 정확히 입력해 주세요.</p>
        </div>
      </div>
      <SendEmail />
      <ResultGuide />
    </div>
  );
};

export default Result;
