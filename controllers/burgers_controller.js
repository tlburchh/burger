var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

//create routers and logic for each router

router.get("/", function(req, res){
    burger.all(function(data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function(req, res){
    console.log("check1");
    console.log(req.body);
    burger.create([
      "burger_name", "devoured"  
    ], [
        req.body.burger_name, req.body.devoured,
       
    ], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id?", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("conditions", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows ==0){
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

//export route for server.js
module.exports = router;