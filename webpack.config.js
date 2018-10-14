const webpack = require("webpack");

module.exports = {
  entry: [
    './src/js/app.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
              loader: 'babel-loader',
              options: {
                presets: ['babel-preset-env', 'babel-preset-stage-2']
              }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: __dirname + '/dist/js/',
    publicPath: '/dist/js/',
    filename: 'app.bundle.js'
  }
};