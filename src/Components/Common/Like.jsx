import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LikeCourse,
  DisableLikeCourse,
} from "../../Core/Services/api/CourseLike";

const LikeButton = ({ courseId }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // فرض کنید تابعی برای بررسی لایک بودن دوره دارید
    const checkIfLiked = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        // وضعیت اولیه لایک را بررسی کنید
        // const initialLikedStatus = await getLikedStatus(courseId);
        // setLiked(initialLikedStatus);
      }
    };

    checkIfLiked();
  }, [courseId]);

  const handleClick = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("لطفاً ابتدا وارد حساب کاربری خود شوید.");
      return;
    }

    try {
      if (!liked) {
        const response = await LikeCourse(courseId);
        if (response?.success) {
          setLiked(true);
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      } else {
        const response = await DisableLikeCourse(courseId);
        if (response?.success) {
          setLiked(false);
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      }
    } catch (error) {
      toast.error("خطایی رخ داد: " + error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <button
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 ${
          liked ? "bg-blue-500 text-white" : "bg-white text-gray-700"
        }`}
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          style={{ paddingRight: "4px" }}
        >
          <path
            fillRule="evenodd"
            d={
              liked
                ? "M3.172 3.172a4 4 0 015.656 0L10 4.343l1.172-1.171a4 4 0 015.656 5.656L10 16.657l-6.828-6.829a4 4 0 010-5.656z"
                : "M10 3.172a4 4 0 00-5.656 5.656l6.828 6.828 6.828-6.828A4 4 0 0010 3.172z"
            }
            clipRule="evenodd"
          />
        </svg>
        <span>{liked ? "Liked" : "Like"}</span>
      </button>
    </>
  );
};

export default LikeButton;
