
const CommonConfig = require('./CCPWebpackConfig.Common');
const WebpackMerge = require('webpack-merge');

const ProductionConfig = WebpackMerge([]);

module.exports = WebpackMerge(CommonConfig, ProductionConfig);
