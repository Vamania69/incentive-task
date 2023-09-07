/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        primary: "black", // primary background color
        secondary: "#111111", // secondary background color
        border: "#252525", // border color
      },
    },
  },
  plugins: [],
};
