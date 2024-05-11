import React from "react";
import Newest from "../Common/NewestItems";
import SearchBox from "../Common/SearchBox";
import BlogDetailsFilter from "./BlogDetailsFilter";

const BlogDetailContent = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4">
        {/* Sidebar content */}
        <h2 className="text-lg font-semibold mb-4"></h2>
        {/* Add your sidebar content here */}
        <SearchBox />
        <BlogDetailsFilter />
        <Newest />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        {/* Main content */}
        {children}
      </div>
    </div>
  );
};

export default BlogDetailContent;
