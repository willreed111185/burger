var connection = require("./connection.js");
var orm = {  
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(tableInput, inputName, inputValue) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableInput,inputName,inputValue], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(tableInput, colName, colValue, condName, condValue) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colName, colValue, condName, condValue], function(err, result) {
      console.log(result);
    });
  },
};
module.exports = orm;
