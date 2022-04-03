module.exports = {
  content: ['index.html, teste.html'],
  theme: {
    extend: {},
  },
  safelist: [{pattern: /^.*$/}],
  plugins: [
    require('flowbite/plugin')
  ],
  scripts: {
    start: 'app.js'
},
}
