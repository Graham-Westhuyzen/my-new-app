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
        // mytheme: {
        //   primary: '#F2AB91',

        //   secondary: '#C2F2ED',

        //   accent: '#FF8E79',

        //   neutral: '#0f172a',

        //   'base-100': '#10253E',

        //   info: '#96AEFE',

        //   success: '#51C083',

        //   warning: '#FFC53E',

        //   error: '#D94141',
        // },
        mytheme: {
          primary: '#182F51',
          secondary: '#4A668D',
          accent: '#21314F',
          neutral: '#eee',
          'base-100': '#fff',
          info: '#EB7A4A',
          success: '#20C743',
          warning: '#D7A64A',
          error: '#C7243D',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
