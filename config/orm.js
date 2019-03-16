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

//on to the actual ORM....

//ORM object for functions running sql-statement queries:
var orm = {
    selectAll: function(tableInput, cb) {
        //build the query string:
        var queryString = "SELECT * FROM " + tableInput + ";";
        //hit the db with our query:
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
        console.log("Select all burgers"); //shows the overall function ran
    },
    insertOne: function(table, columns, vals, cb) {
        //build the query string:
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
        
        //hit the db with our query:
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
        console.log("Add a burger"); //shows the overall function ran
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
        console.log("Update a burger");
    }
};

// exports the ORM object for the burger.js model to access:
module.exports = orm;