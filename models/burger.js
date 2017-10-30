var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(val, cb) {
    orm.create("burgers", "burger_name", val, function(res) {
      cb(res);
    });
  },
  updateOne: function(burger_name, cb) {
    orm.update("burgers", burger_name, 1, function(res) {
      cb(res);
    });
  }
};
// Export the database functions for the controller (catsController.js).
module.exports = burger;
