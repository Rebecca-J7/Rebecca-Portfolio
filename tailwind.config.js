/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from "tailwindcss-animated";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "word-1": "21.25em",
        "word-2": "27em",
        "word-3": "10em",
      },
      keyframes: {
        fadeDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-down": "fadeDown .7s ease-in-out",
        "fade-right": "fadeRight 0.5s ease-in-out",
      },
      boxShadow: {
        "3xl": "0px 8px 20px 8px #1C090A80;",
        "5xl": "0px 10px 50px 30px #1C090AFC;",
      },
      colors: {
        web: {
          "purple-1": "#B68DE2",
          "purple-2": "#8958EA",
          "purple-3": "#E3CBFF",
        },
      },
    },
  },
  plugins: [tailwindcssAnimated],
};
