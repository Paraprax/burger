//imports the mysql connection:
var connection = require("../config/connection.js");

//ORM object for functions running sql-statement queries:
var orm = {
    selectAll: function() {
        console.log("Select all burgers");
    },
    insertOne: function() {
        console.log("Add a new burger");
    },
    updateOne: function() {
        console.log("Update a burger");
    }
}; //TODO give the above more functionality

// exports the ORM object for the burger.js model to access:
module.exports = orm;