// Slider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper's CSS
import "swiper/css/pagination"; // Import Swiper's pagination CSS
import "tailwindcss/tailwind.css";
import "swiper/swiper-bundle.css";

// Import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
// Import Swiper core
import SwiperCore from "swiper";
import CardComponent from "../Common/Card";

// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Slider = ({ courses }) => {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {courses?.map((course) => (
        <SwiperSlide key={course.id}>
          <CardComponent
            title={course.name}
            imageUrl={course.imageUrl}
            description={course.description}
            price={course.price}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
