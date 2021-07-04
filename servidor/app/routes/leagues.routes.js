var express = require("express");
var router = express.Router();
const leagues = require("../controllers/leagues.controller");

router.get("/", leagues.list);



module.exports = router;