import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddCourseFavorite } from "../../Core/Services/api/CourseBookmark";

const BookmarkButton = ({ courseId, successMessage, errorMessage }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleClick = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("لطفاً ابتدا وارد حساب کاربری خود شوید.");
      return;
    }

    const obj = {
      courseId: courseId,
    };

    try {
      const response = await AddCourseFavorite(obj);
      if (response?.status === 200) {
        setBookmarked(!bookmarked);
        toast.success(successMessage);
      } else {
        toast.error(errorMessage);
      }
    } catch (error) {
      toast.error("خطایی رخ داد: " + error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <button
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          bookmarked ? "bg-yellow-400 text-white" : "bg-white text-gray-700"
        }`}
        onClick={handleClick}
        aria-label={
          bookmarked
            ? "برداشتن از نشان‌گذاری‌ها"
            : "اضافه کردن به نشان‌گذاری‌ها"
        }
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
        <span>{bookmarked ? "نشان‌گذاری شد" : "نشان‌گذاری"}</span>
      </button>
    </>
  );
};

export default BookmarkButton;
