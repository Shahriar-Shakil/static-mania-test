/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      green: '#1AD993',
      aqua: '#ABFFE0',
      blue: {
        500: '#503AE7',
        800: '#3E2DB2',
      },
      purple: '#832BC1',
      black: '#14142B',
      gray: '#AFB0B9',
      offWhite: '#F4F2FF',
      white: '#ffffff',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
