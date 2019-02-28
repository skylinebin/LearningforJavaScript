module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  module: {
    rules: [{
      // 此规则表示，除了第三方的js，所有的js都通过 babel-loader 进行编译
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  },
  mode: 'development'
}