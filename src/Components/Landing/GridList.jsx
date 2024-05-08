import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "tailwindcss/tailwind.css";
import image from "../../assets/Images/02.jpg";
SwiperCore.use([Navigation, Pagination]);

const Grid = () => {
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
      id: 2,
      name: "Product 2",
      imageUrl: image,
      description: "Description of Product 2",
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
      id: 2,
      name: "Product 2",
      imageUrl: image,
      description: "Description of Product 2",
      price: "1000 ریال",
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: image,
      description: "Description of Product 2",
      price: "1000 ریال",
    },
    // Add more items as needed
  ];

  return (
    <div className="relative bg-gray-50 dark:bg-dark px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white dark:bg-dark sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <Swiper
          spaceBetween={10}
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
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 sm:h-64 lg:h-64 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white dark:bg-medium p-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{post.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <span className="text-gray-900 font-medium">
                      {post.price}
                    </span>
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

export default Grid;
