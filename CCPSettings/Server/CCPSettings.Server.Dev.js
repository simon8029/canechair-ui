process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// const
// configureMongoose = require('./config/mongoose'),
// configurePassport = require('./config/passport'),
// db = configureMongoose(),
// passport = configurePassport();
const Express = require('express');
import Path from 'path';
import Open from 'open';

/* eslint-disable no-console */
const
  App = Express(),
  Port = 8029;

App.get('/', (req, res) => {
  res.sendFile(Path.join(__dirname, '../../src/index.html'));
});

App.listen(Port, (err) => {
  if (err) {
    console.log(err);
  } else {
    Open('http://localhost:' + Port);
  }
});

module.exports = App;

console.log(`[dev-mode] Server running at http://localhost:${Port}`);
