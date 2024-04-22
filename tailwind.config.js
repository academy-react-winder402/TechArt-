/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  dakMode: "class",
  theme: {
    extend: {
      BackgroundImage: {},
      colors: {
        dark: "#232A3C",
        medium: "293245",
      },
    },
  },
  plugins: [],
};
