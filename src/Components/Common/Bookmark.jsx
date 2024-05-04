import React, { useState } from "react";

const BookmarkButton = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleClick = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <button
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 ${
        bookmarked ? "bg-yellow-400 text-white" : "bg-white text-gray-700"
      }`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d={
            bookmarked
              ? "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-3-5 3V4z"
              : "M4 2a2 2 0 00-2 2v14l8-4 8 4V4a2 2 0 00-2-2H4zm6 3a2 2 0 012 2v11.5l-2.5-1.5L6 16.5V7a2 2 0 012-2z"
          }
          clipRule="evenodd"
        />
      </svg>
      <span>{bookmarked ? "Bookmarked" : "Bookmark"}</span>
    </button>
  );
};

export default BookmarkButton;
