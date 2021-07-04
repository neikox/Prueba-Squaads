var express = require("express");
var router = express.Router();
const players = require("../controllers/players.controller");

router.get("/", players.list);

router.get("/ficha/nueva", players.create);

router.post("/nueva", players.grabar);

router.get("/ficha/:id", players.show);

router.post("/save/:id", players.update);

router.get("/borrar/:id", players.delete);

module.exports = router;