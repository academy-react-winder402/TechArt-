import React, { useState } from "react";
import CommentForm from "../Comment/textCm";
import VoiceCommentForm from "../Comment/VoiceCm";

const BlogDetailCmTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-white shadow-md rounded-md">
      <div className="flex">
        <div
          className={`cursor-pointer py-2 px-4 ${
            activeTab === 0
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick(0)}
        >
          صدا
        </div>
        <div
          className={`cursor-pointer py-2 px-4 ${
            activeTab === 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick(1)}
        >
          متن
        </div>
      </div>
      <div className="p-4">
        {activeTab === 0 && (
          <div className=" ">
            <h2 className="text-xl font-bold mb-2 py-4 text-gray-600">
              از شنیدن نظرتان خوشحال میشویم
            </h2>
            {/* <p className="text-gray-700 mb-4">This is the content of Tab 1.</p> */}
            <VoiceCommentForm />
          </div>
        )}
        {activeTab === 1 && (
          <div className="">
            <CommentForm />
            {/* <h2 className="text-xl font-bold mb-2">نظر</h2>
            <p className="text-gray-700">This is the content of Tab 2.</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetailCmTab;
