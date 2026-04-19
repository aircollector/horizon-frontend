import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Body from "components/body/Body";
import MoveUpBtn from "components/MoveUpBtn";

const HomeLayout = () => {
  return (
    <div className="w-full h-full relative">
      <Header />
      <Body />
      <Footer />
      <MoveUpBtn />
    </div>
  );
};

export default HomeLayout;
