//Import ORM
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.create("burgers", "burger_name", val, function(res){
            cb(res);
        });
        
    },
    update: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },

};

//Export database function for controller
module.exports = burger;