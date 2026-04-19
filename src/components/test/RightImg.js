import React from "react";
import TestRightImgLayout from "components/test/TestRightImgLayout";

const RightImg = ({ imgNum }) => {
  return (
    <div className="w-full max-w-[700px] h-full md:h-[400px] flex justify-center xl:justify-center items-center -mt-40 lg:-mt-0">
      <div className="w-[95%] h-[400px] md:w-[500px] md:h-[500px] flex justify-center items-center">
        {imgNum <= 24 && <TestRightImgLayout imgNum={imgNum} />}
      </div>
    </div>
  );
};

export default RightImg;
