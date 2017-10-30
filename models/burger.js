var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(val, cb) {
    orm.insertOne("burgers", "burger_name", val, function(res) {
      cb(res);
    });
  },
  updateOne: function(burger_name, cb) {
    orm.updateOne("burgers", burger_name, 1, function(res) {
      cb(res);
    });
  }
};
module.exports = burger;
