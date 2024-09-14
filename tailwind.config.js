const flowbite = require("flowbite-react/tailwind");
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'serif'],
      },
      colors: {
        primary: colors.blue[600],
        lightPrimary: colors.blue[500],
        secondary: colors.yellow[600],
        error: colors.red[500],
        success: colors.green[600],
        successLight: colors.green[50],
        warning: colors.orange[600],
        info: '#FB8A00',
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

