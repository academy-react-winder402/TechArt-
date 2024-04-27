import React from "react";

const BlogDetailContent = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4">
        {/* Sidebar content */}
        <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
        {/* Add your sidebar content here */}
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
