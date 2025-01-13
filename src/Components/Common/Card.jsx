import React from "react";
import image from "../../assets/Images/default.jpg";

// تابع کمکی برای محدود کردن تعداد کلمات
// const truncateText = (text, maxWords) => {
//   const words = text.split(" ");
//   if (words.length > maxWords) {
//     return words.slice(0, maxWords).join(" ") + "...";
//   }
//   return text;
// };

const CardComponent = ({
  author,
  date,
  title,
  imageUrl,
  description,
  price,
}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mb-20">
      {imageUrl ? (
        <img
          className="w-full h-48 object-cover" // ارتفاع ثابت و برش تصویر
          src={imageUrl}
          alt={title}
        />
      ) : (
        <img
          className="w-full h-48 object-cover" // ارتفاع ثابت و برش تصویر
          src={image}
          alt="Default"
        />
      )}

      <div className="px-6 py-4">
        <div className="absolute border-yellow-200 w-24 bg-amber-500 rounded-3xl text-start shadow-md -mt-10 lg:z-10">
          <div className="pr-3">
            {/* <p className="text-gray-700 text-xs">{author}</p> */}
            <p className="text-gray-700 text-xs">{date}</p>
          </div>
        </div>
        <div className="font-bold text-xl mt-4 mb-2">{title}</div>
        {/* محدود کردن تعداد کلمات در description */}
        <p className="text-gray-700 text-base">
          {/* {truncateText(description, 5)} */}
          {description}
        </p>
        <p className="text-gray-700 text-base">{price} ریال</p>
      </div>
    </div>
  );
};

export default CardComponent;
