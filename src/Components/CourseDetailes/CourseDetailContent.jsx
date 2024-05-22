import React from "react";
import AcardeonCategory from "../Common/AcardeonCategory";
import Newest from "../Common/NewestItems";
import SearchBox from "../Common/SearchBox";
import CourseDetailFilter from "./CourseDetailFilter";

const CourseDetailContent = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4  p-4 ">
        <div className="sticky top-0">
          {/* Sidebar content */}
          <SearchBox />
          <AcardeonCategory />
          <Newest />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4 ">
        {/* Main content */}
        {children}
      </div>
    </div>
  );
};

export default CourseDetailContent;
