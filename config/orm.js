//imports the mysql connection:
var connection = require("../config/connection.js");

/* a useful helper function for creating arrays
 of question-marks for insertion into SQL query strings:*/
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
function printQMarks (num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
    arr.push("?");
    }
    return arr.toString();
}
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

/* another helper function, for convertin json objects into
proper sql syntax: */
// - - - - - - - - - - - - - - - - - - -
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string:
    return arr.toString();
}
// - - - - - - - - - - - - - - - - - - -


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