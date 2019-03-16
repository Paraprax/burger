//dependencies:
var express = require("express");
var burger = require("../models/burger.js"); //<- imports the burger-model to use its db functions from the orm

//instantiates a router:
var router = express.Router();

//all our routes for interaction with this app:
router.get({});

router.post({});

router.put({});

//export the router for the server.js to access
module.exports = router;