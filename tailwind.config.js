/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* For WebKit browsers */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* For other browsers */
          "-ms-overflow-style": "none", // IE 10+
          "scrollbar-width": "none", // Firefox
        },
        ".scrollbar-default": {
          /* Reset to show scrollbar */
          "&::-webkit-scrollbar": {
            display: "block",
          },
          "-ms-overflow-style": "auto", // IE 10+
          "scrollbar-width": "auto", // Firefox
        },
      });
    },
  ],
};
