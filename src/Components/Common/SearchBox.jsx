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
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="w-72 px-4 lg:my-1 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400 transition duration-300"
      />
      <button onClick={handleSearch}></button>
    </div>
  );
};

export default SearchBox;
