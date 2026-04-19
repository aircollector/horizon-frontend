import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { CgHello } from "react-icons/cg";

const MainDesc = () => {
  return (
    <div className="w-full h-full flex justify-center items-center my-12">
      <div className="w-[100%] lg:w-[70%] h-full flex flex-col mx-auto text-center justify-between text-gray-500 font-bold font-serif">
        <div className="w-full h-full flex my-4 py-4">
          <div className="w-[30%] lg:w-[20%] lg:h-[50%] mx-auto flex flex-col">
            <AiFillThunderbolt className="w-12 h-12 mx-auto" />
            <div>신속함</div>
            <div>설명 길게 작성 하기</div>
          </div>
          <div className="w-[30%] lg:w-[20%] lg:h-[50%] mx-auto flex flex-col">
            <AiFillThunderbolt className="w-12 h-12 mx-auto" />
            <div>신속함</div>
            <div>설명 길게 작성 하기</div>
          </div>
        </div>
        <div className="w-full h-full flex">
          <div className="w-[30%] lg:w-[20%] lg:h-[50%] mx-auto flex flex-col">
            <CgHello className="w-12 h-12 mx-auto" />
            <div>신속함</div>
            <div>설명 길게 작성 하기</div>
          </div>
          <div className="w-[30%] lg:w-[20%] lg:h-[50%] mx-auto flex flex-col">
            <AiFillThunderbolt className="w-12 h-12 mx-auto" />
            <div>신속함</div>
            <div>설명 길게 작성 하기</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDesc;
