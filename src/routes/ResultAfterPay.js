import React, { useContext, useEffect, useState } from "react";
import BtnFacebook from "components/sns/facebook/BtnFacebook";
import BtnNaver from "components/sns/naver/BtnNaver";
import BtnTwitter from "components/sns/twitter/BtnTwitter";
import ResultBox from "components/payment/ResultBox";
import IQGraph from "components/body/IQGraph";
import MyUrl from "components/sns/MyUrl";
import { useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "contextTest/MyContext";
import API_URLS from "apiUrls";

const ResultAfterPay = () => {
  const location = useLocation();
  const pathUrl = location.pathname;
  const uuid = pathUrl.slice("/result-desc/".length);
  const [userData, setUserData] = useState({});
  const [per, setPer] = useState("");
  const { secData } = useContext(MyContext);
  const [isPaid, setIsPaid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!uuid) return;

      try {
        const response = await fetch(`${API_URLS.sendUsers}/${uuid}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const myPer = calcMyPercent(data.data.iq);

        setPer(myPer);
        setUserData(data.data);

        if (data.data.paymentYn === true) {
          setIsPaid(true);
        }
      } catch (error) {
        console.error("에러: ", error);
      }
    };

    fetchUserData();
  }, [uuid]);

  const calcMyPercent = (iq) => {
    if (iq >= 55 && iq < 70) {
      return "99.72%";
    } else if (iq >= 70 && iq < 85) {
      return "97.58%";
    } else if (iq >= 85 && iq < 100) {
      return "83.99%";
    } else if (iq >= 100 && iq < 115) {
      return "34.13%";
    } else if (iq >= 115 && iq < 130) {
      return "13.59%";
    } else if (iq >= 130 && iq <= 145) {
      return "2.14%";
    } else {
      return "측정 불능!";
    }
  };

  const navigateToPaymentPage = () => {
    navigate(`/paymentPage/${uuid}`);
  };

  return (
    <div className="h-full w-full text-center relative z-10 text-gray-800 overflow-x-hidden">
      {!isPaid ? (
        <div className="h-[75vh] flex justify-center items-center py-20 px-4">
          <div className="text-center max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              결제가 완료되지 않았습니다.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              소중한 결과를 정확하게 확인하려면 결제를 완료해 주세요.
              <br />
              결제 후, 당신의 결과를 바로 확인하실 수 있습니다.
            </p>
            <p className="text-md text-gray-500 mb-4">
              결제는 안전하고 간편하게 진행됩니다. 아래 버튼을 눌러 결제페이지로
              이동하세요.
            </p>
            <button
              onClick={navigateToPaymentPage}
              className="bg-footer-blue border-footer-blue text-white w-full py-3 px-6 rounded-lg hover:bg-blue-900 hover:border-blue-900 transition duration-200 ease-in-out"
            >
              <p>결제 페이지로 이동</p>
            </button>
            <div className="mt-6 text-sm text-gray-500">
              <p>결제에 대해 궁금한 사항이 있으면 Q&A로 문의해 주세요.</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#344bff] to-[#52ffc0] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-100 right-0 top-100 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-100"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#52ffc0] to-[#344bff]  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
          <h1 className="mx-auto text-4xl font-semibold pt-10">
            IQ 테스트 분석 결과 보고서
          </h1>
          <div className="max-w-7xl h-[50%] mx-auto text-center px-4 py-12 rounded-md">
            <div className=" w-[90%] h-full mx-auto">
              <h2 className="text-2xl font-semibold pb-2">
                {userData.name}님 축하드립니다.
              </h2>
              <p className="font-semibold text-2xl">
                테스트 분석을 마친 결과, IQ점수는 {userData.iq}이며 상위 {per}에
                해당됩니다.
              </p>
              <div className="max-w-4xl mx-auto w-full h-full">
                <div className=" flex flex-col md:flex-row rounded-md overflow-hidden w-full h-full justify-center items-center">
                  <ResultBox number={userData.iq} text={"IQ"} />
                  <ResultBox number={per} text={"백분위"} />
                </div>
              </div>
            </div>

            <div className="font-semibold text-md pt-2">
              이 링크를 저장하세요! 언제든지 확인 가능합니다.
            </div>
            <div className="flex justify-center items-center gap-5 mt-4 pt-4">
              <BtnFacebook />
              <BtnNaver />
              <BtnTwitter />
              <MyUrl />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-90 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-300"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[250deg] bg-gradient-to-tr from-[#52ffc0] to-[#344bff] opacity-30 sm:left-[calc(20%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="max-w-7xl h-[100%] mx-auto px-4 py-12 rounded-md my-8 bg-white shadow-lg">
            <div className="w-[70%] h-[100%] mx-auto text-xl">
              <div className="font-semibold text-4xl border-b border-gray-400 pb-4">
                IQ 점수에 따른 지적 능력 수준
              </div>

              {Object.entries(Object.values).map(([key, value]) => (
                <div key={key} className="py-2">
                  <strong>{key}:</strong> {value}
                </div>
              ))}
              {Object.entries(secData).map(([key, value]) => (
                <div key={key} className="py-2">
                  <strong>{key}:</strong> {value}
                </div>
              ))}

              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#52ffc0] to-[#344bff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
              </div>

              <div className="text-left py-6">
                <p className="py-2">
                  <p className="font-semibold py-2 text-2xl text-center">
                    IQ 점수는 당신이 가진 모든 지능을 측정하는 절대적인 지표는
                    아닙니다.
                  </p>
                  <p className="text-lg py-2">
                    - IQ 테스트는 단지 인지 능력과 학습 능력을 일부 측정할
                    뿐이며, 사람들이 가지고 있는 다양한 지능 형태를 다루지는
                    않습니다.
                  </p>
                  <p className="text-lg py-2">
                    - IQ 점수가 낮게 나온다고 해서 당신이 덜 똑똑하거나 성공할
                    수 없다는 것은 결코 아닙니다. 당신은 다른 지능 분야에서
                    뛰어나거나 재능이 있을 수도 있습니다.
                  </p>
                </p>

                <div className="py-4">
                  <p className="font-semibold text-2xl">
                    145 이상 (상위 0.01% 수준)
                  </p>
                  <p className="py-2 text-lg">
                    이 범위의 IQ 점수를 가진 사람들은 매우 높은 지능을 갖추고
                    있으며, 전 세계적으로 소수의 인물만이 이 수준에 해당합니다.
                    창의적이고 혁신적인 분야에서 뛰어난 성과를 보이는 경우가
                    많습니다. 복잡한 문제나 과학적 문제를 해결하는 데 능숙하며,
                    주로 창의성, 문제 해결, 혁신을 요구하는 분야에서 뛰어난
                    성과를 보입니다. 예술, 과학, 철학 등에서 획기적인 기여를 할
                    수 있습니다.
                  </p>
                  <p className="py-2 text-lg">
                    <strong>추천 직업:</strong>
                  </p>
                  <ul className="list-disc pl-6 text-lg">
                    <li>연구자</li>
                    <li>이론 물리학자</li>
                    <li>인공지능 개발자</li>
                    <li>창의적 예술가</li>
                    <li>혁신적인 기업 창업자</li>
                    <li>철학자</li>
                  </ul>
                </div>

                <div className="py-4">
                  <p className="font-semibold text-2xl">
                    131-144 (상위 0.1% 수준)
                  </p>
                  <p className="py-2 text-lg">
                    이 구간에 속하는 사람들은 상위 0.1%의 지적 능력을 보유하고
                    있으며, 매우 높은 수준의 지능을 자랑합니다. 이들은 특히
                    학문적, 직업적 성취에서 두각을 나타내며, 주어진 문제에 대해
                    창의적인 해결책을 제시할 수 있는 능력이 뛰어납니다. 이들은
                    종종 연구개발, 의학, 기술 분야에서 중요한 역할을 하며,
                    사회적으로도 중요한 리더 역할을 맡는 경우가 많습니다.
                  </p>
                  <p className="py-2 text-lg">
                    <strong>추천 직업:</strong>
                  </p>
                  <ul className="list-disc pl-6 text-lg">
                    <li>의학 연구자</li>
                    <li>수학자</li>
                    <li>컴퓨터 과학자</li>
                    <li>기술 개발자</li>
                    <li>경영 컨설턴트</li>
                    <li>정치인</li>
                    <li>고위직 관리자</li>
                  </ul>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-[calc(100%-51rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-75rem)]"
                >
                  <div
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#52ffc0] to-[#344bff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  />
                </div>

                <div className="py-4">
                  <p className="font-semibold text-2xl">
                    116-130 (상위 2~3% 수준)
                  </p>
                  <p className="py-2 text-lg">
                    이 범위의 IQ 점수를 가진 사람들은 뛰어난 학습 능력과 직관력,
                    문제 해결 능력을 보유하고 있습니다. 대학교 교육 수준에서
                    매우 높은 성과를 보이는 경우가 많으며, 복잡한 문제를 빠르게
                    이해하고 해결하는 능력이 탁월합니다. 이들은 직장에서 높은
                    성과를 달성하며, 다양한 분야에서 전문가로 자리 잡을 수 있는
                    가능성이 높습니다. 그들은 또한 여러 분야에서 전문가가 될 수
                    있는 능력과 잠재력을 지니고 있습니다.
                  </p>
                  <p className="py-2 text-lg">
                    <strong>추천 직업:</strong>
                  </p>
                  <ul className="list-disc pl-6 text-lg">
                    <li>변호사</li>
                    <li>금융 분석가</li>
                    <li>마케팅 전문가</li>
                    <li>엔지니어</li>
                    <li>의사</li>
                    <li>교육자</li>
                    <li>관리직</li>
                  </ul>
                </div>

                <div className="py-4">
                  <p className="font-semibold text-2xl">
                    101-115 (평균 이상 수준)
                  </p>
                  <p className="py-2 text-lg">
                    IQ 점수가 이 범위에 속하는 사람들은 일반적으로 학업 및
                    직장에서 우수한 성취를 보이며, 비교적 새로운 지식이나 문제를
                    해결할 수 있는 능력을 갖추고 있습니다. 이들은 업무나
                    학습에서 빠르게 적응하고, 일정한 수준의 창의성과 분석 능력을
                    보여줍니다. 다양한 분야에서 실용적이고 효율적인 방법으로
                    문제를 해결할 수 있습니다.
                  </p>
                  <p className="py-2 text-lg">
                    <strong>추천 직업:</strong>
                  </p>
                  <ul className="list-disc pl-6 text-lg">
                    <li>마케팅 전문가</li>
                    <li>회계사</li>
                    <li>중간 관리자</li>
                    <li>데이터 분석가</li>
                    <li>교사</li>
                    <li>보건 전문가</li>
                    <li>사회 복지사</li>
                  </ul>
                </div>

                <div className="py-4">
                  <p className="font-semibold text-2xl">86-100 (평균 수준)</p>
                  <p className="py-2 text-lg">
                    이 범위는 일반적인 대중들의 지능 수준으로, 대다수의 직업에서
                    충분한 업무 능력을 갖추고 있으며, 일상생활에서도 무리 없이
                    적응합니다. 직장에서의 성취와 일상적인 문제 해결에 어려움이
                    없으며, 안정적인 직업을 유지할 수 있습니다. 주어진 업무를
                    충실히 수행하고 팀워크와 협업에 강점을 보일 수 있습니다.
                  </p>
                  <p className="py-2 text-lg">
                    <strong>추천 직업:</strong>
                  </p>
                  <ul className="list-disc pl-6 text-lg">
                    <li>고객 서비스</li>
                    <li>사무직</li>
                    <li>판매</li>
                    <li>물류</li>
                    <li>기술 지원</li>
                    <li>제조업</li>
                  </ul>
                </div>

                <div className="py-4">
                  <p className="font-semibold text-2xl">
                    71-85 (평균 이하 수준)
                  </p>
                  <p className="py-2 text-lg">
                    이 범위에 속하는 사람들은 초등학교 정도의 학습 능력을
                    보이며, 실생활에서 기본적인 문제 해결이 가능합니다. 그러나
                    교육 수준이 높아질수록 학습 능력의 한계가 드러날 수 있으며,
                    더 복잡한 과제나 추상적인 문제를 해결하는 데 어려움을 겪을
                    수 있습니다. 이들은 기본적인 작업을 수행할 수 있지만,
                    직장에서 보다 전문적인 업무나 문제 해결에는 한계가 있을 수
                    있습니다.
                  </p>
                  <p className="py-2 text-lg">
                    <strong>추천 직업:</strong>
                  </p>
                  <ul className="list-disc pl-6 text-lg">
                    <li>단순 작업</li>
                    <li>소매업</li>
                    <li>청소</li>
                    <li>육체 노동</li>
                    <li>재고 관리</li>
                    <li>일반 사무 보조</li>
                  </ul>
                </div>

                <div className="py-4">
                  <p className="font-semibold text-2xl">
                    70 이하 (저지능 수준)
                  </p>
                  <p className="py-2 text-lg">
                    IQ 점수가 이 범위에 속하는 사람들은 간단한 일상생활을 수행할
                    수 있지만, 학교나 직장에서 어려움을 겪을 수 있습니다. 사회적
                    상호작용이나 직장 내에서의 능력에 제한이 있을 수 있으며, 더
                    많은 교육적 지원이 필요한 경우가 많습니다. 이들은 주로
                    반복적이고 단순한 업무에 종사하며, 생활 관리가 필요할 수
                    있습니다.
                  </p>
                  <p className="py-2 text-lg">
                    <strong>추천 직업:</strong>
                  </p>
                  <ul className="list-disc pl-6 text-lg">
                    <li>단순 작업</li>
                    <li>육체 노동</li>
                    <li>지원직</li>
                    <li>반복적인 작업</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <IQGraph />
        </>
      )}
    </div>
  );
};

export default ResultAfterPay;
