import React from "react";
import Skeleton from "react-loading-skeleton";

const MainContent = () => {
  return (
    <div className="flex-1 p-4 shadow-md border-2 rounded-md overflow-hidden relative">
      {/* Picture Div */}
      <div className="w-full h-48 bg-gray-100 rounded-t-md mb-4">
        {/* Your picture content goes here */}
        <Skeleton height={"100%"} />
      </div>

      {/* Mini Content Div */}
      <div className="p-4 bg-white rounded-b-md">
        {/* Mini content goes here */}
        <Skeleton height={120} />
      </div>
    </div>
  );
};

const BottomCard = () => {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-md p-4 border-2">
      {/* Card content goes here */}
      <Skeleton height={160} />
    </div>
  );
};

const PageFramework = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 shadow-md rounded-md">
        {/* Sidebar content goes here */}
        <Skeleton height={400} />
      </div>
      <div className="flex-1">
        {/* Main Content */}
        <MainContent />

        {/* Bottom Cards */}
        <div className="w-full flex justify-between mt-8 p-4">
          <BottomCard />
          <BottomCard />
          <BottomCard />
        </div>
      </div>
    </div>
  );
};

export default PageFramework;
