const Webpack = require("webpack");
const CommonConfig = require('./CCPWebpackConfig.Common');
const WebpackConfigHelper = require('./CCPWebpackConfig.Helper');
const WebpackMerge = require('webpack-merge');
const glob = require('glob');

const ProductionConfig = WebpackMerge([
  {
    performance: {
      hints: "warning",
      maxEntrypointSize: 50000,
      maxAssetSize: 450000
    }
  },
  WebpackConfigHelper.extractCSS({ use: ["css-loader", WebpackConfigHelper.autoprefix()] }),
  WebpackConfigHelper.purifyCSS({ paths: glob.sync(`${CommonConfig.Paths.src}/**/*.js`, { nodir: true }) }),
  WebpackConfigHelper.loadImages({ options: { limit: 15000, name: "[name].[ext]" } }),
  WebpackConfigHelper.generateSourceMaps({ type: "source-map" }),
  WebpackConfigHelper.extractBundles([{ name: "vendor", minChunks: ({ resource }) => /node_modules/.test(resource) }]),
  WebpackConfigHelper.clean(CommonConfig.Paths.dist),
  WebpackConfigHelper.attachRevision(),
  WebpackConfigHelper.uglifyJavaScript(),
  WebpackConfigHelper.minifyCSS({ options: { discardComments: { removeAll: true }, safe: true } }),
  WebpackConfigHelper.setFreeVariable("process.env.NODE_ENV", "production")
]);

module.exports = WebpackMerge(CommonConfig.Settings, ProductionConfig);
