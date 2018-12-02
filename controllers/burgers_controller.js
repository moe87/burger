var express = require("express");
var burgers = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
	burgers.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		}
		res.render("index", hbsObject);
	});
});


router.post("/addBurger", function(req, res){
	console.log(req.body);
	burgers.insertOne(["burger_name", "devoured"], [req.body.burgerName, false], function(data) {
		var hbsObject = {
			burgers: data
		}
		res.render("index", hbsObject);
	});
});

router.put("/addBurger/:id", function(req, res){
	var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.updateOne(
    {
      devoured: true
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});


module.exports = router;