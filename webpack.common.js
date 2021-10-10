const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: path.resolve(__dirname, './src/js/index.js'),
  // 2
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   filename: 'bundle.js',
  // },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // 3
  // The /dist folder will be used to serve our application
  // to the browser
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  // 4
  // Add plugins for webpack here
  plugins: [
    new CleanWebpackPlugin,
    new HtmlWebpackPlugin({
      title: 'Home',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      template: path.resolve(__dirname, './src/about.html'),
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Doggos',
      template: path.resolve(__dirname, './src/doggos.html'),
      filename: 'doggos.html',
    }),
  ],
};
