/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bone: {
          100: "#DEDEDE",
        },
      },
    },
  },
  plugins: [],
};
