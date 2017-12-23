const commonConfig = require('./webpack.config');
module.exports = Object.assign({}, commonConfig, {
  devServer: {
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT
  }
});
