try {
  var config = require('./dev.js');
} catch(e) {
  var config = {};
}

var getVal = function(key) {
  return process.env[key] || config[key]
};

module.exports = {
  secretOne: getVal('SECRET_ONE'),
  secretTwo: getVal('SECRET_TWO'),
};
