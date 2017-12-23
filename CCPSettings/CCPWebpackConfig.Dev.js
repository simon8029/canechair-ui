const CommonConfig = require('./CCPWebpackConfig.Common');
const WebpackConfigHelper = require('./CCPWebpackConfig.Helper');
const WebpackMerge = require('webpack-merge');

const DevelopmentConfig = WebpackMerge([
  {
    devServer: {
      stats: "errors-only",
      host: process.env.HOST,
      port: process.env.PORT,
      overlay: {
        errors: true,
        warnings: true
      }
    }
  },
  WebpackConfigHelper.loadCSS(),

]);

module.exports = WebpackMerge(CommonConfig, DevelopmentConfig);
