const commonConfig = require('./webpack.config');
const DashboardPlugin = require('webpack-dashboard/plugin')
module.exports = Object.assign({}, commonConfig, {
  devServer: {
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT,
    overlay: {
      errors: true,
      warnings: true
    }
  },
  plugins: [
    new DashboardPlugin()
  ]
});
