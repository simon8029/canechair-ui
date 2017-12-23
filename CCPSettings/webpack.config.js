const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const Paths = {
  app: path.join(process.cwd(), "src"),
  build: path.join(process.cwd(), "dist"),
};

module.exports = {
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
  ],
};
