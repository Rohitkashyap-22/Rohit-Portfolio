/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enables dark mode toggling via 'dark' class
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#00d4ff', // Custom blue accent for links/buttons
          500: '#00b8ff',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], // Matches Google Fonts import
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards', // Custom for Framer Motion synergy
      },
    },
  },
  plugins: [],
}