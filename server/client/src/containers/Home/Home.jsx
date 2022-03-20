import React from "react";

import Loading from "../../components/Common/Loading/Loading";
import Entertained from "../Entairtained/Entertained";

import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import Gallery from "../Gallery/Gallery";
import HeroSlide from "../HeroSlide/HeroSlide";

import SupportArea from "../SupportArea/SupportArea";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <SupportArea />

      <FeaturedProduct />

      <Entertained />
      <Gallery />
    </>
  );
};

export default Home;
