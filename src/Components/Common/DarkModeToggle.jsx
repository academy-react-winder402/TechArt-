import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-teal-500 bg-indigo-950	cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <SunIcon className="text-yellow-400" size={10} />
      <div
        className="absolute bg-white dark:white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={!darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <MoonIcon className="ml-aouto text-yellow-400" size={5} />
    </div>
  );
}
