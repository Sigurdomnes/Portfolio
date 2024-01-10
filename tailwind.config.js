/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.jsx",
    "./src/*.js"
  ],
  theme: {
    colors: {
      theme: {
        500: '#1f2125',
      },
      accent: {
        500: '#814140',
      }
    },
    extend: {},
  },
  plugins: [],
}

