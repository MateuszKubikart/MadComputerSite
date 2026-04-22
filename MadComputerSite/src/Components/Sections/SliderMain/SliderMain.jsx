import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./SliderMain.css";
import Slide_Kasy from "./SlidesMainPage/Slide_Kasy";
import Slide_DPD from "./SlidesMainPage/Slide_DPD";

function SliderMain() {
  const Slides = [<Slide_Kasy />, <Slide_DPD />, <Slide_Kasy />, <Slide_DPD />];

  return (
    <section className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true} // Nieskończona pętla
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, // Powrót autoplaya nawet po kliknięciu
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {Slides.map((SlideComponent, index) => (
          <SwiperSlide key={index}>
            {SlideComponent}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SliderMain;
