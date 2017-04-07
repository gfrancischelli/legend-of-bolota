const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./game/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "game"),
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },
  devServer: {
    publicPath: '/dist/'
  }
}
