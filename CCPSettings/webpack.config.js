const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const Paths = {
  app: path.join(process.cwd(), "src"),
  build: path.join(process.cwd(), "dist"),
};
// const commonConfig = {
//   entry: {
//     canechairparts: Paths.app,
//   },
//   output: {
//     path: Paths.build,
//     filename: "[name].js",
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "CaneChair.Parts",
//     }),
//   ]
// };

// const productionConfig = () => commonconfig;
// const developmentConfig = () => {
//   const devConfig = {
//     devServer: {
//       stats: "errors-only",
//       host: process.env.HOST,
//       port: process.env.PORT
//     }
//   };

//   return Object.assign({}, commonConfig, devConfig);
// };

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
  ]
};
