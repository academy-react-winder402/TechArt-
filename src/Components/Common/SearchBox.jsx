// SearchBox.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchCourses, setQuery } from "../../Redux/SearchSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const { query, courses, loading, error } = useSelector(
    (state) => state.search
  );

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      dispatch(fetchSearchCourses(query));
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
      <div>
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
      </div>
    </div>
  );
};

export default SearchBox;
