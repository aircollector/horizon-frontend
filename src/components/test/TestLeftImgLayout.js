import React from "react";
import image1 from "assets/Examination/q/taven01.png";
import image2 from "assets/Examination/q/taven02.png";
import image3 from "assets/Examination/q/taven03.png";
import image4 from "assets/Examination/q/taven04.png";
import image5 from "assets/Examination/q/taven05.png";
import image6 from "assets/Examination/q/taven06.png";
import image7 from "assets/Examination/q/taven07.png";
import image8 from "assets/Examination/q/taven08.png";
import image9 from "assets/Examination/q/taven09.png";
import image10 from "assets/Examination/q/taven10.png";
import image11 from "assets/Examination/q/taven11.png";
import image12 from "assets/Examination/q/taven12.png";
import image13 from "assets/Examination/q/taven13.png";
import image14 from "assets/Examination/q/taven14.png";
import image15 from "assets/Examination/q/taven15.png";
import image16 from "assets/Examination/q/taven16.png";
import image17 from "assets/Examination/q/taven17.png";
import image18 from "assets/Examination/q/taven18.png";
import image19 from "assets/Examination/q/taven19.png";
import image20 from "assets/Examination/q/taven20.png";
import image21 from "assets/Examination/q/taven21.png";
import image22 from "assets/Examination/q/taven22.png";
import image23 from "assets/Examination/q/taven23.png";
import image24 from "assets/Examination/q/taven24.png";
import image25 from "assets/Examination/q/taven25.png";

const TestLeftImgLayout = ({ imgNum }) => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
  ];
  return <img alt="test_image" src={`${images[imgNum]}`}></img>;
};

export default TestLeftImgLayout;
