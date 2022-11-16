/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        first: ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
