//dependencies:
var express = require("express");
var burger = require("../models/burger.js"); //<- imports the burger-model to use its db functions from the orm

//instantiates a router:
var router = express.Router();

//all our routes for interaction with this app:
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = { //<- creates an object to send data to our handlebars pages(which require objects)
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("api/burgers", function(req, res){
    burger.create(
    [
        "burger_name", "devoured"
    ], 
    [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId }); //sends back new burger's id
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
  
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) { 
            return res.status(404).end();//<- 404 out if no rows have changed, because the id wasn't found in the db
        } else {
            res.status(200).end(); //200-OK if good
        }
    });
});

//export the router for the server in server.js to access:
module.exports = router;