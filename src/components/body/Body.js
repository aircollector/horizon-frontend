import React from "react";
import IQTest from "routes/IQTest";
import { Route, Routes } from "react-router-dom";
import Home from "routes/Home";
import Help from "routes/Help";
import Result from "components/test/Result";
import TermsOfService from "components/serviceInfos/TermsOfService";
import PrivacyPolicy from "components/serviceInfos/PrivacyPolicy";
import ResultAfterPay from "routes/ResultAfterPay";
import MainTest from "components/test/MainTest";
import AboutIQ from "components/body/AboutIQ";
import RefundPolicy from "components/serviceInfos/RefundPolicy";
import AboutRaven from "components/body/AboutRaven";
import { MyProvider } from "contextTest/MyContext";
import PaymentPage from "components/test/PaymentPage";

const Body = () => {
  return (
    <div className="h-full w-full bg-[#f9f9f9]">
      <MyProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examination" element={<IQTest />} />
          <Route path="/examination/:id" element={<MainTest />} />
          <Route path="/help" element={<Help />} />
          <Route path="/result" element={<Result />} />
          <Route path="/result-desc/:id" element={<ResultAfterPay />} />
          <Route path="/paymentPage/:uuid" element={<PaymentPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about-iq" element={<AboutIQ />} />
          <Route path="/about-raven" element={<AboutRaven />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </MyProvider>
    </div>
  );
};

export default Body;
