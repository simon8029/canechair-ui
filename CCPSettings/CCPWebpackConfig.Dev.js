const CommonConfig = require('./CCPWebpackConfig.Common');
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
  }
]);

module.exports = WebpackMerge(CommonConfig, DevelopmentConfig);
