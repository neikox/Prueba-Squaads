var express = require("express");
var router = express.Router();
const teams = require("../controllers/teams.controller");

router.get("/:Liga", teams.list);

router.get("/ficha/nueva", teams.create);

router.post("/nueva", teams.grabar);

router.get("/ficha/:_id", teams.show);

router.post("/save/:_id", teams.update);

router.get("/borrar/:_id", teams.delete);

module.exports = router;