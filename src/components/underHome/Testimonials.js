import React from "react";

const Testimonials = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10  opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] " />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt=""
          src={require("assets/images/newLogo.png")}
          className="mx-auto h-12 object-cover"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p className="text-gray-700">
              “Raven 지능 발달 검사는 전 세계 29개국에서 예비 영재 아동을
              판별하는 중요한 도구로 활용되고 있으며, 이 검사는 주로 추론적
              사고와 논리적 관계를 탐구하는 능력을 평가하는 데 초점을 맞추고
              있습니다. 그 신뢰도와 타당성은 학계에서 널리 인정받고 있으며, 이와
              유사한 방식으로 설계된 Taven은 이러한 기초를 바탕으로 더욱 정교한
              측정을 제공합니다.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src={require("assets/images/background/background_1.jpg")}
              className="mx-auto h-10 w-10 rounded-full object-cover"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">▣.▣. ▣▣▣▣</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Writer of Taven Test</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
