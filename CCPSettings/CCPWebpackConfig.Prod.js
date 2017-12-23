
const CommonConfig = require('./CCPWebpackConfig.Common');
const WebpackConfigHelper = require('./CCPWebpackConfig.Helper');
const WebpackMerge = require('webpack-merge');

const ProductionConfig = WebpackMerge([
  WebpackConfigHelper.extractCSS({ use: "css-loader" })
]);

module.exports = WebpackMerge(CommonConfig, ProductionConfig);
