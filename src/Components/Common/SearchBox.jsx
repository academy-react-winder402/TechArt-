import React, { useState } from "react";
import http from "../../Core/interceptor/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      try {
        setLoading(true);
        setError(null);

        const response = await http.get("/Home/GetCoursesWithPagination", {
          params: {
            PageNumber: 1,
            RowsOfPage: 10,
            SortingCol: "Active",
            SortType: "DESC",
            Query: query,
            TechCount: 0,
          },
        });

        const coursesData = response.courseFilterDtos || [];
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
        toast.error("Error: " + error?.message);
        setError("Unable to fetch courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a search query.");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex">
        <button
          type="submit"
          className="mr-2 h-10 mt-1 rounded-r-lg bg-blue-950 text-white px-2 text-xs"
        >
          Search
        </button>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="min-w-4 flex-1 px-4 lg:my-1 lg:py-2 rounded-l-lg border border-gray-200 focus:outline-none focus:border-blue-400 transition duration-300"
        />
      </form>
      {/* <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {courses &&
          courses.length > 0 &&
          courses.map((course) => (
            <div key={course.courseId}>
              <h2>{course.title}</h2>
              <p>{course.describe}</p>
            </div>
          ))}
        {courses && courses.length === 0 && <p>No courses found.</p>}
      </div> */}
    </div>
  );
};

export default SearchBox;
