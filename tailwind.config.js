const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#3E4B50',
      },
      fontFamily: {
        header: ['lores-9-wide-bold-alt-oaklan', defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
