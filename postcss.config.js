const postcssimport = require('postcss-import');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  extract: 'styles.css',
  plugins: [postcssimport({ root: 'src' }), tailwind, autoprefixer, cssnano({ preset: 'default' })],
};
