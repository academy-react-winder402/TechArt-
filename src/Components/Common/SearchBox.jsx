import React, { useState } from "react";
import http from "../../Core/interceptor/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setQueryR } from "../../Redux/SearchSlice";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    dispatch(setQueryR(query));
  };

  return (
    <div className="relative">
      <div className="flex">
        <button
          type="button"
          className="mr-2 h-10 mt-1 rounded-r-lg bg-blue-950 text-white px-2 text-xs"
          onClick={() => handleSearch()}
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
      </div>
    </div>
  );
};

export default SearchBox;
