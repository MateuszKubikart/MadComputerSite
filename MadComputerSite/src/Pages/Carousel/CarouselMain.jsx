import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  SkladanieKomputerow,
  KasyFiskalne,
  DpdPickup,
  Fotowoltaika,
  SerwisElektryki,
  AutomatykaBram,
  SystemyAlarmowe,
  InteligentnyMonitoring,
} from "./Components";

// Dodatkowy plik css do nadpisania css dla swipera
import "./Carousel.css";

export default function CarouselMain() {
  const slides = [
    <SkladanieKomputerow key="1" />,
    <KasyFiskalne key="2" />,
    <DpdPickup key="3" />,
    <Fotowoltaika key="4" />,
    <SerwisElektryki key="5" />,
    <AutomatykaBram key="6" />,
    <SystemyAlarmowe key="7" />,
    <InteligentnyMonitoring key="8" />,
  ];

  return (
    <div className="main-carousel-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="services-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
