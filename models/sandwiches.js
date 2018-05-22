
var orm = require("../config/orm.js");

var sandwich = {
  all: function(cb) {
    orm.all("sandwiches", function(res) {
      cb(res);
    });
  },
  
  create: function(cols, vals, cb) {
    orm.create("sandwiches", cols, vals, function(res) {
      cb(res);
    });
  }
};

module.exports = sandwich;
