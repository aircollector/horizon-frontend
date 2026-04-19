import React from "react";
import { FaFacebookF } from "react-icons/fa6";

const BtnFacebook = () => {
  const link = window.location.href;

  return (
    <div>
      <button
        className="w-12 h-12 bg-slate-300 hover:bg-slate-400 rounded-md transition-colors duration-300 ease-in-out"
        onClick={() => {
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              link
            )}`,
            "페이스북 공유하기",
            "width=1200,height=800,location=no,status=no,scrollbars=yes,overflow=hidden"
          );
        }}
      >
        <div>
          <FaFacebookF className="h-[70%] w-[70%] mx-auto" />
        </div>
      </button>
    </div>
  );
};

export default BtnFacebook;
