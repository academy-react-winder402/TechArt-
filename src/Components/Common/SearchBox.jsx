import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchCourses } from "../../Redux/SearchSlice";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const {
    courses = [],
    loading = false,
    error = null,
  } = useSelector((state) => state.search || {});

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearchCourses(query));
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
        {courses.length > 0
          ? courses.map((course) => (
              <div key={course.id}>
                <h2>{course.name}</h2>
                <p>{course.description}</p>
              </div>
            ))
          : !loading && <p>No courses found</p>}
      </div>
    </div>
  );
};

export default SearchBox;
