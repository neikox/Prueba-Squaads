var express = require("express");
var router = express.Router();
const leagues = require("../controllers/teams.controller");

router.get("/", teams.list);

router.get("/ficha/nueva", teams.create);

router.post("/nueva", teams.grabar);

router.get("/ficha/:id", teams.show);

router.post("/save/:id", teams.update);

router.get("/borrar/:id", teams.delete);

module.exports = router;