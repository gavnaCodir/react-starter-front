const postcssSorting = require('postcss-sorting');
const cssnano = require('cssnano');
module.exports = {
  plugins: [
    require('autoprefixer'),
    postcssSorting({
      'properties-order': 'alphabetical'
    }),
    cssnano({
      preset: 'default',
    })
  ]
}
