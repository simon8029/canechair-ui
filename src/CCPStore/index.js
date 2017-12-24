if (process.env.NODE_ENV === 'production') {
  module.exports = require('./CCPStoreProduction')
} else {
  module.exports = require('./CCPStoreDevelopment')
}
