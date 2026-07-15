/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "apple-black": "#000000",
        "apple-dark": "#1d1d1f",
        "apple-gray": "#f5f5f7",
        "apple-gray-dark": "#86868b",
        "apple-blue": "#0071e3",
        "apple-blue-hover": "#0077ed",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1024px",
        wide: "1440px",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
