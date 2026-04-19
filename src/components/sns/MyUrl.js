import React from "react";
import { FaLink } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const MyUrl = () => {
  const location = useLocation();
  const pathUrl = location.pathname;
  const homeUrl = `http://iq-horizon.com`;
  const currentUrl = homeUrl + pathUrl;

  const CopyClipBoard = (url) => {
    const textArea = document.createElement("textarea");
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  const handleCopy = () => {
    CopyClipBoard(currentUrl);
  };

  return (
    <div>
      <button
        className="w-12 h-12 bg-slate-300 hover:bg-slate-400 rounded-full"
        onClick={handleCopy} // 버튼 클릭 시 복사 실행
      >
        <div>
          <FaLink className="h-[70%] w-[70%] mx-auto" />
        </div>
      </button>
    </div>
  );
};

export default MyUrl;

// https 말고는 작동 안함
// import React from "react";
// import { FaLink } from "react-icons/fa6";

// const MyUrl = () => {
//   const currentUrl = window.location.href;

//   const CopyClipBoard = async () => {
//     try {
//       await navigator.clipboard.writeText(currentUrl);
//     } catch (e) {
//       console.error("주소 복사 실패:", e);
//     }
//   };

//   return (
//     <div>
//       <button
//         className="w-12 h-12 bg-slate-300 hover:bg-slate-400 rounded-full"
//         onClick={CopyClipBoard}
//       >
//         <div>
//           <FaLink className="h-[70%] w-[70%] mx-auto" />
//         </div>
//       </button>
//     </div>
//   );
// };

// export default MyUrl;
