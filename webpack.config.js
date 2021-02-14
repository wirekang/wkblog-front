/* eslint-disable */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry:  path.join(__dirname, 'src', 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devtool:'eval-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules:[
      path.join(__dirname,"src"),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify:
        mode === 'production' ? {
          collapseWhitespace: true,
          removeComments: true,
        } : false,
    }),
    new CleanWebpackPlugin.CleanWebpackPlugin(),
  ],
};
