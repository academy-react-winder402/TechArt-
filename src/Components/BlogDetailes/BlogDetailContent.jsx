import React from "react";
import Newest from "../Common/NewestItems";
import SearchBox from "../Common/SearchBox";
import BlogDetailsFilter from "./BlogDetailsFilter";

const BlogDetailContent = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4">
        <div className="sticky top-0">
          {/* Sidebar content */}
          <SearchBox />
          <BlogDetailsFilter />
          <Newest />
        </div>
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
