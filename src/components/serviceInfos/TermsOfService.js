import React, { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-[80%] h-full flex flex-col mx-auto">
      <div className="text-3xl font-semibold text-gray-800 mx-auto py-12">
        서비스 이용약관
      </div>
      <div className="w-[90%] xl:w-[75%] flex flex-col mx-auto text-lg text-gray-600 gap-6 py-5 mb-10 leading-8">
        <div>
          <strong>1. 이용약관의 동의</strong>
          <p className="mt-2">
            당사 ▣▣(▣▣)에서 운영 중인 서비스 Horizon(이하 "해당 사이트")에서
            테스트에 응시하는 경우, 본 이용약관에 동의한 것으로 간주합니다.
          </p>
        </div>

        <div>
          <strong>2. 쿠키 사용 동의</strong>
          <p className="mt-2">
            이용자는 ▣▣가 이용자 식별 및 데이터 분석을 위하여 쿠키를 사용함에
            동의합니다. 브라우저 설정을 통해 쿠키 사용을 거부할 수 있으나, 이
            경우 서비스 이용이 제한될 수 있습니다.
          </p>
        </div>

        <div>
          <strong>3. 테스트 내용 및 제한 사항</strong>
          <p className="mt-2">
            ▣▣는 전 세계적으로 인정받고 있는 비언어적 테스트인 레이븐 매트릭스를
            기반으로 한 도형 추론 테스트를 채택하고 있습니다. 다만, 이용자에
            따라 IQ 테스트 결과가 정확하지 않을 수 있습니다. 테스트 결과는 단순
            참고용이며, 의사나 심리학자의 상담을 대체할 수 없습니다.
          </p>
        </div>

        <div>
          <strong>4. 개인정보 수집</strong>
          <p className="mt-2">
            이용자는 테스트 결과를 확인하기 위해 이름, 나이, 이메일, 성별,
            국가를 기입해야 하며, 기입된 정보는 테스트 결과 분석 및 통계,
            비즈니스를 위해 사용됩니다. 이 정보는 이용자의 동의 없이 제3자에게
            제공되지 않습니다. 또한, 이메일을 통해 테스트 관련 안내 및 기타
            비즈니스 메일을 발송할 수 있습니다.
          </p>
        </div>

        <div>
          <strong>5. 결제 및 환불 정책</strong>
          <p className="mt-2">
            ▣▣는 테스트 품질 유지를 위하여 소정의 검사 수수료를 받고 있습니다.
            수수료 결제 후에는 원칙적으로 청약철회가 불가합니다. 결과 확인에
            기술적 문제가 발생하거나 기타 정당한 사유가 있는 경우, 이메일을 통해
            문의하면 환불이 가능합니다.
          </p>
          <p className="mt-2">
            결제 수수료는 해당 통화 간 현재 환율에 영향을 받을 수 있으며, 현지
            상황에 따라 카드 및 은행 결제 수수료나 환전 수수료가 발생할 수
            있습니다.
          </p>
        </div>

        <div>
          <strong>6. 서비스의 일시 중단 및 변경</strong>
          <p className="mt-2">
            ▣▣는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절
            등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있으며,
            새로운 서비스로의 교체 등 적절하다고 판단하는 사유에 기하여 현재
            제공되는 서비스를 이용자에게 사전통지 없이 완전히 변경 또는 중단할
            수 있습니다.
          </p>
        </div>

        <div>
          <strong>7. 저작권 및 콘텐츠 사용</strong>
          <p className="mt-2">
            본 사이트에서 제공되는 모든 콘텐츠의 산업 재산권은 ▣▣에게 있으며,
            텍스트, 이미지 및 기타 콘텐츠뿐만 아니라 그래픽 레이아웃은
            저작권법에 의해 보호됩니다. 이용자는 ▣▣의 사전 승낙 없이 복제, 전송,
            출판, 배포, 방송 등 영리목적으로 이용하거나 제3자에게 이용하게 할 수
            없습니다.
          </p>
        </div>

        <div>
          <strong>8. 약관의 개정</strong>
          <p className="mt-2">
            ▣▣는 관련 법률을 위배하지 않는 범위에서 본 약관을 개정할 수
            있습니다. 약관이 개정되면, 개정 사항을 공식 홈페이지에 공지하며,
            이용자는 서비스 이용 전 해당 내용을 확인할 책임이 있습니다.
          </p>
        </div>

        <div>
          <strong>9. 분쟁 해결</strong>
          <p className="mt-2">
            ▣▣와 이용자 간 발생한 서비스 이용에 관한 분쟁에 대하여는 대한민국
            법을 적용하며, 본 분쟁으로 인한 소는 민사소송법상의 관할을 가지는
            대한민국의 법원에 제기됩니다.
          </p>
        </div>

        <div>
          <strong>10. 고객센터</strong>
          <p className="mt-2">
            서비스 이용과 관련된 문의사항은 이메일을 통해 고객센터에 연락주시기
            바랍니다.
          </p>
          <p>
            이메일:{" "}
            <a href="mailto:▣▣▣▣@gmail.com" className="text-blue-500">
              ▣▣▣▣@gmail.com
            </a>
          </p>
        </div>

        <div>
          <strong>11. 부칙</strong>
          <p className="mt-2">
            본 서비스 이용약관은 2024년 10월 1일부터 시행됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
