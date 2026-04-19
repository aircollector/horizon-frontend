import React, { useState } from "react";
import BtnFacebook from "components/sns/facebook/BtnFacebook";
import BtnNaver from "components/sns/naver/BtnNaver";
import BtnTwitter from "components/sns/twitter/BtnTwitter";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <footer className="bg-footer-blue w-full flex flex-col justify-center items-center min-h-[250px] sm:min-h-[300px]">
      <div className="py-4 flex font-bold text-sm sm:text-lg md:text-xl text-slate-300 gap-5 flex-wrap justify-center">
        <div className="hover:text-slate-500 transition-colors duration-300 ease-in-out">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="hover:text-slate-500 transition-colors duration-300 ease-in-out">
          <Link to={"terms-of-service"}>Terms of Service</Link>
        </div>
        <div className="hover:text-slate-500 transition-colors duration-300 ease-in-out">
          <Link to={"privacy-policy"}>Privacy Policy</Link>
        </div>
        <div className="hover:text-slate-500 transition-colors duration-300 ease-in-out">
          <Link to={"/refund-policy"}>Refund Policy</Link>
        </div>
        <div className="hover:text-slate-500 transition-colors duration-300 ease-in-out">
          <Link to={"help"}>Q&A</Link>
        </div>
      </div>
      <div className="h-[20%] w-[50%] gap-10 flex justify-center items-center my-3 py-2">
        <BtnTwitter />
        <BtnFacebook />
        <BtnNaver />
      </div>
      <div>
        <p
          className="cursor-pointer text-center text-lg text-slate-300 mb-2"
          onClick={() => {
            setOpenInfo(!openInfo);
          }}
        >
          Business Information
        </p>

        {openInfo && (
          <div className="text-left text-sm sm:text-base text-slate-400 font-bold flex flex-col sm:flex-row gap-5 justify-center">
            <div>
              <p>주식회사 ▣▣ / 대표: 홍길동</p>
              <p>사업자등록번호: 123-45-67890</p>
              <p>이메일: ▣▣▣▣@gmail.com</p>
            </div>
            <div>
              <p>사업장 주소: 마곡 ▣▣▣▣ 오피스텔 ▣동 10층 </p>
              <p>유선번호: 010-1234-5678</p>
              <p>통신판매업 신고번호: 2024-▣▣▣▣-1234</p>
            </div>
          </div>
        )}
      </div>
      <div className="py-4 text-md md:text-lg text-slate-400 mt-2 font-bold">
        ⓒ2024 Copyright ▣▣▣ Inc, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
