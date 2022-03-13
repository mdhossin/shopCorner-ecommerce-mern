import React from "react";
import Loader from "../../components/Common/Loader/Loader";
import HeroSlide from "../HeroSlide/HeroSlide";
import ProductTab from "../Product/ProductTab";
import SupportArea from "../SupportArea/SupportArea";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <SupportArea />
      <ProductTab spaceBottomClass="pb-60" category="smartphone" />
      {/* <Loader /> */}
    </>
  );
};

export default Home;
