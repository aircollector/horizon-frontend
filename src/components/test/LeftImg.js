import React from "react";
import TestLeftImgLayout from "components/test/TestLeftImgLayout";

const LeftImg = ({ imgNum }) => {
  return (
    <div className="w-full max-w-[700px] h-full md:h-[400px] flex justify-center xl:justify-center items-center">
      <div className="w-[95%] max-w-[400px] h-[400px] md:h-[500px] flex justify-center items-center">
        {imgNum <= 24 && <TestLeftImgLayout imgNum={imgNum} />}
      </div>
    </div>
  );
};

export default LeftImg;
