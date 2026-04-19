import React, { useEffect } from "react";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-[80%] h-full flex flex-col mx-auto">
      <div className="text-3xl font-semibold text-gray-800 mx-auto py-12">
        IQ 테스트 환불 정책
      </div>
      <div className="w-[90%] xl:w-[75%] flex flex-col mx-auto text-lg text-gray-600 gap-6 py-5 mb-10 leading-8">
        <p>
          <strong>1. 환불 개요</strong>
          <br />
          <p className="mt-2 pl-4">
            본 IQ 테스트 환불 정책은 고객에게 신뢰할 수 있는 서비스를 제공하기
            위해 마련된 것으로, 한국 소비자법 및 관련 법령에 따라 시행됩니다. 이
            정책은 IQ 테스트 서비스 이용 시 발생할 수 있는 다양한 환불 상황에
            대한 기준을 안내하며, 고객의 권리 보호와 원활한 서비스 제공을
            목적으로 합니다.
          </p>
          <p className="mt-2 pl-4">
            ※ 고객은 서비스 결제 이후, 아래 명시된 조건에 따라 환불을 요청할 수
            있으며, 당사는 정책에 근거하여 적절한 환불 처리를 진행합니다. 단,
            특정 조건에 따라 환불이 제한될 수 있으며, 이 경우 고객은 사전에 이를
            고지받습니다.
          </p>
        </p>

        <p>
          <strong>2. 환불 신청 가능 기간 및 절차</strong>
          <br />
          <p className="mt-2 pl-4">
            ※ 고객은 IQ 테스트 서비스 결제일로부터 7일 이내에 환불을 신청할 수
            있습니다. 환불 신청은 이메일을 통한 고객센터 접수를 통해 이루어지며,
            환불 처리까지는 영업일 기준 3~5일이 소요됩니다.
          </p>
        </p>

        <div className="pl-4">
          <p>
            <strong>가. 단순변심에 의한 환불</strong>
          </p>
          <ul className="list-decimal pl-8 mt-2">
            <li>
              서비스 시작 전 결제 취소를 요청할 수 있으며, 이 경우 전액 환불이
              가능합니다.
            </li>
            <li>
              결제 이후 테스트가 이미 제공된 경우 단순변심에 의한 환불은
              불가합니다.
            </li>
          </ul>
        </div>

        <div className="pl-4">
          <p>
            <strong>나. 서비스 미제공에 의한 환불</strong>
          </p>
          <ul className="list-decimal pl-8 mt-2">
            <li>
              시스템 오류 등 당사의 책임으로 인해 서비스가 제공되지 않은 경우,
              고객은 전액 환불을 요청할 수 있습니다.
            </li>
            <li>
              테스트 결과 제공 과정에서 기술적 문제가 발생하여 결과를 정상적으로
              받을 수 없는 경우에도 환불이 가능합니다.
            </li>
          </ul>
        </div>

        <p>
          <strong>3. 환불 제한 사항</strong>
          <br />
          <p className="mt-2 pl-4">
            ※ 다음과 같은 경우 환불이 제한될 수 있습니다.
          </p>
        </p>
        <div className="pl-4">
          <p>
            <strong>가. 서비스 제공 완료</strong>
          </p>
          <ul className="list-disc pl-8 mt-2">
            <li>
              고객이 테스트를 모두 완료하고 결과를 수령한 후에는 환불이
              불가합니다. 이는 디지털 서비스 특성상 제공된 후 재사용이 불가함에
              따른 조치입니다.
            </li>
          </ul>
        </div>

        <div className="pl-4">
          <p>
            <strong>나. 고객 귀책 사유로 인한 환불 제한</strong>
          </p>
          <ul className="list-disc pl-8 mt-2">
            <li>
              고객의 의도적인 시스템 조작이나 계정 도용 등의 이유로 서비스
              제공에 차질이 발생한 경우에는 환불이 제한될 수 있습니다.
            </li>
          </ul>
        </div>

        <p>
          <strong>4. 부분 환불</strong>
          <br />
          <p className="mt-2 pl-4">
            특정 상황에서는 부분 환불이 가능할 수 있습니다. 예를 들어, 고객이
            테스트 도중 불가피한 사유로 테스트를 중단해야 하는 경우, 진행된
            테스트에 대한 부분적인 환불이 이루어질 수 있습니다. 부분 환불은
            테스트 완료 단계에 따라 차등 적용됩니다.
          </p>
        </p>

        <p>
          <strong>5. 환불 방법</strong>
          <br />
          <p className="mt-2 pl-4">
            환불은 고객이 결제한 수단을 통해 동일한 방식으로 진행됩니다. 만약
            결제 수단의 사정으로 환불이 불가능한 경우, 별도의 방법으로 환불을
            진행할 수 있으며 이 경우 고객과 협의 후 처리됩니다.
          </p>
        </p>

        <p>
          <strong>6. 불만 처리 및 분쟁 해결</strong>
          <br />
          <p className="mt-2 pl-4">
            환불 절차와 관련된 문의사항이나 불만 사항은 고객센터를 통해 접수할
            수 있습니다. 고객센터는 접수된 불만 사항을 신속하게 처리하며, 환불
            정책에 따른 분쟁이 발생할 경우 관련 법령에 따라 해결 절차가
            진행됩니다.
          </p>
        </p>

        <p>
          <strong>7. 약관의 변경</strong>
          <br />
          <p className="mt-2 pl-4">
            본 환불 정책은 당사의 운영 방침 또는 법률 변경에 따라 수정될 수
            있습니다. 환불 정책 변경 시, 변경 사항은 공식 홈페이지에 공지되며,
            고객은 서비스 이용 전 해당 내용을 확인할 책임이 있습니다.
          </p>
        </p>

        <div>
          <p>
            <strong>8. 고객센터 안내</strong>
            <br />
            <p className="mt-2 pl-4">
              환불과 관련된 문의 사항은 아래 연락처를 통해 상담 가능합니다.
            </p>
          </p>
          <ul className="list-none pl-4">
            <li>
              이메일:{" "}
              <a href="mailto:▣▣▣▣@gmail.com" className="text-blue-600">
                ▣▣▣▣@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <p>
          <strong>9. 부칙</strong>
          <br />
          <p className="mt-2 pl-4">
            본 환불 정책은 2024년 10월 1일부터 시행됩니다.
          </p>
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
