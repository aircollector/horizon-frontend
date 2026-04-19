import React, { useEffect } from "react";

const AboutRaven = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-[80%] h-full flex flex-col mx-auto">
      <div className="text-3xl font-semibold text-gray-800 mx-auto py-12">
        Raven 검사란
      </div>
      <div className="w-[90%] xl:w-[75%] flex flex-col mx-auto text-lg text-gray-600 gap-6 py-5 mb-10 leading-8">
        <div>
          <strong>1. 저자</strong>
          <p className="mt-2 pl-4">저자 : J.C. Raven / 임호찬 교수</p>
        </div>

        <div>
          <strong>2. 레이븐 지능발달검사</strong>
          <p className="mt-2 pl-4">
            레이븐지능발달검사는 세계 29개국에서 예비 영재아동 판별을 위한
            지능검사로 널리 활용되고 있습니다. 이 검사는 주로 추론적 사고와
            논리적 연관성을 발견하는 능력을 평가하는 검사로서 신뢰도와 타당도를
            공인받고 있습니다.
          </p>
        </div>

        <div>
          <strong>3. 검사의 특징</strong>
          <p className="mt-2 pl-4">
            본 검사의 가장 큰 장점은 언어능력이나 언어적 설명이 필요 없고,
            최소한의 운동기능만 요구되는 범 문화적인 검사라는 것입니다. 연령별
            수행 기준이 대별되고, 시간제한이 없으며, 비교적 짧은 시간 내에 마칠
            수 있습니다.
          </p>
        </div>

        <div>
          <strong>4. 검사의 내용 구성</strong>
          <p className="mt-2 pl-4">
            영국의 Raven박사는 Spearman과 함께 공부하면서 지능의 두요인 “g”
            (general ability, 일반능력) 요인과 “s” (specific ability, 특수능력)
            요인 가운데 일반능력을 평가해보려는 시도를 하였습니다. 어느
            지능검사도 한 개인을 완벽하게 평가하는 검사는 없으나, Raven 방식의
            검사가 “g” 요인을 가장 잘 대변하는 검사로 인정받고 있습니다.
          </p>
        </div>

        <div>
          <strong>5. 검사의 활용</strong>
          <p className="mt-2 pl-4">
            흥미에 대한 이해는 학생들의 성격에 대한 단서를 줄 수 있으며, 이것은
            중학생들의 인성교육에 중요한 자료가 될 수 있습니다. 학습흥미는
            학생의 학업 성취에 영향을 주기 때문에, 학습흥미의 탐색은 교육 지도
            및 학습상담에 활용될 수 있습니다.
          </p>
        </div>

        <div>
          <strong>6. 결론</strong>
          <p className="mt-2 pl-4">
            Raven 검사 방식은 비언어적 요소와 함께 문화혜택의 영향을 가장 적게
            받는 검사로, 미국 등에서 집단검사 형태로 예비 영재교육 대상자를
            선별하는 데 가장 널리 활용되는 검사입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutRaven;
