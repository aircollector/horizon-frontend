import React from "react";

const ResultGuide = () => {
  return (
    <div className="w-full h-full">
      <p className="text-3xl pt-7 font-bold">테스트 결과 안내</p>
      <ul className="mx-4 list-none text-xl py-5 pb-10 text-gray-600">
        <li className="py-6 px-4 bg-gray-50 rounded-lg shadow-md mb-4 ">
          <p className="text-lg text-gray-700 font-semibold">
            본 IQ 테스트를 통해 고객님은 자신의 IQ 점수는 물론, 해당 점수에 따른{" "}
            <strong className="text-blue-600">백분위</strong> 및 다양한 직업과의
            연관성에 대해 자세히 확인하실 수 있습니다.
          </p>
          <p className="mt-3 text-gray-600">
            이를 통해 고객님께 맞는 진로 선택이나 커리어 개발에 유용한 정보를
            얻을 수 있습니다. 테스트 결과를 통해 자신에게 가장 적합한 진로를
            발견하고, 더 나은 미래를 설계하는 데 도움이 될 것입니다.
          </p>
        </li>

        <li className="py-6 px-4 bg-gray-50 rounded-lg shadow-md mb-4 ">
          <p className="text-lg text-gray-700 font-semibold">
            테스트 결과는 고객님께서 입력하신 이메일 주소로 정확하게 발송됩니다.
          </p>
          <p className="mt-3 text-gray-600">
            결과가 도달하는 즉시, 해당 이메일에서 IQ 점수와 백분위, 직업 연관성
            등의 세부 정보를 확인하실 수 있습니다. 이로써 언제 어디서든 손쉽게
            테스트 결과를 조회하실 수 있습니다. 결과를 바탕으로 빠르게 실용적인
            피드백을 받을 수 있어 유용합니다.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ResultGuide;
