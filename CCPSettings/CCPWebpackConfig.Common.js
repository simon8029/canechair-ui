const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackConfigHelper = require('./CCPWebpackConfig.Helper');
const WebpackMerge = require('webpack-merge');

const Paths = {
  src: path.join(process.cwd(), "src"),
  dist: path.join(process.cwd(), "dist"),
};

const Settings = WebpackMerge([
  {
    entry: {
      canechairparts: Paths.src,
    },
    output: {
      path: Paths.dist,
      filename: "[name].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "CaneChair.Parts",
      }),
    ]
  }
]);

module.exports = {
  Settings,
  Paths
};
