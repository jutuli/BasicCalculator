/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        darkBg: "#1E2021",
        lightGray: "#4F5E55",
        darkGray: "#272B3F",
        clearOrange: "#CF6E21",
        pastelGreen: "#65B70D",
      },
    },
  },
  plugins: [],
};
