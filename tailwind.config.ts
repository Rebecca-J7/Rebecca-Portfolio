/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}", // paths to your HTML/JS/TSX files
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fade: "fade 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
