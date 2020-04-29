const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "docs"),
    historyApiFallback: true,
  },
  plugins: [new HtmlWebpackPlugin()],
};
