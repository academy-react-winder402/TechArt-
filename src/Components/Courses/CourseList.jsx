import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Pagination from "../Common/Pagination";
import "react-toastify/dist/ReactToastify.css";
import { CoursesAPI } from "../../Core/Services/api/Course";
import CardComponent from "../Common/Card";

function CourseList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses(currentPage);
  }, [currentPage]);

  const fetchCourses = async (page) => {
    setLoading(true);
    try {
      const response = await CoursesAPI();
      setCourses(response?.courseFilterDtos);
      setTotalCount(response?.totalCount);
    } catch (error) {
      toast.error("Failed to fetch courses");
    }
    setLoading(false);
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
              <CardComponent
                key={course.courseId}
                author={course.author}
                date={course.date}
                title={course.title}
                imageUrl={course.tumbImageAddress}
                description={course.describe}
                price={course.price}
              />
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
