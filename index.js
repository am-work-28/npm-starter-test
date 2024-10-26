const math = require('./src/math');
const string = require('./src/string');
const array = require('./src/array');

module.exports = {
  ...math,
  ...string,
  ...array
};