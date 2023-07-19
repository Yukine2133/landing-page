/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF5202",
        "dark-blue": "#262543",
        "light-gray": "#5C5555",
      },
      fontFamily: {
        lemon: ["Lemon/Milk light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
