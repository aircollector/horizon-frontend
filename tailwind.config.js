/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "my-blue": "#1b53ba",
        "my-red": "#e3350d",
        "basic-blue": "#0f156e",
        "footer-blue": "#2b364f",
      },
    },
  },
  plugins: [],
};
