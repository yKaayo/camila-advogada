/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#57585f',
        'dark-red': '#a60000',
        'yellow': '#dfd603',
        'green': '#00bb2d'
      },
      fontFamily: {
        sans: ['"Poppins", sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

