//"beginning" of the entire app(run-wise):

//dependencies:
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "parkpass",
  database: "burger_db"
});