/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        darkBg: "#1E2021",
        lightGray: "#575A58",
        darkGray: "#323339",
        clearOrange: "#CC6613",
        pastelGreen: "#A0BA85",
      },
    },
  },
  plugins: [],
};
