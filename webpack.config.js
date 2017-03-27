var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "galvani.css"
});

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'galvani.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /(node_modules|demo)/,
      }, {
        test: /\.scss$/,
        loader: extractSass.extract({
          use: [{
            loader: "css-loader",
          }, {
            loader: "sass-loader"
          }],
          fallback: "style-loader"
        })
      }
    ]
  },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".js",
      ".scss"
    ]
  },
  plugins: [
    extractSass
  ]
};
