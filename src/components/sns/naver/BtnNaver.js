import React from "react";
import { SiNaver } from "react-icons/si";

const BtnNaver = () => {
  const link = window.location.href;

  return (
    <div>
      <button
        className="w-12 h-12 bg-slate-300 hover:bg-slate-400 rounded-md transition-colors duration-300 ease-in-out"
        onClick={() => {
          window.open(
            `https://share.naver.com/web/shareView?url=${encodeURIComponent(
              link
            )}&title=네이버 공유하기`,
            "네이버 공유하기",
            "width=600,height=800,location=no,status=no,scrollbars=yes,overflow=hidden"
          );
        }}
      >
        <div>
          <SiNaver className="h-[50%] w-[50%] mx-auto" />
        </div>
      </button>
    </div>
  );
};

export default BtnNaver;
