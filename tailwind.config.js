/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#182C4F', //#112138? Dark navy blue
          'secondary': '#4A668D', // Light washed out blue
          'accent': '#21314F', // Dark washed out blue
          'neutral': '#eee', // Light gray
          'base-100': '#fff', // White
          'info': '#EB7A4A', // Light Orange
          'success': '#20C743', // Light green
          'warning': '#D7A64A', // Dark yellow
          'error': '#C7243D', // Light red
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};