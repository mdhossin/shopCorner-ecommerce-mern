import React from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import sliderOne from "../assets/images/slider1.webp";
import sliderTwo from "../assets/images/slider2.webp";
import sliderThree from "../assets/images/slider3.webp";
import sliderFour from "../assets/images/slider4.webp";

const Slider = () => {
  SwiperCore.use([Autoplay]);

  const movieItems = [
    {
      id: 1,
      slider: sliderFour,

      title: "Nova Watch",
      overview:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  content here making",
    },
    {
      id: 2,
      slider: sliderOne,

      title: "Smart Watch",
      overview:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  content here making",
    },
    {
      id: 3,
      slider: sliderTwo,

      title: "Desi Watch",
      overview:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  content here making",
    },
    {
      id: 4,
      slider: sliderThree,

      title: "Rolex Watch",
      overview:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  content here making",
    },
  ];
  return (
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
  );
};

const HeroSlideItem = (props) => {
  const item = props.item;

  return (
    <section>
      <div
        className={`hero-slide__item ${props.className}`}
        style={{ backgroundImage: `url(${item.slider})` }}
      >
        <div className="hero-slide__item__content container">
          <div className="hero-slide__item__content__info">
            <h2 className="title">{item.title}</h2>
            <div className="overview">{item.overview}</div>
            <div className="btns">
              <button>Watch now</button>
              <button>Watch trailer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
