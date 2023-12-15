/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "layouts/*.{html,js,svg}",
    "layouts/**/*.{html,js,svg}",
    "layouts/**/**/*.{html,js,svg}",
    "layouts/**/**/**/*.{html,js,svg}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

