/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FDBA93',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F2AB91',

          secondary: '#C2F2ED',

          accent: '#FF8E79',

          neutral: '#0f172a',

          'base-100': '#10253E',

          info: '#96AEFE',

          success: '#51C083',

          warning: '#FFC53E',

          error: '#D94141',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
