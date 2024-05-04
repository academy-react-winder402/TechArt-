import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
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
      >
        <path
          fillRule="evenodd"
          d={
            liked
              ? "M10 3.82a2.36 2.36 0 00-1.25.37l-.14.09a.75.75 0 00-.36.64v.18l.55 5.73c0 .17-.04.3-.14.39-.1.1-.23.15-.4.15l-.13-.01c-.28 0-.47-.13-.56-.4-.02-.08-.05-.16-.08-.24l-.38-3.25-1.63-1.52a2.5 2.5 0 00-3.5 3.58l3.56 3.31a.75.75 0 001.04 0l3.56-3.31a2.5 2.5 0 000-3.58l-1.63-1.52-.38 3.25c-.02.08-.06.16-.08.24-.09.27-.28.4-.56.4-.14 0-.27-.05-.4-.15-.1-.09-.14-.22-.14-.39l.55-5.73v-.18a.75.75 0 00-.36-.64l-.14-.09a2.36 2.36 0 00-1.25-.37z"
              : "M10 3.82a2.36 2.36 0 00-1.25.37l-.14.09a.75.75 0 00-.36.64v.18l.55 5.73c0 .17-.04.3-.14.39-.1.1-.23.15-.4.15l-.13-.01c-.28 0-.47-.13-.56-.4-.02-.08-.05-.16-.08-.24l-.38-3.25-1.63-1.52a2.5 2.5 0 00-3.5 3.58l3.56 3.31a.75.75 0 001.04 0l3.56-3.31a2.5 2.5 0 000-3.58l-1.63-1.52-.38 3.25c-.02.08-.06.16-.08.24-.09.27-.28.4-.56.4-.14 0-.27-.05-.4-.15-.1-.09-.14-.22-.14-.39l.55-5.73v-.18a.75.75 0 00-.36-.64l-.14-.09a2.36 2.36 0 00-1.25-.37z"
          }
          clipRule="evenodd"
        />
      </svg>
      <span>{liked ? "Liked" : "Like"}</span>
    </button>
  );
};

export default LikeButton;
