import React from "react";

const CardComponent = ({
  author,
  date,
  title,
  imageUrl,
  description,
  price,
}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mb-20 h-">
      <img
        className="relative w-full z-0 bg-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="absolute border-yellow-200 w-24 bg-amber-500 rounded-3xl text-start shadow-md -mt-10 lg:z-10">
          <div className="pr-3">
            <p className="text-gray-700 text-xs">{author}</p>
            <p className="text-gray-700 text-xs">{date}</p>
          </div>
        </div>
        <div className="font-bold text-xl mt-4 mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base">{price}</p>
      </div>
    </div>
  );
};

export default CardComponent;
