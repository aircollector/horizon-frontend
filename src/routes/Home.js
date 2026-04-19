import { useEffect, useState } from "react";
import FeatureSections from "components/underHome/FeatureSections";
import Testimonials from "components/underHome/Testimonials";
import { Link } from "react-router-dom";
import RecentTest from "components/body/RecentTest";
import API_URLS from "apiUrls";

const Home = () => {
  const [testedPeople, setTestedPeople] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function confirm() {
      const response = await fetch(API_URLS.countAll, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setTestedPeople(data.data);
    }

    confirm();
  }, []);

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 -mt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e734ff] to-[#34ffff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/* original: from-[#344bff] to-[#52ffc0] */}
        <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-24">
          <div className="pb-10 hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-xl font-semibold leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              지난주에 <p className="inline text-red-600">{testedPeople}</p>명이
              테스트를 완료했습니다!!{" "}
              <Link to={"/about-iq"} className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                자세히 알아보기 <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <p>당신의 IQ를</p>
              <p>측정해보세요!!!</p>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 flex justify-center">
              <div className="w-[80%] py-4">
                <p className="py-2">
                  IQ 테스트는 개인의 지적 능력을 평가하기 위한 검사로 일반적인
                  경험에 기반합니다.
                </p>{" "}
                <p className="py-2">
                  이 테스트는 훈련이나 학습의 영향을 받지 않으며 동일 연령대의
                  집단과 비교하여 자신의 지적 수준을 파악 가능합니다.
                </p>
                <p className="py-2">
                  테스트는 주어진 시간 내에 집중력이 필요하므로 조용하고 편안한
                  환경에서 진행하는 것이 좋습니다.
                </p>
              </div>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={"/examination/0"}
                className="w-48 h-14 flex justify-center items-center rounded-xl bg-footer-blue text-xl font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-footer-blue transition-colors duration-300 ease-in-out"
              >
                <p>테스트 하러가기!</p>
              </Link>
              <Link
                to={"/about-raven"}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                자세히 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#52ffc0] to-[#344bff]  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <RecentTest />
      <FeatureSections />
      <Testimonials />
      <div className="flex flex-col lg:flex-row justify-center items-center my-10 gap-10 h-full">
        <img
          className="lg:w-[60%] w-[85%] max-w-[550px] h-[60%]"
          src={require(`assets/RavenImg/graph04.jpg`)}
          alt="이미지 좌"
        />
        <img
          className="lg:w-[60%] w-[85%] max-w-[550px] h-[60%]"
          src={require(`assets/RavenImg/graph05.jpg`)}
          alt="이미지 우측"
        />
      </div>
    </div>
  );
};

export default Home;
