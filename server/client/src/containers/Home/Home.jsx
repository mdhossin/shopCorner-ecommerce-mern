import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../components/Common/Loading/Loading";
import { fetchProducts } from "../../redux/actions/productAction";
import Entertained from "../Entairtained/Entertained";

import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import HeroSlide from "../HeroSlide/HeroSlide";

import SupportArea from "../SupportArea/SupportArea";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <HeroSlide />
      <SupportArea />

      <FeaturedProduct />

      <Entertained />
      <Gallery />

      <Footer />
    </div>
  );
};

export default Home;
