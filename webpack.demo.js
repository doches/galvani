var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "galvani.css",
});

module.exports = {
  entry: './src/demo.tsx',
  output: {
    filename: 'demo.js',
    path: path.resolve(__dirname, 'demo')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFileName: "tsconfig.demo.json"
        }
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
    new HtmlWebpackPlugin({
      title: "Galvani"
    }),
    extractSass
  ],
  devServer: {
    clientLogLevel: "warning",
    compress: false,
    contentBase: path.join(__dirname, "src")
  }
};
