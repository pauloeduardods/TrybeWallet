module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // maxWidth: {
    //   'xss': '100px',
    //   '7x1': '80rem',
    //   'md': '28rem'
    // },
    extend: {
      maxWidth: {
        'xss': '100px',
        'mdd': '200px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}