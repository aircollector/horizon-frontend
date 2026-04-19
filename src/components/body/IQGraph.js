import React from "react";

const IQGraph = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-[70%] h-[70%] mx-auto py-10 items-center">
        <h2 className="w-[99vh] text-center text-footer-blue font-semibold text-2xl rounded-2xl">
          IQ 테스트 점수 분포 그래프
        </h2>
        <div className="flex flex-col lg:flex-row justify-around items-center my-10 gap-10 h-full">
          <img
            className="lg:w-[50%] w-[85%] max-w-[470px] h-[50%]"
            src={require(`assets/RavenImg/graph02.jpg`)}
            alt="이미지 우측"
          />
          <img
            className="lg:w-[50%] w-[85%] max-w-[470px] h-[50%]"
            src={require(`assets/RavenImg/graph01.jpg`)}
            alt="이미지 우측"
          />
        </div>
      </div>
    </div>
  );
};

export default IQGraph;
