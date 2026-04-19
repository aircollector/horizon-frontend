import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-[80%] h-full flex flex-col mx-auto">
      <div className="text-3xl font-semibold text-gray-800 mx-auto py-12">
        개인정보취급방침
      </div>
      <div className="w-[90%] xl:w-[75%] flex flex-col mx-auto text-lg text-gray-600 gap-6 py-5 mb-10 leading-8">
        <div>
          <strong>1. 개인정보 취급 방침</strong>
          <p className="pl-4">
            <p className="mt-2">
              저희 ▣▣(▣▣▣)에서 운영하는 Horizon(이하 "해당 사이트")은 이용자의
              개인정보를 소중하게 생각하며, 이를 보호하기 위해 최선을 다하고
              있습니다. 본 개인정보취급방침은 이용자가 제공한 개인정보가 어떤
              목적과 방식으로 사용되는지, 그리고 이를 보호하기 위해 어떤 조치가
              취해지는지를 안내드립니다.
            </p>
            <p className="mt-2">
              <li className="list-disc">
                본 방침은 2024년 09월 26일부터 시행됩니다.
              </li>
            </p>
          </p>
        </div>

        <div>
          <strong>2. 수집하는 개인정보 항목</strong>
          <p className="pl-4">
            <p className="mt-2">
              ※ 저희는 이용자가 서비스를 이용하는 과정에서 다음과 같은
              개인정보를 수집합니다.
            </p>
            <ul className="pl-8 list-decimal mt-2">
              <li>
                이름, 나이, 이메일, 성별, 국가, IQ 점수, 테스트 소요 시간,
                테스트 완료 일시
              </li>
              <li>결제 정보, 접속 IP, Referer, Cookie</li>
            </ul>
            <p className="mt-2">
              <li>
                개인정보 수집 방법: 서비스 이용 중 웹사이트 탐색 및 테스트 진행
                시 자동으로 수집됩니다.
              </li>
            </p>
          </p>
        </div>

        <div>
          <strong>3. 개인정보의 수집 및 이용 목적</strong>
          <p className="pl-4">
            <p className="mt-2">
              ※ 저희는 수집한 개인정보를 다음과 같은 목적을 위해 사용합니다.
            </p>
            <ul className="pl-8 list-decimal mt-2">
              <li>테스트 결과 분석 및 통계</li>
              <li>회원 관리 및 서비스 개선</li>
              <li>부정 이용 방지</li>
              <li>민원 처리 및 고지 사항 전달</li>
              <li>마케팅 및 광고</li>
            </ul>
            <p className="mt-2">
              <li>
                저희는 이용자의 동의 없이 개인정보를 다른 목적에 사용하지
                않으며, 필요한 경우 사전 동의를 받습니다.
              </li>
            </p>
          </p>
        </div>

        <div>
          <strong>4. 개인정보의 보유 및 이용 기간</strong>
          <p className="mt-2 pl-4">
            저희는 서비스 제공 및 안정적인 운영을 위해 개인정보를 보유합니다.
            개인정보는 이용자가 요청하거나 목적이 달성되면 즉시 파기되며, 관련
            법령에 따라 보관이 필요한 경우를 제외하고는 보유 기간이 끝난 후 즉시
            삭제됩니다.
          </p>
        </div>

        <div>
          <strong>5. 개인정보의 제공</strong>
          <p className="pl-4">
            <p className="mt-2">
              ※ 저희는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
              다만, 아래의 경우는 예외로 합니다:
            </p>
            <ul className="pl-8 list-decimal mt-2">
              <li>이용자가 사전에 동의한 경우</li>
              <li>
                법령에 의거하거나, 수사기관의 정당한 요구에 따라 제공이 필요한
                경우
              </li>
            </ul>
          </p>
        </div>

        <div>
          <strong>6. 개인정보취급방침의 변경</strong>
          <p className="pl-4">
            <p className="mt-2">
              저희는 개인정보취급방침을 수시로 변경할 수 있으며, 변경 시 문서
              상단에 기재된 시행 일자를 변경 일자로 업데이트합니다.
              개인정보취급방침의 모든 변경 사항은 업데이트된 시점으로부터 즉시
              적용되며, 이전에 작성된 개인정보취급방침을 전체적으로 대체합니다.
              변경 사항에 대해서는 언제든지 확인할 수 있으며, 중요한 변경 사항은
              별도로 공지드릴 수 있습니다.
            </p>
          </p>
        </div>

        <div>
          <strong>7. 개인정보에 관한 민원서비스</strong>
          <p className="pl-4">
            <p className="mt-2">
              저희는 고객님의 개인정보를 보호하고, 관련 민원을 신속하게 처리하기
              위해 전담 부서 및 개인정보 보호 책임자를 지정하고 있습니다.
            </p>
            <p className="mt-2">
              개인정보 보호 책임자: 회원 관리팀 ▣▣ 담당자
              <br />
              이메일:{" "}
              <a href="mailto:▣▣▣▣@gmail.com" className="text-blue-500">
                ▣▣▣▣@gmail.com
              </a>
            </p>
            <p className="mt-2">
              귀하께서는 ▣▣의 서비스를 이용하시며 발생하는 모든 개인정보보호
              관련 민원을 개인정보관리책임자 혹은 담당 부서로 신고하실 수
              있습니다. 저희는 이용자들의 신고사항에 대해 신속하게 충분한 답변을
              드릴 것입니다.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
