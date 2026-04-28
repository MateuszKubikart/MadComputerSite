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
  SerwisRMA,
} from "./Components";

// Dodatkowy plik css do nadpisania css dla swipera
import "./Carousel.css";

export default function CarouselMain() {
  const slides = [
    <Fotowoltaika key="1" />,
    <SerwisRMA key="2" />,
    <SkladanieKomputerow key="3" />,
    <KasyFiskalne key="4" />,
    <DpdPickup key="5" />,
    <SerwisElektryki key="6" />,
    <AutomatykaBram key="7" />,
    <SystemyAlarmowe key="8" />,
    <InteligentnyMonitoring key="9" />,
  ];

  return (
    <div className="main-carousel-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
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
