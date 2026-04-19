import React from "react";
import { BsTwitterX } from "react-icons/bs";

const BtnTwitter = () => {
  const link = window.location.href;

  return (
    <div>
      <button
        className="w-12 h-12 bg-slate-300 hover:bg-slate-400 rounded-md transition-colors duration-300 ease-in-out"
        onClick={() => {
          window.open(
            `https://www.twitter.com/intent/tweet?&url=${encodeURIComponent(
              link
            )}`,
            "트위터(X) 공유하기",
            "width=1200,height=800,location=no,status=no,scrollbars=yes,overflow=hidden"
          );
        }}
      >
        <div>
          <BsTwitterX className="h-[70%] w-[70%] mx-auto" />
        </div>
      </button>
    </div>
  );
};

export default BtnTwitter;
