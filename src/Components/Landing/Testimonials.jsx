import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "tailwindcss/tailwind.css";
import image from "../../assets/Images/12.png";

SwiperCore.use([Navigation, Pagination]);

const Testimonials = () => {
  const posts = [
    {
      id: 1,
      name: "Product 2",
      description: "به به چه سایت قشنگییییی",
      profileImage: image,
      nickname: "malihe",
    },
    {
      id: 2,
      name: "Product 2",

      description: "دوره های برگزار شده عالی بود خسته نباشید ",
      profileImage: image,
      nickname: "malihe",
    },
    {
      id: 3,
      name: "Product 2",

      description:
        " دوره ری اکت رو شرکت کردم بسیار عالی بود ممنونم از زحماتتان.",
      profileImage: image,
      nickname: "malihe",
    },
    {
      id: 4,
      name: "Product 2",
      description: "در دوره دات نت شرکت کردم بسیار راضی بودم ",
      profileImage: image,
      nickname: "malihe",
    },
  ];
  return (
    <div className="relative bg-gray-50 dark:bg-dark px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute dark:text-medium inset-0 pt-6">
        <h2>نظرات کاربران</h2>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <Swiper
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
              spaceBetween: 30,
            },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="flex bg-slate-200 flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={post.profileImage}
                    alt=""
                  />
                  <h2 className="text-xl font-bold px-2">{post.nickname}</h2>
                </div>
                <h3 className="px-3 py-8">
                  {post.description && post.description.length > 50
                    ? post.description.slice(0, 40) + "..."
                    : post.description}
                </h3>

                <div className="flex flex-1 flex-col justify-between bg-yellow-300	 p-3">
                  <div className="mt-1 flex items-center">
                    <div className="ml-3"></div>
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

export default Testimonials;
