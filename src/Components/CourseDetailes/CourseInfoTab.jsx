import React, { useState } from "react";

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="border border-gray-300 rounded-lg">
      <div className="flex">
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`${
              index === activeTab
                ? "bg-gray-200 text-gray-800"
                : "text-gray-500 hover:bg-gray-100"
            } py-2 px-4 rounded-l-lg focus:outline-none`}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="p-4">{children[activeTab]}</div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return <div>{children}</div>;
};

const CourseInfoTab = () => {
  return (
    <div className="container mx-auto mt-8">
      <Tab>
        <TabPane label="نظرات دوره">
          <p>This is the content of tab 1.</p>
        </TabPane>
        <TabPane label="دانلود جلسات">
          <p>This is the content of tab 2.</p>
        </TabPane>
        <TabPane label="سوالات پر تکرار">
          <p>This is the content of tab 3.</p>
        </TabPane>
      </Tab>
    </div>
  );
};

export default CourseInfoTab;
