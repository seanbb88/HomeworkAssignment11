var express = require("express");

var router = express.Router();


var cat = require("../models/sandwiches.js");


router.get("/", function(req, res) {
  sandwich.all(function(data) {
    var object = {
      sandwich: data
    };
    console.log(object);
    res.render("index", object);
  });
});

router.post("/api/sandwiches", function(req, res) {
  cat.create(["id", "sandwich"], [req.body.id, req.body.sandwich], function(result) {
    
    res.json({ id: result.insertId });
  });
});



module.exports = router;
