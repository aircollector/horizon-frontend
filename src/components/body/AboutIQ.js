import React, { useEffect } from "react";

const AboutIQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-[80%] h-full flex flex-col mx-auto">
      <div className="text-3xl font-semibold text-gray-800 mx-auto py-12">
        IQ(Intelligence Quotient) 란
      </div>
      <div className="w-[90%] xl:w-[75%] flex flex-col mx-auto text-lg text-gray-600 gap-6 py-5 mb-10 leading-8">
        <div>
          <p>
            <strong>1. 지능지수(IQ)의 정의</strong>
          </p>
          <ul className="pl-8 list-decimal mt-2">
            <li className="mt-2">
              지능지수(IQ)는 인간의 지능을 평가하기 위해 개발된 표준화된
              테스트에서 도출된 총 점수로 개인의 지적 능력을 수치적으로 나타내는
              지표입니다.
            </li>
            <li className="mt-2">
              IQ라는 약어는 심리학자 윌리엄 스턴이 독일어
              "Intelligenzquotient"의 줄임말로 처음 사용했으며, 이는 1912년 그의
              저서에서 지능 테스트의 점수화 방법을 설명하는 데 기원합니다.
            </li>
          </ul>
        </div>

        <div>
          <p>
            <strong>2. 역사적 배경</strong>
          </p>
          <ul className="pl-8 list-decimal mt-2">
            <li className="mt-2">
              전통적으로 IQ는 특정 지능 테스트를 통해 얻은 "정신 연령" 점수를
              개인의 "생물학적 연령"으로 나누어 계산하였습니다.
            </li>
            <li className="mt-2">
              이 계산된 값에 100을 곱하여 최종 IQ 점수를 도출합니다.
            </li>
            <li className="mt-2">
              현대의 IQ 테스트는 원점수를 평균 100, 표준 편차 15인 정규 분포로
              변환하여 점수를 산출합니다.
            </li>
            <li className="mt-2">
              이에 따라 인구의 약 68%가 IQ 85에서 115 사이의 점수를 기록하며,
              130 이상의 점수는 상위 2%, 70 이하의 점수는 하위 2%에 해당합니다.
            </li>
          </ul>
        </div>

        <div>
          <p>
            <strong>3. IQ와 관련된 요인</strong>
          </p>
          <ul className="pl-8 list-decimal mt-2">
            <li className="mt-2">
              IQ 점수는 다양한 사회적, 경제적 요인과 밀접한 관계가 있습니다.
            </li>
            <li className="mt-2">
              연구에 따르면, 영양 상태, 부모의 사회경제적 지위, 질병 및 사망률,
              부모의 사회적 지위, 그리고 출생 환경 등이 IQ에 영향을 미칠 수
              있습니다.
            </li>
            <li className="mt-2">
              IQ의 유전성에 대한 연구는 오랜 시간 동안 진행되어 왔지만, 여전히
              유전성 추정치의 의미와 유전 메커니즘에 대한 논의는 계속되고
              있습니다.
            </li>
          </ul>
        </div>

        <div>
          <p>
            <strong>4. IQ의 활용 및 연구</strong>
          </p>
          <ul className="pl-8 list-decimal mt-2">
            <li className="mt-2">
              IQ 점수는 교육적 배치, 지적 능력 평가, 직업 지원자의 평가 등
              다양한 분야에서 사용됩니다.
            </li>
            <li className="mt-2">
              연구에서는 IQ가 직업 성과와 수입을 예측하는 변수로 주목받고
              있으며, 인구 내 심리적 지능 분포를 연구하는 데에도 활용됩니다.
            </li>
            <li className="mt-2">
              특히, 20세기 초 이후 IQ 점수는 평균적으로 매 10년마다 약 3점
              상승하는 경향이 관찰되며, 이를 "플린 효과"라고 부릅니다.
            </li>
            <li className="mt-2">
              이러한 변화는 특정 하위 테스트 점수의 패턴을 연구하여 인간 지능에
              대한 현재 연구에 기여할 수 있는 기회를 제공합니다.
            </li>
          </ul>
        </div>

        <div>
          <p>
            <strong>※ 결론</strong>
          </p>
          <ul className="pl-8 list-decimal mt-2">
            <li className="mt-2">
              IQ는 인간 지능을 평가하는 중요한 도구로, 지능에 대한 깊이 있는
              이해를 제공하는 데 기여합니다. 다양한 요인들이 IQ 점수에 영향을
              미친다는 사실은 우리 사회의 복잡성을 보여주며, 단순한 수치로
              개인의 지적 능력을 정의하는 것이 아니라, 그 이면에 존재하는 다양한
              환경적, 사회적 요인들을 함께 고려해야 한다는 점을 상기시킵니다.
            </li>
            <li className="mt-2">
              현대 사회에서 IQ는 교육적 배치와 직업 선택, 그리고 개인의 잠재력을
              최대한 발휘하기 위한 중요한 지표로 활용됩니다. IQ 점수의 상승
              추세인 플린 효과는 인류의 지적 잠재력이 발전하고 있음을 보여주며,
              이를 통해 교육과 환경이 사람들의 지능 발달에 긍정적인 영향을 미칠
              수 있다는 희망적인 메시지를 전달합니다.
            </li>
            <li className="mt-2">
              또한, IQ 연구는 지능의 복잡한 본질을 탐구할 수 있는 기회를
              제공하며, 더 나아가 인류의 발전 방향에 대한 귀중한 통찰을
              제공합니다. 이러한 연구를 통해 우리는 더 포괄적이고 공정한 교육
              정책과 사회적 시스템을 발전시킬 수 있으며, 다양한 배경을 가진
              개인들이 각자의 능력을 최대한 발휘할 수 있는 환경을 조성할 수
              있습니다.
            </li>
            <li className="mt-2">
              결론적으로, IQ는 단순한 지능 평가의 수단이 아닌, 인류의 잠재력을
              이해하고, 이를 발전시키기 위한 중요한 출발점입니다. 앞으로의
              연구와 사회적 노력이 우리의 지적 능력을 한층 더 발전시키는 데
              기여할 것임을 기대하며, 모든 개인이 자신의 가능성을 실현할 수 있는
              세상을 만들어 가는 데 함께 나아가길 바랍니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutIQ;
