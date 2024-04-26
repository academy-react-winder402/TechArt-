import React from "react";

const CourseDetailContent = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4 border-2">
        {/* Sidebar content */}
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
