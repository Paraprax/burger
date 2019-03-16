//"beginning" of the entire app(run-wise):

//dependencies:
var mysql = require("mysql");
var connection;

//defines the connection:
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "parkpass",
    database: "burger_db"
  });
};

//makes the connection:
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export for other files to access(eg. the ORM):
module.exports = connection;