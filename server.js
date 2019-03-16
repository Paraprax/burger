//dependencies:
var express = require("express");
var exphbs = require("express-handlebars");

//sets the port:
var PORT = process.env.PORT || 8080

//instantiates the express app:
var app = express();

//serves static content(eg. CSS stuff) from the "public" directory:
app.use(express.static("public"));

//parses application body:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sets handlebars as the default templating engine:
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view enginge", "handlebars");

/* imports our routes from burgerController.js
and gives the server access to them:*/
var routes = require("./controllers/burgerController.js");
app.use(routes);

//starts our server listening for requests:
app.listen(PORT, function() {
    // && logs (server-side) when our server has started
    console.log("Green light! Server listening on: http://localhost:" + PORT);
  });

//"End" of our entire app.