//imports the ORM object to give functionality to new functions in the "burger" object here:
var orm = require("../config/orm.js");

var burger = {
    all: function() { //our "read" method, CRUDwise
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(columns, values, cb) {
        orm.insertOne("burgers", columns, values, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

//export for access by the burgerController.js:
module.exports = burger;