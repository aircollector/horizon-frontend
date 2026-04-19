import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const MoveUpBtn = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

  useEffect(() => {
    setToggleBtn(toggleBtn);
  }, [toggleBtn]);

  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div
        className="fixed bottom-14 z-50 right-8 opacity-30 cursor-pointer w-[3rem] h-[3rem] rounded-full overflow-hidden shadow-gray-600 shadow-md"
        onClick={goToTop}
      >
        <FaArrowCircleUp className="w-full h-full" />
      </div>
    </div>
  );
};

export default MoveUpBtn;
