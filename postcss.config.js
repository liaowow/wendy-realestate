/* 
instruct PostCSS to autoprefix and minimize our CSS when in production mode, otherwise don’t do anything
*/

const postcssPresetEnv = require('postcss-preset-env')

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      postcssPresetEnv({
        browsers: ['> 1%']
      }),
      require('cssnano')
    ]
  }
  return
}

module.exports = {}