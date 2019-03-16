//imports the ORM object to give functionality to new functions in the "burger" object here:
var orm = require("../config/orm.js");

var burger = {
    all: function() { //our "read" method, CRUDwise
        orm.selectAll();
    },
    create: function() {
        orm.insertOne();
    },
    update: function() {
        orm.updateOne();
    }
};

burger.update();

//export for access by the burgerController.js:
module.exports = burger;