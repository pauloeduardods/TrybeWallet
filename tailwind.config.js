module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      'xss': '100px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}