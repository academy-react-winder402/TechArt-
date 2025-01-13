import React, { useState, useEffect } from "react";
import PageFramework from "../Components/Common/Course&BlogDetailSkeleone";
import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import CourseDetailes from "../Components/CourseDetailes/CourseDetailes";
import { useLocation } from "react-router-dom";
import Navigation from "../Components/Common/Navigation";

function CourseDetailPage() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // اعلام پایان بارگذاری
    }, 3000); // زمان شبیه‌سازی بارگذاری
  }, []);

  return (
    <>
      {loading ? (
        <PageFramework />
      ) : (
        <div className="container border-2 border-red mx-auto">
          <Heading />
          <Navigation currentPath={location.pathname} className="bg-gray-500" />
          <CourseDetailes />
        </div>
      )}
    </>
  );
}

export { CourseDetailPage };
