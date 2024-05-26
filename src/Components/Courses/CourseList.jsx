import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Pagination from "../Common/Pagination";

const API_URL = "/Home/GetCoursesWithPagination";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // تعریف totalCount با useState
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCourses(currentPage);
  }, [currentPage]);

  const fetchCourses = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        params: {
          PageNumber: page,
          RowsOfPage: 8,
          SortingCol: "cost",
          SortType: "DESC",
          TechCount: 0,
        },
      });
      setCourses(response.data.courseFilterDtos || []); // اطمینان از اینکه همیشه یک آرایه است
      setTotalCount(response.data.totalCount || 0); // به‌روزرسانی totalCount
    } catch (error) {
      toast.error("Error fetching courses: " + error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="courses">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course.courseId} className="course">
                <h2>{course.title}</h2>
                <p>{course.describe}</p>
                <img src={course.tumbImageAddress} alt={course.title} />
                {/* سایر جزئیات دوره */}
              </div>
            ))
          ) : (
            <p>No courses available.</p>
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
