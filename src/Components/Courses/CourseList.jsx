import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { CoursesAPI } from "../../Core/Services/api/Course";
import Pagination from "../Common/Pagination";
import "react-toastify/dist/ReactToastify.css";
import CardComponent from "../Common/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CourseList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const { query } = useSelector((state) => state.search);
  const selectedLevelId = useSelector(
    (state) => state.filterCourse.selectedLevelId
  );

  useEffect(() => {
    fetchCourses();
  }, [currentPage, query, selectedLevelId]);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await CoursesAPI(currentPage, query, selectedLevelId);
      setCourses(response?.courseFilterDtos || []);
      setTotalCount(response?.totalCount || 0);
    } catch (error) {
      toast.error("دریافت دوره‌ها با مشکل مواجه شد");
    }
    setLoading(false);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  return (
    <div>
      {loading ? (
        <p>در حال بارگذاری...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.length > 0 ? (
            courses.map((course) => (
              <Link
                key={course.courseId}
                to={`/coursedetail/${course.courseId}`}
              >
                <CardComponent
                  author={course.author}
                  date={course.date}
                  title={course.title}
                  imageUrl={course.tumbImageAddress}
                  description={course.describe}
                  price={course.price}
                />
              </Link>
            ))
          ) : (
            <p>دوره‌ای موجود نیست.</p>
          )}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalCount / 8)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default CourseList;
