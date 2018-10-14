const webpack = require("webpack");

module.exports = {
  entry: [
    'promise-polyfill',
    'whatwg-fetch',
    './src/app.js'
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
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
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