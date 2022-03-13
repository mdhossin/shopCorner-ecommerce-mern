import React from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import sliderOne from "../../assets/images/slider1.webp";
import sliderTwo from "../../assets/images/slider2.webp";
import sliderThree from "../../assets/images/slider3.webp";
import sliderFour from "../../assets/images/slider4.webp";

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);

  const movieItems = [
    {
      id: 1,
      slider: sliderFour,

      title: "Everything That's New and Now",
      overview: "Trending Products",
    },
    {
      id: 2,
      slider: sliderOne,

      title: "All The New Watches Of 2022",
      overview: "Trending Products",
    },
    {
      id: 3,
      slider: sliderTwo,

      title: "Classic Collection",
      overview: "Classic Leather Watch",
    },
    {
      id: 4,
      slider: sliderThree,

      title: "A Great Addition of the Year",
      overview: "The Stone Series",
    },
  ];
  return (
    <section className="hero-section">
      <div className="hero-slide">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
        >
          {movieItems.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <HeroSlideItem
                  item={item}
                  className={`${isActive ? "active" : ""}`}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const HeroSlideItem = ({ item, className }) => {
  console.log(item);
  return (
    <section>
      <div
        className={`hero-slide__item ${className}`}
        style={{ backgroundImage: `url(${item.slider})` }}
      >
        <div className="hero-slide__item__content container-div">
          <div className="hero-slide__item__content__info">
            <h3 className="overview">{item.overview}</h3>
            <h2 className="title">{item.title}</h2>
            <div className="btns">
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlide;
