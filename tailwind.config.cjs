/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#191817',
        'secondary-dark': '#21201E',
        'primary-red': '#F8242F',
        'secondary-red': '#F8242F',
        'primary-grey': '#F5F6F1'
      },
      letterSpacing: {
        wide: '0.3em',
      }
    },
  },
  plugins: [],
}
