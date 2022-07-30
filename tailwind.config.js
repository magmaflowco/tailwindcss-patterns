module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#A24569'
        },
      }
    },
  },
  plugins: [require('./src/index')],
}
