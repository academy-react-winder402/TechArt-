import React, { useState } from "react";

const courses = ["دوره ۱", "دوره ۲", "دوره ۳", "دوره ۴"];

const ButtonWithModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleReserve = (course) => {
    alert(`شما دوره ${course} را رزرو کردید!`);
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <button
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={toggleModal}
      >
        افزودن دوره
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-1/3 bg-white rounded-lg shadow-lg">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">لیست دوره‌های قابل رزرو</h2>
            </div>
            <div className="p-4">
              <ul>
                {courses.map((course, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-2 border-b"
                  >
                    <span>{course}</span>
                    <button
                      className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
                      onClick={() => handleReserve(course)}
                    >
                      رزرو
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end p-4 border-t">
              <button
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
                onClick={toggleModal}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonWithModal;
