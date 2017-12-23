const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackConfigHelper = require('./CCPWebpackConfig.Helper');
const WebpackMerge = require('webpack-merge');

const Paths = {
  app: path.join(process.cwd(), "src"),
  build: path.join(process.cwd(), "dist"),
};

module.exports = WebpackMerge([
  {
    entry: {
      canechairparts: Paths.app,
    },
    output: {
      path: Paths.build,
      filename: "[name].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "CaneChair.Parts",
      }),
    ]
  }
]);
