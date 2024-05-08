import React, { useState, useEffect } from "react";
import PageFramework from "../Components/Common/Course&BlogDetailSkeleone";
import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import CourseDetailes from "../Components/CourseDetailes/CourseDetailes";

function CourseDetailPage() {
  const [loading, setLoading] = useState(true);

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
          <CourseDetailes />
          <Footer />
        </div>
      )}
    </>
  );
}

export { CourseDetailPage };
