/*
 var express = require('express');
 var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router; */

var express = require('express');
var router = express.Router();
const userControls = require("../controllers/user.controller");

  // Create a new Tutorial
  router.post("/create", userControls.create);

  // Retrieve all Tutorials
  router.get("/getAll", userControls.findAll);

  // Retrieve all published Tutorials
  //router.get("/get", userControls.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/getOne/:id", userControls.findOne);

  // Update a Tutorial with id
  router.put("/update/:id", userControls.update);

  // Delete a Tutorial with id
  router.delete("/delete/:id", userControls.delete);

  // Delete all Tutorials
  router.delete("/deleteAll/", userControls.deleteAll);

module.exports = router;
