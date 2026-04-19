import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const PaymentPage = () => {
  const { uuid } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pay.nicepay.co.kr/v1/js/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const startPayment = (e) => {
    e.preventDefault();

    if (!uuid) {
      alert("유효한 주문을 찾을 수 없습니다. 결제를 진행할 수 없습니다.");
      return;
    }

    setIsLoading(true);

    const { AUTHNICE } = window;

    if (!AUTHNICE) {
      alert(
        "결제 시스템이 정상적으로 로드되지 않았습니다. 다시 시도해 주세요.",
      );
      setIsLoading(false);
      return;
    }

    const resetPaymentStatus = () => {
      setIsPaymentSuccessful(false);
      setIsLoading(false);
    };

    AUTHNICE.requestPay({
      clientId: "B2_3ea04f81d0606237a09c34c1c8a12345",
      method: "card",
      orderId: uuid,
      amount: 9900,
      goodsName: "Basic 상품",
      returnUrl: "http://apis.ap-▣▣▣▣-2.elasticbeanstalk.com/▣▣/▣▣/▣▣▣▣",
      fnError: (result) => {
        alert("결제 과정에서 오류가 발생했습니다. 다시 시도해 주세요.");
        resetPaymentStatus();
        setIsLoading(false);
      },
      fnCallback: (result) => {
        if (result.success) {
          setIsPaymentSuccessful(true);
          alert("결제가 완료되었습니다.");
          navigate(`/result-desc/${uuid}`);
        } else {
          setIsPaymentSuccessful(false);
          alert("결제 실패! 다시 시도해주세요.");
        }
        setIsLoading(false);
      },
    });
  };

  return (
    <div className="flex justify-center items-center h-[75vh] w-full p-2">
      <div className="text-center max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 my-4">
          결제를 진행해주세요.
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          결제를 완료하시고, 원하시는 결과를 바로 확인해 보세요!
        </p>
        <button
          className="my-5 w-full border shadow-md border-footer-blue rounded-md h-12 bg-footer-blue hover:bg-blue-900 hover:border-blue-900 text-white transition duration-200 ease-in-out"
          onClick={startPayment}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex justify-center items-center">
              <PulseLoader color="#fff" size={10} />
            </div>
          ) : (
            <p>결제하기</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
