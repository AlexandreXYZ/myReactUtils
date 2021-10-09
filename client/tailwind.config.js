module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
          '1/1': "100%",
          '1/2': "50%",
          '1/4': "25%",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
