import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "tailwindcss/tailwind.css";
import image from "../../assets/Images/02.jpg";
SwiperCore.use([Navigation, Pagination]);

const RecentCourseSlider = () => {
  const posts = [
    {
      id: 1,
      name: "Product 1",
      imageUrl: image,
      description: "Description of Product 1",
      price: "1000 ریال",
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: image,
      description: "Description of Product 2",
      price: "1000 ریال",
    },
    {
      id: 3,
      name: "Product 2",
      imageUrl: image,
      description: "Description of Product 2",
      price: "1000 ریال",
    },
    {
      id: 4,
      name: "Product 2",
      imageUrl: image,
      description: "Description of Product 2",
      price: "1000 ریال",
    },
  ];
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 pt-14 bg-white sm:h-2/3">
          <h3>دورهای پر بازدید</h3>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <Swiper
          // slidesPerView={3} // Display three slides per view
          // spaceBetween={30} // Add some space between slides
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1"></div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900"></p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentCourseSlider;
