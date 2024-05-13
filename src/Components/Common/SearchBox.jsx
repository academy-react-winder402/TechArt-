import React, { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", query);
  };

  return (
    <div className="relative">
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="min-w-4 flex-1 px-4 lg:my-1 lg:py-2 rounded-r-lg border border-gray-200 focus:outline-none focus:border-blue-400 transition duration-300"
        />
        <button
          onClick={handleSearch}
          className="ml-2 h-10 mt-1 rounded-l-lg bg-blue-950	 text-white px-2  text-xs "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
