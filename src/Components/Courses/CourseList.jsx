import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { CoursesAPI } from "../../Core/Services/api/Course";
import Pagination from "../Common/Pagination";
import "react-toastify/dist/ReactToastify.css";
import CardComponent from "../Common/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBox from "../Common/SearchBox";

function CourseList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const query = useSelector((state) => state.search.query);
  const selectedLevel = useSelector((state) => state.courseLevel.selectedLevel);

  useEffect(() => {
    fetchCourses();
  }, [currentPage, query, selectedLevel]);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await CoursesAPI(
        currentPage,
        query,
        8,
        "cost",
        "DESC",
        0,
        [],
        undefined,
        undefined,
        selectedLevel ? selectedLevel.label : undefined // ارسال levelName به API
      );
      setCourses(response?.courseFilterDtos || []);
      setTotalCount(response?.totalCount || 0);
    } catch (error) {
      toast.error("Failed to fetch courses");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  return (
    <React.Fragment>
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
                  author={course.teacherName}
                  date={course.lastUpdate}
                  title={course.title}
                  imageUrl={course.tumbImageAddress}
                  description={course.describe}
                  price={course.cost}
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
    </React.Fragment>
  );
}

export default CourseList;
