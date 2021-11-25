var express = require('express');
var router = express.Router();

const commonControlrs = require("../controllers/common.controller");

//Get Country
router.get("/getCountry", commonControlrs.getCountry);
//Get Role
router.get("/getRole", commonControlrs.getRole);

module.exports = router;