/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        pink: {
          primary: '#FF385C'
        }
      }
    },
  },
  plugins: [],
}
