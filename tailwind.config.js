const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      brand: {
        default: colors.red[900],
        // background: colors.blue[600],
        dark: colors.black,
        light: colors.white
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
