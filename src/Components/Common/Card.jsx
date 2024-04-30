import React from "react";
const CardComponent = ({ title, imageUrl, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mb-20">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
