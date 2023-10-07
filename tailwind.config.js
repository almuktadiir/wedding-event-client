/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
    wedding: ['Dancing Script', 'cursive'],
    wedding2: ['Montserrat', 'sans-serif']
  },
    extend: {},
  },
  plugins: [require("daisyui")],
}

