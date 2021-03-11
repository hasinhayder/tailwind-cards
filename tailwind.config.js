const colors = require('tailwindcss/colors')
module.exports = {
  purge:['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        fuchsia:colors.fuchsia,
        cyan:colors.cyan,
        emerald:colors.emerald,
        teal:colors.teal,
        orange:colors.orange,
      },
      maxHeight:{
        116:"29rem", /*464px*/
        125:"31.25rem", /*464px*/
        140:"35rem", /*464px*/
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
