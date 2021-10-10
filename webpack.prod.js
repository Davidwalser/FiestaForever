const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },

  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/, // files to exclude
        use: ['babel-loader', 'eslint-loader'],
      },
      // CSS and SASS
      {
        test: /\.(scss|css)$/, // load files that end with scss and css
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
