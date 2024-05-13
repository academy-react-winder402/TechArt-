import React, { useState } from "react";

const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative 	inline-block text-right">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Profile
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-indigo-950 ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="/editprofile"
              className="block px-4 py-2 text-sm text-yellow-500 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              ادیت پروفایل
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-yellow-500 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              تغییر پسوورد
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-yellow-500 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              خروج
            </a>
            <a
              href="/dashboard"
              className="block px-4 py-2 text-sm text-yellow-500 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              داشبورد
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
