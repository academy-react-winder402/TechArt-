import React from "react";
import SearchBox from "../Common/SearchBox";
import CourseDetailFilter from "./CourseDetailFilter";

const CourseDetailContent = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4 border-2">
        {/* Sidebar content */}
        <SearchBox />
        <CourseDetailFilter />
        Sidebar Content
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4 border-2">
        {/* Main content */}
        {children}
      </div>
    </div>
  );
};

export default CourseDetailContent;
