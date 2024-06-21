import React, { useEffect, useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "tailwindcss/tailwind.css";
import { TopCourse } from "../../Core/Services/api/TopCourse";
import image from "../../assets/Images/02.jpg";
SwiperCore.use([Navigation, Pagination]);

const Grid = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopCourses = async () => {
      try {
        const result = await TopCourse(10); // فراخوانی 4 دوره برتر
        if (result.error) {
          throw new Error(result.error);
        }
        setCourses(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopCourses();
  }, []);

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (error) {
    return <div>خطا: {error}</div>;
  }

  return (
    <div className="relative bg-gray-50 dark:bg-dark px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white dark:bg-dark dark:text-medium sm:h-2/3">
          <h2>برترین دوره‌ها</h2>
        </div>
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
          {courses.map((course, index) => (
            <>
              <div key={index}></div>
              <SwiperSlide key={course.courseId}>
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 sm:h-64 lg:h-64 w-full object-cover"
                      src={course.tumbImageAddress || image} // استفاده از تصویر پیش‌فرض در صورت عدم وجود تصویر
                      alt={course.title}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white dark:bg-medium p-6">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {course.describe}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <span className="text-gray-900 font-medium">
                        {course.cost} ریال
                      </span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <span className="text-sm text-gray-500">
                        استاد: {course.teacherName}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <span className="text-sm text-gray-500">
                        کلاس: {course.classRoomName}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <span className="text-sm text-gray-500">
                        سطح: {course.levelName}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Grid;
