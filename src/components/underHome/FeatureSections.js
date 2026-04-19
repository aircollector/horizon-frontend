import React from "react";
import {
  ClockIcon,
  HomeIcon,
  NewspaperIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import BackgroundFogTest from "components/BackgroundFogTest";

const features = [
  {
    name: "빠르고 간편한 검사",
    description:
      "테스트는 간단한 클릭만으로 진행할 수 있습니다. 또한 각 문제는 다양한 사고 방식을 요구하여, 여러분의 실제 능력을 정확하게 반영합니다.",
    icon: ClockIcon,
  },
  {
    name: "어디서든 열람 가능",
    description:
      "모바일 기기와 PC에서 모두 이용 가능하여, 언제 어디서든 편리하게 IQ 테스트를 받을 수 있습니다. 바쁜 일상 속에서도 짧은 시간 안에 자신의 능력을 확인할 수 있습니다.",
    icon: HomeIcon,
  },
  {
    name: "비밀 엄수",
    description:
      "사용자의 개인정보와 테스트 결과는 철저하게 보호됩니다. 안전한 서버에서 관리되며, 개인의 정보가 외부에 노출되지 않도록 최선을 다합니다.",
    icon: LockClosedIcon,
  },
  {
    name: "빠른 결과 확인",
    description:
      "신속하게 결과를 확인할 수 있습니다. 점수와 함께 해석을 제공하여, 자신의 사고력을 빠르게 파악하고 필요한 개선 방향을 설정하는 데 도움을 줄 수 있습니다.",
    icon: NewspaperIcon,
  },
];

const FeatureSections = () => {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Fast and Clear
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              빠르고 정확하게 IQ를 측정할 수 있습니다!
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              <p>
                총 25문제의 퀴즈를 통해 사고력과 문제해결 능력을 평가받을 수
                있습니다.
              </p>{" "}
              <p>
                다양한 유형의 문제로 구성되어 있어, 여러분의 독창적 사고를
                효과적으로 측정합니다.
              </p>
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mx-auto">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-footer-blue">
                      <feature.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <BackgroundFogTest />
    </div>
  );
};

export default FeatureSections;
