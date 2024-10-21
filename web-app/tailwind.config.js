/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx, tx, tsx}', './public/index.html'],
  theme: {
    extend: {
      zIndex: {
        '-1':'-1',
      }
    },
  },
  plugins: [],
};

