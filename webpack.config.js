const path = require('path')

module.exports = {
  entry: "./site/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main_bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}